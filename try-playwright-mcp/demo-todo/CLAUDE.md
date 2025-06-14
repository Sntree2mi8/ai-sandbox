# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.3 application with TypeScript that implements an in-memory TODO list. The app uses React 19, Tailwind CSS v4, and Turbopack for development.

## Common Commands

```bash
# Development
npm run dev       # Start development server with Turbopack on http://localhost:3000

# Production
npm run build     # Build for production
npm run start     # Start production server

# Code Quality
npm run lint      # Run ESLint
```

## Architecture

### Component Structure
The application follows a component-based architecture with state managed at the TodoList level:

- **`app/components/TodoList.tsx`**: Main container component that manages all todo state and CRUD operations
- **`app/components/TodoItem.tsx`**: Individual todo with inline editing, toggle, and delete functionality  
- **`app/components/TodoForm.tsx`**: Controlled form for adding new todos
- **`app/types/todo.ts`**: TypeScript interface for Todo items

### State Management
- Uses React's built-in `useState` for local state management
- All todos are stored in-memory (no persistence)
- State flows down from TodoList to child components via props

### Data Flow
1. TodoList maintains the single source of truth for all todos
2. CRUD operations are defined in TodoList and passed down as callbacks
3. TodoForm and TodoItem components call these callbacks to modify state
4. No external API or database integration currently exists

## Key Technical Decisions

- **Client Components**: All interactive components use `'use client'` directive
- **Styling**: Tailwind CSS utility classes for all styling
- **IDs**: Uses `Date.now().toString()` for todo IDs (sufficient for in-memory storage)
- **TypeScript**: Strict mode enabled with comprehensive type coverage