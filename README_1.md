# Ma Xinyu Portfolio

This is a standalone static portfolio website prepared for deployment on Cloudflare Pages through GitHub.

The visual design, content, project images, animations, responsive layout, and front-end interactions are kept in the static files under `public/`.

## Project Structure

```text
public/
  portfolio.html      Main portfolio page
  styles.css          Website styles
  script.js           Website interactions
  assets/             Project images, profile images, logos, and video
scripts/
  build.mjs           Builds the Cloudflare Pages output
  serve.mjs           Local preview server
dist/                 Generated build output, not committed
```

## Local Preview

Use Node.js 18 or newer.

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:4173
```

The local server also supports:

```text
http://127.0.0.1:4173/portfolio
http://127.0.0.1:4173/portfolio.html
```

## Build

```bash
npm run build
```

The build output is generated in:

```text
dist
```

During build, the site creates these entry points:

```text
dist/index.html
dist/portfolio.html
dist/portfolio/index.html
```

This makes both `/` and `/portfolio` work after deployment.

## Cloudflare Pages Deployment

1. Push this folder to a GitHub repository.
2. In Cloudflare Dashboard, open **Workers & Pages**.
3. Choose **Create application**.
4. Choose **Pages**.
5. Connect the GitHub repository.
6. Use these build settings:

```text
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: /
Node.js version: 18 or newer
```

7. Deploy.

## Routes

No `_redirects` file is required. The build creates physical HTML entry points
that Cloudflare Pages serves with its native static-file routing:

```text
dist/index.html             -> /
dist/portfolio.html         -> /portfolio.html
dist/portfolio/index.html   -> /portfolio/
```

Cloudflare Pages redirects the directory path `/portfolio` to `/portfolio/` and
then serves `dist/portfolio/index.html`. All CSS, JavaScript, image, and video
URLs are root-relative, so every supported route loads the same assets correctly.

## Notes

- No ChatGPT Sites, `.openai`, vinext, Next.js, Wrangler, D1, or R2 dependency is required.
- The website is static and can be hosted by Cloudflare Pages, GitHub Pages, Netlify, Vercel static hosting, or any ordinary static file server.
- The EasyCart video is included under `public/assets/projects/easycart/video/`, so the repository may be relatively large.
