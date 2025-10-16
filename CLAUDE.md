# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 8080
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode  
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React-based landing page built with modern web technologies and component-based architecture.

### Tech Stack
- **Vite** - Build tool and dev server
- **React 18** - UI framework with TypeScript
- **shadcn/ui** - Component library built on Radix UI primitives
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **TanStack Query** - Server state management
- **React Hook Form + Zod** - Form handling and validation

### Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (reusable primitives)
│   └── [Sections]    # Page section components (Hero, Intro, etc.)
├── pages/
│   ├── Index.tsx     # Main landing page
│   └── NotFound.tsx  # 404 page
├── hooks/            # Custom React hooks
├── lib/
│   └── utils.ts      # Utility functions (cn helper for class merging)
└── main.tsx          # App entry point
```

### Component Architecture

The main `Index.tsx` page is composed of modular section components:
- `HeroSection` - Hero video background with stats
- `IntroSection` - Introduction content
- `InteriorGallery` - Image gallery
- `VisionSection` - Vision/mission content
- `LeadershipSection` - Leadership profiles
- `CommunitySection` - Community connections
- `ContactSection` - Contact form and information
- `Footer` - Site footer

Each section component uses custom layouts and styling, allowing for section-specific design decisions and potential cloning from reference sites.

### Key Configuration

- **Path aliases**: `@/` maps to `src/` directory
- **Port**: Development server runs on port 8080
- **Styling**: Uses CSS custom properties for theming with shadcn/ui design tokens
- **Build target**: Modern browsers (ES2020)
- **Component library**: shadcn/ui with Radix UI primitives and Tailwind CSS

### Utility Functions

- `cn()` in `src/lib/utils.ts` - Combines clsx and tailwind-merge for conditional classes

### Layout Approach

Each section component implements its own layout system:
- Custom CSS Grid or Flexbox layouts
- Responsive design with Tailwind CSS breakpoints
- Section-specific spacing and styling decisions
- Flexibility to clone and adapt layouts from reference sites

### Routing

Simple React Router setup with:
- `/` - Main landing page
- `*` - 404 catch-all route

### Lovable Integration

This project is integrated with Lovable platform:
- Uses `lovable-tagger` for component tagging in development
- Auto-commits changes made via Lovable platform
- Deployable through Lovable's publish feature

## Design System Guidelines

### Color Palette Standards
**Professional palettes for modern React websites:**
- **Primary**: Deep Navy (#223674) or Sophisticated Blues for tech/finance
- **Accent**: Sky Blue (#6EC1E4) or vibrant focus colors
- **Supporting**: Leaf Green (#53A548), Soft Grass (#9DC183)
- **Neutrals**: Charcoal Grey (#2F2F2F), Off-White (#F8F8F8/#FAFAFA)
- **Highlight**: Warm Yellow (#F4CB4E) for calls-to-action

**Implementation Rules:**
- Use dominant base color + one accent + neutrals
- Test all palettes for accessibility and contrast ratios
- Maintain color consistency across all components

### Typography Standards
**Font Hierarchy:**
- **Headings**: Satoshi, Aeonik, or Clash Display (clean, modern)
- **Body**: Open Sans, Roboto, Lato (readable, flexible) 
- **Accent**: Migra or serif fonts for elegance in hero sections

**Text Size Scale:**
- H1 (Hero): 32-36px
- H2 (Sections): 24-30px  
- H3 (Subsections): 18-24px
- Subtitle: 18-22px
- Body: 16-18px
- Caption: 12-14px
- Buttons: 16-18px

**Typography Rules:**
- Line-height: 1.4-1.6 for body content
- Font-weight: 700 for headings, 400-500 for body
- Maintain hierarchy throughout all components

### Layout & Spacing System
**Grid Standards:**
- Use 12-column grid system for desktop layouts
- Responsive breakpoints: Desktop (1200px), Tablet (768px), Mobile (375px)
- Consistent grid alignment across all sections

**Spacing System (4-point system):**
- Container padding: 24-40px desktop, reduced for mobile
- Button padding: 12-16px with 8-16px spacing between
- Section vertical padding: 48-80px for distinct content blocks
- Use increments of 4px: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80

### Animation Guidelines
**GSAP/Framer Motion Standards:**
- **Entrance animations**: Fade, slide-in, scale-up on scroll
- **Staggered animations**: For grid/list items (sequential reveal)
- **Scroll-triggered**: Section animations on viewport entry
- **Micro-interactions**: Button hover/press, loading indicators
- **Easing**: Use custom curves for organic motion

**Animation Rules:**
- Keep animations purposeful (guide attention, provide feedback)
- Duration: 300-800ms for most interactions
- Use consistent easing across components
- Test performance on slower devices

### Implementation Standards
**Component Development:**
- Follow established patterns from existing components
- Use shadcn/ui primitives consistently
- Implement responsive design mobile-first
- Maintain accessibility standards (WCAG 2.1)

**Code Quality:**
- Use TypeScript for type safety
- Follow established naming conventions
- Implement proper error boundaries
- Optimize for performance (lazy loading, code splitting)