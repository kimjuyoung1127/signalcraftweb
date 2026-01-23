# Project Structure

This document outlines the file structure of the SignalCraft frontend application.

## Directory Layout

```
frontend/
├── src/
│   ├── app/                 # App Router (Next.js 16)
│   │   ├── [locale]/        # Internationalized routes
│   │   │   ├── cases/       # Case Studies pages
│   │   │   ├── news/        # News & Updates pages
│   │   │   ├── guide/       # Installation Guide
│   │   │   ├── privacy/     # Privacy Policy
│   │   │   └── terms/       # Terms of Service
│   │   └── globals.css      # Global styles & Tailwind directives
│   ├── components/
│   │   ├── ui/              # Reusable base components (Button, Input, etc.)
│   │   └── shared/          # Shared layout components (Header, Footer)
│   ├── features/            # Feature-based modules
│   │   ├── hero/            # Hero section with WebGL AudioWaveform
│   │   ├── about/           # About section with Infinite Marquee
│   │   ├── why-us/          # Technology/Why Us section (Bento Grid)
│   │   ├── cases/           # Case study components
│   │   ├── news/            # News components
│   │   ├── guide/           # Guide components
│   │   └── contact/         # Contact section & Floating Actions (FAB)
│   └── i18n/                # Internationalization config & routing
├── messages/                # JSON translation files (en.json, ko.json)
├── public/                  # Static assets (images, icons)
└── docs/                    # Project documentation
```

## core Features

### Feature Modules (`src/features`)
We organize code by feature rather than type. Each folder in `src/features` contains the components, hooks, and logic specific to that part of the domain.
- **Hero**: Contains the 3D Audio Visualizer (`AudioWaveform.tsx`) using React Three Fiber.
- **Contact**: Includes the `FloatingActions` FAB for quick diagnosis.

### Internationalization
- Uses `next-intl` for routing and translations.
- Routes are prefixed with `/[locale]` (e.g., `/en`, `/ko`).
- Configuration is in `src/i18n`.

### Styling & Theme
- **Tailwind CSS**: Utility-first styling.
- **Dark Mode**: Implemented via `next-themes` and Tailwind's `darkMode: 'class'` strategy.
- **Framer Motion**: Used for entrance animations and micro-interactions.
