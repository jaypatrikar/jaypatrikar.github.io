# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal academic website for Jay Patrikar (www.jaypatrikar.me), hosted on GitHub Pages. No build system — HTML/CSS/JS files are served directly.

## Development

**Local server** (any of these work):
```bash
python3 -m http.server 8000
# or
npx serve .
```

A local server is required because the component loader uses `fetch()` which doesn't work with `file://` protocol.

**Deployment**: Push to `main` branch — GitHub Pages deploys automatically.

## Architecture

### Component System

Client-side component injection via `js/components.js`:
- HTML pages declare empty `<div id="header-container">` and `<div id="sidebar-container">`
- `components.js` fetches `components/header.html` (mobile nav) and `components/sidebar.html` (desktop nav) and injects them into the DOM
- Page metadata (title, description, OG tags) is centralized in the `pageData` object in `components.js` — update it when adding/renaming pages
- After component injection, jQuery event handlers are re-initialized for the responsive menu toggle
- Email addresses use base64 encoding to prevent scraping

### Pages

Root-level HTML files: `index.html` (home/about), `publications.html`, `education.html` (resume/CV), `404.html`.

### Styling

- `css/templatemo-style.css` — main stylesheet (~1945 lines), uses CSS custom properties for theming
- Bootstrap 3.x used only for grid system (`col-md-*`, responsive utility classes)
- Color scheme defined via CSS variables (emerald/slate theme): `--color-primary: #10B981`, `--color-dark-bg: #0F172A`
- Responsive breakpoints: 767px (mobile), 991px (tablet), 1199px (large desktop)
- Fonts: Roboto loaded locally from `fonts/` directory

### JavaScript

- jQuery 1.10.2 (`js/vendor/`) — used for DOM manipulation and responsive menu
- `js/main.js` — page highlighting, mobile menu toggle
- `js/plugins.js` — SinglePageNav plugin for smooth scroll navigation
- Minified versions in `js/min/` (not auto-generated — manually maintained)

### Key Directories

- `components/` — reusable HTML fragments (head, header, sidebar)
- `img/` — profile photo, banner, publication thumbnails, institution logos
- `files/` — downloadable documents (cv.pdf)
- `fonts/` — self-hosted Roboto and icon fonts (Font Awesome, Academicons)
- `archive/` — legacy/unused files including original SASS source
- `docs/` — design documentation and notes
