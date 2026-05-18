# Youssef El Moussaaif Portfolio

Static portfolio website for Youssef El Moussaaif, built as a lightweight HTML/CSS/JS project and ready for Vercel.

## Run locally

Open `index.html` directly, or serve the folder locally:

```powershell
python -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173
```

## Project structure

- `index.html`: main entry point
- `assets/css/site.css`: styling and responsive behavior
- `assets/js/site-data.js`: editable content and links
- `assets/js/site.js`: rendering and interactions
- `assets/images/`: portrait and social preview image
- `vercel.json`: basic Vercel config

## Edit content

Most text, links, contact info, and timeline data can be changed in:

```text
assets/js/site-data.js
```

## Deploy to GitHub and Vercel

### 1. Push to GitHub

```powershell
git init
git add .
git commit -m "Initial portfolio site"
```

If you use GitHub CLI:

```powershell
gh repo create youssef-barber --source . --push
```

### 2. Import into Vercel

1. Open Vercel
2. Import the GitHub repository
3. Keep the default settings
4. Deploy

No build command is required because this is a static site.
