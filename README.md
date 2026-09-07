# Tayo UI/UX portfolio

This folder is a standalone static website ready for GitHub Pages. It does not require Node.js, npm, React, or a build step.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload everything inside this folder to the repository root, including the `assets` folder and `.nojekyll` file.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.

GitHub will display the live site URL after deployment.

## Main files

- `index.html` — page content and metadata
- `styles.css` — layout, colors, responsive design, and animation
- `script.js` — navigation menu and gallery duplication
- `assets/` — portfolio images and social sharing image
- `favicon.svg` — browser tab icon
- `.nojekyll` — tells GitHub Pages to serve the files directly

After publishing, replace the relative `og:image` and `twitter:image` values in `index.html` with the absolute URL of `assets/og.png` for reliable social previews.
