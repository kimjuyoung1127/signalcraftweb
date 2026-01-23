# SignalCraft Frontend

This project is the frontend for SignalCraft, a smart factory solution startup.
Built with Next.js 16, Tailwind CSS, and React Three Fiber.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, React Three Fiber
- **i18n**: next-intl

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure
For a detailed breakdown, see [docs/structure.md](../docs/structure.md).

- `src/app/[locale]`: App Router with i18n
- `src/features`: Feature-based modules (Hero, About, Cases, News, etc.)
- `src/components/shared`: Reusable UI components
- `messages`: Locale JSON files

## Key Features
- **Sound to Insight**: WebGL Audio Visualization
- **Dark Mode**: System-aware dark theme with manual toggle
- **Responsive**: Optimised mobile-first design
- **Detail Pages**: Dynamic routing for Case Studies, News, and Guides
- **Interactive UI**: Infinite Marquee, Floating Action Button (FAB), and Staggered Animations
