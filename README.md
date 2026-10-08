# Muhammad Muhaimin — Portfolio Website

A responsive, single-page portfolio built for GitHub Pages. The site is based on the content and visual identity of the original Canva portfolio, with improved navigation, project filtering, mobile layouts and accessible project detail dialogs.

## Publish on GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a **public** repository named `YOUR-USERNAME.github.io`.
3. Upload everything inside this folder to the root of that repository. Keep the `assets` folder structure unchanged.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select the `main` branch and `/(root)`, then save.
7. Visit `https://YOUR-USERNAME.github.io` after the deployment finishes.

The same files also work in a normal project repository. In that case the URL will be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

## Preview locally

From this folder, start any simple static server. For example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Update portfolio content

- Personal introduction and contact section: edit `index.html`.
- Projects, credits and Google Drive links: edit the `projects` array at the top of `script.js`.
- Colours, spacing and responsive layouts: edit `styles.css`.
- Images: place new files inside `assets/images` and reference them from `script.js`.

## Included features

- Responsive desktop, tablet and mobile layouts
- Film, AI content, and drama/content filters
- Accessible project-detail dialog
- Original project posters and production images
- Direct project, email, WhatsApp, Instagram and Facebook links
- SEO and social-sharing metadata
- Reduced-motion support

No framework, package installation or build command is required.
