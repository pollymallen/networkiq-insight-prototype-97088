import { QueryClient } from "@tanstack/react-query";

async function handleResponse(response: Response) {
  if (!response.ok) {
    const text = await response.text();
    let message = `${response.status}: ${response.statusText}`;
    try {
      const errorData = JSON.parse(text);
      if (errorData.message) {
        message += ` - ${errorData.message}`;
      }
    } catch {
      if (text) {
        message += ` - ${text}`;
      }
    }
    throw new Error(message);
  }

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return await response.json();
  }

  return await response.text();
}

export async function apiRequest(
  url: string,
  options?: RequestInit
): Promise<any> {
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

async function defaultQueryFn({ queryKey }: { queryKey: any[] }): Promise<any> {
  const url = queryKey[0] as string;
  return apiRequest(url);
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});
