# Landing Page Rulebook

This rulebook exists to keep all landing page work safe, repeatable, and easy to maintain. Follow it before creating, editing, deploying, or restructuring any landing page in this repository.

## Core Principle

Each landing page must be treated as its own scoped project unless the user explicitly approves a wider change.

Do not overwrite the repository root or replace the deployed root with a single landing page folder. The root is the top-level folder/file Vercel serves from. It may contain the homepage, shared routing, shared deployment structure, and links to existing live landing pages. If the root is overwritten or deployed incorrectly, existing landing page URLs can disappear and return 404 errors.

## First Step: Inspect The Repository

Before creating or editing a landing page:

1. Review the current folder structure.
2. Identify all existing landing page folders.
3. Check whether the page uses standalone HTML/CSS/JS, Vite, React, shared assets, or page-specific assets.
4. Check for deployment files such as `vercel.json`, `package.json`, and build configs.
5. Check for existing uncommitted changes before editing.

Do not assume one landing page represents the whole repository.

## Required Clarification

Before changing files, ask the user whether they want to:

1. Create a new landing page.
2. Edit an existing landing page.

Do not proceed with file edits until the task type and target page are clear.

## Editing An Existing Landing Page

When editing an existing landing page:

1. Only edit the requested landing page.
2. Do not touch other landing page folders.
3. Do not rename or move the landing page folder unless explicitly requested.
4. Do not modify root files unless the user clearly approves it.
5. Do not change shared assets, shared scripts, shared styles, or shared config unless the user approves and the impact is understood.
6. Summarize exactly which files were changed.

If an edit requires changing a shared file, explain why and confirm before proceeding.

## Creating A New Landing Page

When creating a new landing page:

1. Confirm the page name and final URL slug before building.
2. Use a clean page folder for the new landing page.
3. Check whether source files and assets already exist inside the requested new page folder.
4. If source files or assets are missing, ask the user to upload them into the new page folder before building.
5. If the user does not have source files but has a Figma file, ask for full-page screenshots from Figma before building.
6. Use the screenshots to understand the design, layout, spacing, visual style, content hierarchy, and responsive behavior.
7. Keep page-specific assets inside the new page folder whenever possible.

Recommended new page structure:

```text
page-slug/
  index.html
  assets/
  styles.css
  script.js
```

For framework-based pages, follow the existing project pattern already present in the repository.

## URL And Slug Rules

Every new live landing page should have a clear custom URL:

```text
https://lp.tascoutsourcing.com/PAGE-NAME
```

Use lowercase hyphenated slugs for live URLs:

```text
/emiratisation-2026/
/payroll-outsourcing/
/grc/
```

Avoid spaces, uppercase letters, and special characters in deployed URL paths.

Decide the final slug before development begins. Renaming a folder later can change the URL and break ads, emails, QR codes, bookmarks, and campaign links.

## Root File Rules

The root file/folder must not be overwritten.

The root usually controls the homepage or top-level landing page index. It should preserve access to all existing live landing pages.

Root changes are allowed only when:

1. The user explicitly asks for a root update.
2. A new landing page is complete and live, and the root needs to list/link it.
3. The change is reviewed carefully so existing URLs are not broken.

When a new landing page goes live, update the root listing only as an intentional separate step.

Never deploy only one landing page folder in a way that replaces the full site output and causes other landing pages to return 404.

## Shared Assets And Config

Before editing any file, determine whether it is page-specific or shared.

Treat these as high-risk shared files unless proven otherwise:

1. Root `index.html`
2. Root `package.json`
3. Root `vercel.json`
4. Root-level assets
5. Global CSS files
6. Shared JavaScript files
7. Shared tracking scripts
8. Shared form handlers

Only change shared files when required and approved.

## Redirect Rules

If an existing landing page URL changes, add a redirect from the old URL to the new URL.

Do not remove or rename an existing live page path without considering redirects.

Redirects are especially important for:

1. Paid ads
2. Email campaigns
3. WhatsApp campaigns
4. QR codes
5. Sales decks
6. Existing backlinks

## Forms, Tracking, And Integrations

Before launch, verify all business-critical behavior:

1. Lead forms submit correctly.
2. Required fields and validation work.
3. Thank-you states or redirects work.
4. WhatsApp links open correctly.
5. Phone links and email links are correct.
6. Google Tag Manager, analytics, pixels, and conversion tracking are present if required.
7. CRM or webhook integrations still work if the page uses them.

A page is not launch-ready if it only looks correct but cannot capture or track leads.

## Local QA Before Deployment

Before pushing a new or edited page live:

1. Preview the page locally.
2. Check desktop layout.
3. Check mobile layout.
4. Check tablet or narrow-width layout when practical.
5. Check for broken images.
6. Check for broken links.
7. Check forms and CTAs.
8. Check browser console errors.
9. Check that text does not overlap or overflow.
10. Check that videos and media load correctly.

## Deployment Process

Landing pages should be deployed through Git and Vercel.

Recommended flow:

1. Complete the scoped landing page work.
2. Run local QA.
3. Review changed files.
4. Commit the changes to Git.
5. Push to the correct Git branch.
6. Let Vercel deploy from Git.
7. Verify the final Vercel/live URL.
8. Confirm existing landing page URLs still work.
9. Update the root listing if the new landing page is now live and should be discoverable from the root.

Do not manually replace the Vercel root with a single landing page folder.

## Git Safety

Before editing:

1. Check current Git status.
2. Identify user changes already present.
3. Do not overwrite unrelated user work.
4. Do not revert files unless the user explicitly asks.
5. Keep changes scoped to the requested page.

After editing:

1. Summarize changed files.
2. Explain any root or shared-file changes.
3. Mention any tests or checks performed.
4. Mention anything that still needs verification.

## Final Checklist For A New Landing Page

Before considering a new landing page complete:

1. Page has a confirmed slug.
2. Page lives in its own folder.
3. Assets are present and page-specific where possible.
4. Design has been built from source files, assets, or full-page Figma screenshots.
5. Desktop layout is checked.
6. Mobile layout is checked.
7. Forms and CTAs are checked.
8. Tracking is checked if required.
9. No unrelated landing pages were changed.
10. Root was not overwritten.
11. Root listing was updated only if appropriate.
12. Git changes are reviewed.
13. Page is pushed to Git.
14. Vercel deploy is verified.
15. Final URL works:

```text
https://lp.tascoutsourcing.com/PAGE-NAME
```

16. Existing landing page URLs still work.

## Final Checklist For Editing An Existing Landing Page

Before considering an edit complete:

1. Correct landing page folder was identified.
2. Only the requested page was edited.
3. No unrelated landing pages were touched.
4. No root files were changed unless explicitly approved.
5. No shared files were changed unless explicitly approved.
6. Desktop layout is checked.
7. Mobile layout is checked.
8. Forms and CTAs are checked if affected.
9. Tracking is checked if affected.
10. Git changes are reviewed.
11. Vercel deployment is verified if pushed live.
12. Existing landing page URLs still work.

