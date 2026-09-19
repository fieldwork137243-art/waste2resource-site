# Waste2Resource

Plain static website for the Australian engineering-led Waste2Resource knowledge hub.

## Source of truth

The `outputs/` folder is the source of truth for the public website. Make all content, style, script and asset changes here.

The sibling `work/cloudflare-pages/` folder is a deployment mirror. Do not edit it directly. From the parent project folder, run `sync-cloudflare-pages.ps1` to copy the current public files into that mirror.

## Website structure

- `/` — homepage and platform positioning
- `/technical-library/` — searchable technical case library, map and stable case links
- `/business-case/` — mining-company benefit case, circular-economy logic and source-linked evidence
- `/assessment-framework/` — decision path and assessment lens
- `/research/` — research landscape and evidence ledger
- `/field-notes/` — short technical interpretations of recurring engineering questions
- `/methodology/` — inclusion criteria, maturity scale, record status and correction rules
- `/about/` — Kartik Singh and Waste2Resource
- `/contact/` — collaboration and structured evidence submission
- `/404.html` — Cloudflare Pages-compatible not-found page
- `/styles.css` — shared visual system
- `/site.js` — shared mobile navigation
- `/library.js` — case data, filters, case URLs, citation tools, modal and map logic
- `/contribution.js` — structured email-based case submission workflow
- `/favicon.png` — browser icon
- `/og-image.png` — social-sharing image

## Editing and deployment

1. Edit the website in `outputs/`.
2. From the parent project folder, run `./sync-cloudflare-pages.ps1`.
3. Commit and push the `outputs/` repository to the `main` branch on GitHub.
4. Cloudflare Pages automatically deploys the latest commit.

For this static deployment, use no build command and `/` as the output directory because the repository already contains deployable files at its root.

## Case inventory and submissions

`case-studies-import.csv` is retained as the Airtable import/reference file. The public library currently reads curated records from `library.js`.

Case suggestions are collected through the structured form on `/contact/`. The current implementation prepares an email to `hello@waste2resource.com.au` and stores no credentials in browser code. A future Airtable connection should use a Cloudflare Worker or Airtable Form endpoint so its token remains server-side; new records should enter Airtable as `Pending review`.

## Cloudflare Web Analytics

Use Cloudflare Pages' one-click integration instead of embedding a token in the repository: open the `waste2resource` Pages project, select **Metrics**, and choose **Enable** under Web Analytics. Cloudflare injects its privacy-first beacon on the next deployment.
