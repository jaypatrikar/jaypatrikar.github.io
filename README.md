# Academic Personal Website

A clean, responsive academic personal website. Live at [jaypatrikar.me](https://www.jaypatrikar.me).

## Using This Template

Feel free to fork this repo and adapt it for your own site.

### Quick Start

1. **Fork & clone** this repository
2. **Edit the content** in the HTML files:
   - `index.html` — home/about page
   - `publications.html` — publications list
   - `education.html` — resume/CV
3. **Replace images** in `img/` with your own (profile photo, logos, publication thumbnails)
4. **Update metadata** in `js/components.js` — the `pageData` object holds page titles and descriptions
5. **Update navigation** in `components/sidebar.html` and `components/header.html`
6. **Run locally**:
   ```bash
   python3 -m http.server 8000
   ```
   A local server is needed because components are loaded via `fetch()`.
7. **Deploy** — push to `main` and enable GitHub Pages, or host anywhere that serves static files.

### Features

- Dark/light theme with system preference detection
- Responsive sidebar (desktop) + hamburger menu (mobile)
- Component system — shared header, sidebar, and head via JS injection
- Email obfuscation — base64 encoded, revealed on click to prevent scraping
- Self-hosted fonts (Roboto, Font Awesome, Academicons) — no external requests at runtime
- Publication cards with thumbnails
- No build step — plain HTML/CSS/JS

### Structure

```
index.html / publications.html / education.html   # Pages
components/          # Reusable HTML fragments (header, sidebar)
css/                 # Stylesheets (templatemo-style.css is the main one)
js/                  # Component loader, nav, plugins
img/                 # Images and logos
fonts/               # Self-hosted web fonts
files/               # Downloadable documents (CV, etc.)
```

## Acknowledgments

The original design is based on the [Volton template](http://www.templatemo.com/tm-441-volton) by [templatemo](http://www.templatemo.com). The template was further adapted from [Boris Ivanovic's website](https://www.borisivanovic.com/). It has since been extensively modified.

## License

The original [Volton template](http://www.templatemo.com/tm-441-volton) is provided free for personal, learning, and commercial use by templatemo. Boris Ivanovic's adaptation does not include an explicit license. My modifications build on both.

If you'd like to use this as a starting point for your own site, go ahead — just keep the templatemo attribution in the source comments. I can't grant a formal open-source license since the upstream terms are not fully specified.
