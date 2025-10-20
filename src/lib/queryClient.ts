import { QueryClient } from "@tanstack/react-query";

async function handleResponse(response: Response) {
  if (!response.ok) {
    if (response.status >= 500) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    const text = await response.text();
    try {
      const error = JSON.parse(text);
      throw new Error(`${response.status}: ${error.message || response.statusText}`);
    } catch  {
      throw new Error(`${response.status}: ${response.statusText}`);
    }
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

export async function apiRequest(
  url: string,
  options?: RequestInit,
) {
  const response = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    credentials: "include",
  });

  return handleResponse(response);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const url = queryKey[0] as string;
        return apiRequest(url);
      },
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error) => {
        console.error("Mutation error:", error);
      },
    },
  },
});
