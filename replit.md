# Gaming Cafe Finder Application

## Overview

This is a full-stack web application for discovering and exploring gaming cafes. Users can browse nearby gaming cafes, view detailed information about each venue including available gaming setups (PCs and PS5 consoles), pricing, amenities, and contact details. The application features a mobile-first design with a modern, dark-themed UI optimized for gaming enthusiasts.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling:**
- Built with React 18 using TypeScript for type safety
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Client-side routing implemented with Wouter for lightweight navigation
- Mobile-first responsive design targeting a minimum width of 375px

**UI Component System:**
- Shadcn/ui component library (New York style variant) with Radix UI primitives
- Tailwind CSS for styling with custom CSS variables for theming
- Dark theme (#1c1a29 background) optimized for gaming aesthetics
- Comprehensive set of pre-built components including dialogs, dropdowns, forms, and data display elements

**State Management:**
- TanStack Query (React Query) v5 for server state management and data fetching
- React Hook Form with Zod validation for form handling
- Local component state with React hooks

**Data Fetching Strategy:**
- REST API communication with fetch-based utilities
- Query client configured with infinite stale time (optimized for static-like data)
- Credential-based authentication support (cookies)
- Custom error handling with automatic HTTP status code parsing

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- ESM module system for modern JavaScript features
- Development mode using tsx for TypeScript execution
- Production build with esbuild for optimized bundle size

**API Design:**
- RESTful endpoints under `/api` namespace
- JSON request/response format
- Route-based organization with separation of concerns
- Request logging middleware for API debugging

**Data Layer:**
- In-memory storage implementation (MemStorage class) for development
- Interface-based storage abstraction (IStorage) allowing for future database integration
- Initial seed data for gaming cafes with comprehensive attributes

**Schema & Validation:**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Shared schema definitions between client and server
- Zod schema generation from Drizzle tables for runtime validation
- Type-safe database operations with TypeScript inference

### External Dependencies

**Database:**
- PostgreSQL configured via Drizzle ORM
- Neon serverless database driver (@neondatabase/serverless)
- Connection managed through DATABASE_URL environment variable
- Schema migrations stored in `/migrations` directory

**UI Libraries:**
- Radix UI component primitives (20+ component packages)
- Lucide React for iconography
- React Icons for additional icon sets (WhatsApp, etc.)
- Class Variance Authority (CVA) for component variant management
- CLSX and Tailwind Merge for className composition

**Development Tools:**
- Replit-specific plugins for development environment:
  - Runtime error overlay for debugging
  - Cartographer for code navigation
  - Development banner for environment awareness
- PostCSS with Autoprefixer for CSS processing

**Build & Runtime:**
- TypeScript with strict mode enabled
- Path aliases configured (@/, @shared/, @assets/)
- Vite build output to dist/public for static assets
- Node.js runtime for server execution

**Notable Architectural Decisions:**

1. **Monorepo Structure:** Client and server code colocated with shared types in `/shared` for type safety across the stack

2. **Hybrid Storage:** Current in-memory storage allows rapid development while infrastructure (IStorage interface) supports future PostgreSQL migration without API changes

3. **Mobile-First Design:** UI optimized for 375px minimum width with responsive scaling, reflecting primary mobile gaming cafe discovery use case

4. **Type-Safe API:** Shared Zod schemas ensure request/response validation matches database schema, preventing runtime type errors

5. **Development Experience:** Vite's fast refresh, TypeScript strict mode, and Replit integrations optimize developer productivity