# NetworkIQ - AI-Enhanced Personal CRM

## Overview

NetworkIQ is an AI-powered relationship intelligence platform designed to help executives maintain meaningful professional connections. The application provides context-triggered reminders and smart recommendations to help users reconnect with their professional network at the right time.

The platform analyzes professional relationships and suggests optimal moments for reconnection based on events, time elapsed, and relationship strength. It features an intuitive mobile-first interface with various screens including notifications, contact digests, detailed contact views, interaction history, and an AI-powered message composer.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- React Router for client-side routing
- TanStack Query (React Query) for server state management and data fetching

**UI Component System:**
- Radix UI primitives for accessible, unstyled components
- shadcn/ui component library built on Radix UI
- Tailwind CSS for utility-first styling with custom design tokens
- Custom design system with dark navy backgrounds and neon lime green accents

**State Management:**
- React Query for server state, caching, and API request management
- React Context for authentication state
- Local component state using React hooks

**Routing Strategy:**
- Single Page Application (SPA) architecture
- Conditional routing based on authentication status
- Landing page for unauthenticated users
- Protected main application routes for authenticated users
- Screen-based navigation system with programmatic transitions

### Backend Architecture

**Server Framework:**
- Express.js for HTTP server and API routing
- TypeScript for type safety across the stack
- Custom route registration system

**Development Setup:**
- Vite middleware integration for hot module replacement (HMR)
- TSX watch mode for automatic server restart during development
- SSR-ready template transformation via Vite

**Session Management:**
- express-session for session handling
- connect-pg-simple for PostgreSQL-backed session storage
- Secure cookie configuration with httpOnly, secure, and sameSite flags
- 7-day session TTL (Time To Live)

### Authentication System

**Authentication Provider:**
- Replit OpenID Connect (OIDC) integration
- Dynamic client configuration based on deployment domain
- Authorization code flow with PKCE support

**Authentication Flow:**
- OIDC discovery for automatic configuration
- Token endpoint authentication using "none" method (public client)
- Session-based user state management
- Protected API routes with authentication middleware

**User Management:**
- User data stored in PostgreSQL
- Upsert pattern for user creation/updates
- User profile includes email, name, and profile image

### Data Storage

**Database:**
- PostgreSQL as the primary data store
- Drizzle ORM for type-safe database operations
- Schema-first approach with TypeScript types inferred from schema

**Schema Design:**
- **users table**: Stores user profiles (id, email, firstName, lastName, profileImageUrl, timestamps)
- **sessions table**: Stores session data with expiration (sid, sess JSONB, expire timestamp)
- UUID generation for user IDs using PostgreSQL's gen_random_uuid()
- Indexed session expiration for efficient cleanup

**Migration Strategy:**
- Drizzle Kit for schema migrations
- Migration files stored in `/migrations` directory
- Push-based deployment with `db:push` command

### API Architecture

**API Design:**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Credential-based authentication (cookies)

**Error Handling:**
- Centralized error handling in query client
- HTTP status code-based error messages
- 401 unauthorized detection for authentication errors
- 500+ status codes treated as server errors

**Key Endpoints:**
- `GET /api/auth/user` - Retrieve authenticated user profile
- `/api/login` - Initiate OIDC authentication flow
- `/api/callback` - OIDC callback handler

## External Dependencies

### Third-Party Services

**Replit Authentication:**
- Replit OIDC provider for user authentication
- Requires REPLIT_DOMAINS environment variable for redirect URIs
- Requires REPL_ID for client identification

**Environment Variables:**
- `DATABASE_URL` - PostgreSQL connection string (required)
- `SESSION_SECRET` - Secret key for session encryption (required)
- `REPLIT_DOMAINS` - Comma-separated list of allowed domains (required)
- `REPL_ID` - Replit application ID (required)
- `NODE_ENV` - Environment mode (production/development)

### Core Dependencies

**UI & Component Libraries:**
- @radix-ui/* - Accessible component primitives (accordion, dialog, dropdown, etc.)
- class-variance-authority - Utility for managing component variants
- tailwindcss - Utility-first CSS framework
- lucide-react - Icon library

**Data & Forms:**
- @tanstack/react-query - Server state management
- react-hook-form - Form state and validation
- @hookform/resolvers - Validation schema resolvers
- zod (implied) - Schema validation

**Backend:**
- drizzle-orm - TypeScript ORM
- postgres - PostgreSQL client
- express - Web framework
- openid-client - OIDC client implementation
- memoizee - Function memoization for caching

**Build Tools:**
- vite - Build tool and dev server
- typescript - Type system
- tsx - TypeScript execution
- lovable-tagger - Component tagging (development only)