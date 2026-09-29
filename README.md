# Silver Fox Engineering

Public bilingual engineering portal for the **Silver Fox ecosystem**.

- Default language: English
- Persian: `/fa/`
- Framework: Next.js static export
- Hosting target: GitHub Pages
- Custom domain: `engineering.silverfoxcloud.com`

## Purpose

This repository contains only information intentionally approved for public engineering communication: product overviews, ecosystem relationships, architecture principles and engineering standards.

Private product repositories, source code, credentials, secrets, sensitive schemas, internal infrastructure details and non-public security implementation are out of scope.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The static site is exported to `out/`.

## GitHub Pages

The included workflow deploys `out/` with GitHub Pages Actions.

Repository settings:

1. Repository → **Settings → Pages**
2. Under **Build and deployment → Source**, choose **GitHub Actions**
3. Set **Custom domain** to `engineering.silverfoxcloud.com`
4. Cloudflare DNS should contain:
   - Type: `CNAME`
   - Name: `engineering`
   - Target: `silverfoxcloud.github.io`
   - Proxy: **DNS only** while GitHub validates and provisions HTTPS
5. Enable **Enforce HTTPS** when GitHub makes it available.

## Security

See [SECURITY.md](SECURITY.md).
