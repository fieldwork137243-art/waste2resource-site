# Waste2Resource

Plain static website for the Australian engineering-led Waste2Resource knowledge hub.

## Source of truth

The `outputs/` folder is the source of truth for the public website. Make all website content, style, script and asset changes there.

The sibling `work/cloudflare-pages/` folder is a deployment mirror. Do not edit it directly. From the parent project folder, run `sync-cloudflare-pages.ps1` to copy the current public files from `outputs/` into that mirror.

## Website structure

- `/` — homepage and platform positioning
- `/technical-library/` — searchable technical case library and map
- `/assessment-framework/` — four-step decision path and assessment lens
- `/research/` — research landscape and evidence ledger
- `/about/` — Kartik Singh and Waste2Resource
- `/contact/` — collaboration and contribution options
- `/404.html` — Cloudflare Pages-compatible not-found page
- `/styles.css` — shared visual system
- `/site.js` — shared mobile navigation
- `/library.js` — case data, filters, modal and map logic
- `/favicon.png` — 32×32 browser icon
- `/og-image.png` — 1200×630 Open Graph and social-sharing image

## Editing and deployment workflow

1. Edit the website in `outputs/`.
2. From the parent project folder, run:

   ```powershell
   .\sync-cloudflare-pages.ps1
   ```

3. Commit and push the `outputs/` Git repository to the `main` branch on GitHub.
4. Cloudflare Pages automatically deploys the latest commit from `main` once the GitHub repository is connected to the Pages project.

For a plain static deployment, configure Cloudflare Pages with no build command and use `/` as the output directory because this repository already contains the deployable files at its root.

## Initial GitHub setup

Create an empty GitHub repository named `waste2resource-site` without adding a README, `.gitignore` or licence. Then, from `outputs/`, run:

```powershell
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/waste2resource-site.git
git push -u origin main
```

## Content inventory

`case-studies-import.csv` is retained as the Airtable import/reference file. The public library currently reads the curated records in `library.js`; Airtable is not yet connected to the live build.

The address `hello@waste2resource.com.au` is a placeholder until email routing is configured.
