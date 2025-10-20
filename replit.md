# NetworkIQ - AI-Enhanced Personal CRM

## Overview

NetworkIQ is an AI-powered relationship intelligence platform designed to help executives maintain meaningful professional connections through context-triggered reminders and smart recommendations. The application provides a mobile-first interface that delivers daily digests of reconnection opportunities, tracks relationship strength, and suggests personalized conversation starters based on professional events and history.

The platform uses intelligent triggers (news events, time-based patterns, professional milestones) to prompt users when it's optimal to reach out to contacts, helping busy professionals maintain their network without the mental overhead of tracking relationship maintenance manually.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript using Vite as the build tool
- Single Page Application (SPA) architecture with client-side routing via Wouter
- Component-based UI using shadcn/ui (Radix UI primitives with Tailwind CSS)
- State management through React Query (@tanstack/react-query) for server state

**Design System:**
- Tailwind CSS with custom design tokens defined in CSS variables
- Dark theme with neon lime green (#75ff99) accents on dark navy background
- Responsive design with mobile-first approach
- Component library from shadcn/ui providing accessible, customizable primitives

**Routing Strategy:**
- Screen-based navigation system using state management
- Authentication-aware routing that shows Landing page for unauthenticated users
- Main application uses a single Index page with multiple screen components (NotificationScreen, DigestScreen, ContactDetailScreen, HistoryScreen, ComposerScreen, SuccessScreen, MaintenanceScreen)
- Navigation handled through props-based callbacks rather than URL-based routing

### Backend Architecture

**Server Framework:**
- Express.js server written in TypeScript
- Development mode uses Vite middleware for HMR (Hot Module Replacement)
- Production mode serves static assets from dist/public
- Custom request logging middleware for API routes

**Database Layer:**
- Drizzle ORM with PostgreSQL dialect
- Neon serverless PostgreSQL database (@neondatabase/serverless)
- WebSocket-based connection pooling for serverless compatibility
- Schema-first approach with TypeScript type inference

**Database Schema:**
- `sessions` table: Stores session data for authentication (sid, sess, expire)
- `users` table: Core user data (id, email, firstName, lastName, profileImageUrl, timestamps)
- UUID-based primary keys with automatic generation

**Session Management:**
- Express-session with PostgreSQL store (connect-pg-simple)
- 1-week session TTL
- Secure cookies (httpOnly, secure flags enabled)
- Session secret from environment variable

### Authentication & Authorization

**Authentication Provider:**
- Replit Auth integration using OpenID Connect (OIDC)
- Passport.js strategy for OIDC authentication
- Memoized OIDC configuration discovery (1-hour cache)
- Token-based authentication with refresh capability

**User Management:**
- Upsert pattern for user creation/updates (handles both new and returning users)
- User profile synced from OIDC claims (email, names, profile image)
- Authenticated route protection via `isAuthenticated` middleware
- Frontend authentication state managed through React Query with `/api/auth/user` endpoint

**Security Considerations:**
- Environment-based configuration (DATABASE_URL, SESSION_SECRET, REPL_ID, ISSUER_URL)
- Domain validation via REPLIT_DOMAINS
- CSRF protection through secure session cookies
- TypeScript strict mode disabled for flexibility (potential security consideration)

### External Dependencies

**UI Component Libraries:**
- @radix-ui/* components: Accessible, unstyled UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- class-variance-authority: Type-safe variant management for components
- cmdk: Command menu component
- lucide-react: Icon library
- react-day-picker: Calendar/date picker
- embla-carousel-react: Carousel component
- recharts: Charting library
- vaul: Drawer component
- input-otp: OTP input component

**State & Data Management:**
- @tanstack/react-query: Server state synchronization with automatic caching, background refetching
- react-hook-form with @hookform/resolvers: Form state management with Zod validation

**Development Tools:**
- TypeScript with relaxed compiler settings (strict: false, noImplicitAny: false)
- ESLint with React hooks and React Refresh plugins
- PostCSS with Tailwind CSS and Autoprefixer
- tsx: TypeScript execution for development server
- Drizzle Kit: Database migration tooling

**Database & Infrastructure:**
- @neondatabase/serverless: PostgreSQL client optimized for serverless
- ws: WebSocket library (required for Neon serverless)
- connect-pg-simple: PostgreSQL session store

**Authentication:**
- openid-client: OIDC client library
- passport: Authentication middleware
- express-session: Session management
- memoizee: Function memoization for performance

**Type Definitions:**
- @types/express, @types/express-session, @types/passport, @types/ws, @types/connect-pg-simple, @types/memoizee: TypeScript definitions for Node.js libraries

**Build & Deployment:**
- Vite production builds output to dist/public
- Separate TypeScript compilation for server code
- Environment-based configuration (development vs production)
- Lovable tagger plugin for component tracking in development mode