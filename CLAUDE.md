# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS v4. It's a single-page application showcasing professional experience, projects, and contact information with accessibility features and dark mode support.

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Architecture & Structure

### Core Tech Stack

- **Next.js 15** with App Router (src/app/ directory structure)
- **React 19** with TypeScript strict mode enabled
- **Tailwind CSS v4** with custom theme configuration
- **Vercel Analytics** for performance tracking

### Project Structure

```
src/
  app/
    layout.tsx     - Root layout with Inter font, analytics, and dark mode setup
    page.tsx       - Main portfolio page with experiences and projects
    globals.css    - Global styles with Tailwind v4 and accessibility utilities
```

### Key Features

- **Accessibility-first**: Proper semantic HTML, ARIA labels, focus management
- **Dark mode**: Automatic dark/light theme support via CSS classes
- **Type safety**: All data structures properly typed (Experience, Project, Link interfaces)
- **Performance**: Inter font optimization with fallbacks and preloading

### Styling Approach

- Uses Tailwind CSS v4 with custom `@theme` configuration
- Inter font loaded via next/font with comprehensive fallback stack
- Accessibility utilities (sr-only, focus-visible) defined in globals.css
- Purple accent color (#6366f1) for links and interactive elements

### Content Structure

- **Experiences**: Professional work history with company links and periods
- **Projects**: Personal and professional projects with descriptions and URLs
- **Social Links**: LinkedIn, GitHub, Bluesky profiles in footer
- **Call-to-Action**: Freelance availability with Cal.com booking link

## Development Guidelines

### Code Patterns

- Use TypeScript interfaces for all data structures
- Implement semantic HTML with proper ARIA attributes
- Follow accessibility best practices (focus states, screen reader support)
- Maintain consistent styling with Tailwind utility classes

### Making Changes

- Data changes: Update the arrays in `src/app/page.tsx` (experiencesData, projectsData, links)
- Styling: Modify Tailwind classes or add custom CSS to globals.css
- Layout changes: Edit `src/app/layout.tsx` for global modifications
- SEO: Update metadata in page.tsx export

### TypeScript Configuration

- Strict mode enabled with path mapping (@/_ → src/_)
- ESLint configured with Next.js and TypeScript rules
- Prettier with Tailwind plugin for consistent formatting
