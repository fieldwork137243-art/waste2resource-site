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

Case suggestions are collected through the public Airtable form linked from `/contact/`. Each submission creates a private record in **Waste2Resource Intake → Submissions**. Nothing is published automatically.

Review each submission in Airtable, check its primary source and remove confidential information before adding an accepted record to `library.js`. The public library remains a deliberately curated static dataset.

This workflow uses Airtable's Free plan features: a public form, Airtable branding and manual review. It does not use paid automations, extensions or API integrations. The initial Team trial reverts to the Free plan unless the workspace is manually upgraded. The current Free plan has a 1,000-record limit per base, so export or archive reviewed submissions before that limit is reached.

## Cloudflare Web Analytics

Use Cloudflare Pages' one-click integration instead of embedding a token in the repository: open the `waste2resource` Pages project, select **Metrics**, and choose **Enable** under Web Analytics. Cloudflare injects its privacy-first beacon on the next deployment.
