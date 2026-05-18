# Youssef El Moussaaif Portfolio

A focused, high-performance personal portfolio for Youssef El Moussaaif, built as a static website with plain HTML, CSS, and JavaScript.

This project is intentionally simple in its stack and disciplined in its structure. The goal is not to showcase technical excess, but to present a strong digital identity with clarity, speed, and visual character.

## Overview

The site represents a professional online presence for a master barber and hairstylist based in Marrakech. It is designed to communicate credibility, craft, and style through a lightweight experience that is easy to maintain and fast to load.

Rather than using a framework, the project relies on a clean separation between:

- structure in `index.html`
- presentation in `assets/css/site.css`
- editable content in `assets/js/site-data.js`
- rendering and interactions in `assets/js/site.js`

This keeps the project approachable, portable, and easy to update over time.

## Project Philosophy

This repository follows a deliberate set of choices:

- Keep the stack small and reliable.
- Preserve strong visual identity without unnecessary complexity.
- Make content updates simple.
- Avoid over-engineering.
- Protect performance and code cleanliness.

The result is a portfolio that feels intentional on the web, while staying lightweight and maintainable behind the scenes.

## Why No Framework

The absence of a framework is intentional.

For this project, a framework would add complexity without solving a real problem. The site is content-driven, statically rendered, and does not require a client-side application architecture.

Using vanilla HTML, CSS, and JavaScript brings a few practical advantages:

- lower overhead
- fewer dependencies
- easier deployment
- simpler long-term maintenance
- cleaner control over markup, styling, and performance

This is not a limitation of the project. It is part of the design decision.

## Current State

The project is currently in a clean and production-ready static form.

It includes:

- responsive layout tuned for mobile-first viewing
- structured content driven from a single data file
- WhatsApp and Instagram integration
- social sharing metadata for preview cards
- Vercel-ready deployment setup
- lightweight animations and interaction polish

The site is intentionally scoped. It does not try to become a larger application than it needs to be.

## Project Structure

```text
.
|-- index.html
|-- vercel.json
|-- README.md
`-- assets/
    |-- css/
    |   `-- site.css
    |-- images/
    `-- js/
        |-- site-data.js
        `-- site.js
```

## Editing Content

Most project updates do not require touching the main HTML.

The primary file for content changes is:

```text
assets/js/site-data.js
```

This includes:

- hero text
- stats
- about section
- skills and experience
- contact details
- social links
- metadata values used for sharing and branding

Design and layout changes live in:

```text
assets/css/site.css
```

## Run Locally

Because the project is fully static, there is no install step and no build pipeline.

You can either open `index.html` directly in a browser, or run a small local server:

```powershell
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Deployment

The project is prepared for static hosting and works especially well with Vercel.

### GitHub

```powershell
git add .
git commit -m "Update portfolio"
git push
```

### Vercel

1. Import the repository into Vercel.
2. Keep the default static settings.
3. Deploy.

No build command is required.

## Notes

This repository is intentionally modest in tooling, but not modest in intent.

It is a small project with a clear job:

- present identity professionally
- stay easy to maintain
- remain fast and clean
- avoid unnecessary technical weight

That balance is the core of the project.
