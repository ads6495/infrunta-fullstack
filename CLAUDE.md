# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Primary Commands (run from root):**
- `bun dev` - Start all apps in development (web on :3001, server on :3000)
- `bun build` - Build all applications
- `bun check` - Run Biome linting and formatting
- `bun check-types` - TypeScript type checking across all apps

**Database Commands:**
- `bun db:push` - Push schema changes to database (no migration files)
- `bun db:migrate` - Create and run migrations
- `bun db:studio` - Open Prisma Studio UI
- `bun db:generate` - Generate Prisma client

**Individual App Commands:**
- `bun dev:web` - Start only frontend (React + TanStack Router)
- `bun dev:server` - Start only backend (Express + ORPC)

## Architecture Overview

**Monorepo Structure:**
- Turborepo with Bun package manager
- `apps/web/` - React frontend with TanStack Router
- `apps/server/` - Express backend with ORPC API layer

**Key Technologies:**
- **Frontend**: React 19, TanStack Router (file-based routing), TailwindCSS 4, shadcn/ui
- **Backend**: Express, ORPC (type-safe APIs), Prisma ORM, PostgreSQL
- **Auth**: Better Auth with email/password and Google OAuth
- **Tools**: Biome (linting/formatting), TypeScript, Bun runtime

**Database Schema:**
Language learning platform with hierarchical structure:
- `Language` → `Unit` → `Lesson` → `Exercise`
- User progress tracking via `UserLessonProgress` and `ExerciseAttempt`
- 12 different exercise types (audio matching, fill blanks, pronunciation, etc.)
- Premium content support with user roles

**Authentication Flow:**
- Better Auth handles session management with Prisma adapter
- Email verification required on signup
- Session cookies cached for 24 hours
- Role-based access control integrated

**API Architecture:**
- ORPC provides end-to-end type safety between frontend/backend
- Public and protected procedures via middleware
- Context includes session and user data
- Auto-generated TypeScript types from server to client

**Development Notes:**
- Prisma client generated to `apps/server/prisma/generated/`
- Database schema split across multiple `.prisma` files
- PWA support configured with Vite
- Hot reload enabled for both apps during development