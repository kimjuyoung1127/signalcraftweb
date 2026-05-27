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
│   │   └── api/             # API Routes (contact form email handler)
│   │   └── globals.css      # Global styles & Tailwind directives
│   ├── proxy.ts             # Next.js 16 proxy for locale routing
│   ├── components/
│   │   ├── ui/              # Reusable base components (Button, Input, etc.)
│   │   └── shared/          # Shared layout components (Header, Footer)
│   ├── features/            # Feature-based modules
│   │   ├── hero/            # Hero section with WebGL AudioWaveform
│   │   ├── about/           # About section (Interactive Korea Map, Sonar Timeline)
│   │   ├── why-us/          # Technology/Why Us section (Bento Grid)
│   │   ├── cases/           # Case study components
│   │   ├── news/            # News components
│   │   ├── guide/           # Guide components
│   │   └── contact/         # Contact section & Floating Actions (FAB)
│   └── i18n/                # Internationalization config & routing
├── messages/                # JSON translation files (en.json, ko.json)
├── public/                  # Static assets (images, korea-map.svg)
└── docs/                    # Project documentation
```

## core Features

### Feature Modules (`src/features`)
We organize code by feature rather than type. Each folder in `src/features` contains the components, hooks, and logic specific to that part of the domain.
- **Hero**: Contains the 3D Audio Visualizer (`AudioWaveform.tsx`) using React Three Fiber.
- **Contact**: Includes the `FloatingActions` FAB for quick diagnosis.

### Contact Form
- Primary endpoint: `src/app/api/contact/route.ts`
- Legacy compatibility endpoint: `src/app/api/ContactDetailPage/route.ts`
- Uses Resend in production and supports `CONTACT_FORM_DRY_RUN=true` for local smoke tests.
- Required production env keys are documented in `frontend/.env.local.example`.

### SEO
- Global metadata is generated in `src/app/[locale]/layout.tsx`.
- `src/app/sitemap.ts` emits localized static, case-study, and news URLs.
- `src/app/robots.ts` exposes the sitemap and allows crawling.

### Internationalization
- Uses `next-intl` for routing and translations.
- Routes are prefixed with `/[locale]` (e.g., `/en`, `/ko`).
- Configuration is in `src/i18n` and `src/proxy.ts`.

### Styling & Theme
- **Tailwind CSS**: Utility-first styling.
- **Dark Mode**: Implemented via `next-themes` and Tailwind's `darkMode: 'class'` strategy.
- **Framer Motion**: Used for entrance animations and micro-interactions.
