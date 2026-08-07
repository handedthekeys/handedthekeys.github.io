# Handed the Keys

Official website and blog for **Handed the Keys**.

> Stories from the working week.

## Project

Handed the Keys is a personal blog beginning with weekly posts and experiences from substitute teaching. The blog is intended to continue beyond substitute teaching as a record of professional experiences, changing roles, and the stories that come with working life.

The name comes from a recurring part of substitute teaching: arriving for an assignment and being handed the keys to a classroom, or sometimes several classrooms. Over time, "being handed the keys" can also represent being trusted with a new responsibility, opportunity, role, or chapter.

## Goals

- Publish primarily weekly blog posts.
- Allow occasional additional posts when a particular day warrants its own post.
- Make publishing and editing posts possible without coding.
- Allow reader comments on individual posts.
- Remain free to host initially.
- Support strong accessibility, performance, and SEO.
- Support Google Search Console and analytics.
- Be ready for Google AdSense or another appropriate advertising platform.
- Keep the author's private life separate unless intentionally shared.
- Allow the blog to evolve beyond substitute teaching without requiring a new brand.

## Technology

- Astro
- GitHub
- GitHub Pages
- Visual Studio Code
- Decap CMS for planned browser-based publishing
- Giscus planned for comments

## Development

Local development and preview should be completed before publishing changes.

Start the local development server with:

`npm run dev`

Local preview:

`http://localhost:4321/`

Decap CMS local preview:

`http://localhost:4321/admin/index.html`

## Publishing Requirements

- Routine publishing must not require editing code, using VS Code, or working from the local development environment.
- New and existing posts should eventually be publishable and editable through a browser-based CMS from any computer.
- Publishing a new post must automatically update the homepage, Recent Posts, and chronological Blog archive.
- The newest published post should automatically become the Latest Post on the homepage.
- Featured images are optional.
- Posts without featured images use the shared Handed the Keys default image on homepage and Blog listings, while individual article pages remain image-free at the top.
- Posts may contain additional real photos within the article.
- Post photos may be portrait, landscape, or square and should retain their natural aspect ratio rather than being forcibly cropped.
- The site should be structured so Google AdSense can be added later without redesigning individual pages or adding advertising placeholders during initial development.

## Post Image Behavior

- Featured images are optional when publishing a post.
- When a featured image is supplied, homepage and Blog listings use that real photo.
- When no featured image is supplied, homepage and Blog listings automatically use the shared Handed the Keys default post image.
- Individual article pages do not display the default image when no real featured image was supplied.
- Featured photographs retain their natural aspect ratio.
- The permanent Handed the Keys branded default post image is centralized as `DEFAULT_POST_IMAGE` in `src/consts.ts`.

## Site Structure

Main navigation:

- Home
- Blog
- About

Homepage:

- Handed the Keys introduction and tagline
- Automatic Latest Post
- Automatic Recent Posts
- Short About Handed the Keys section

Blog:

- Complete chronological archive sorted newest-first

Individual posts:

- Title
- Publication date
- Description
- Optional featured photo
- Article body
- Additional real photos supported/planned through the publishing editor
- Comments planned

Footer:

- Copyright
- Privacy Policy
- Social links omitted until real Handed the Keys accounts are intentionally added

## Branding

- Brand: Handed the Keys
- Tagline: “Stories from the working week.”
- Visual direction: clean, photographic, personal, editorial, and career-neutral.
- Real photographs are preferred when available.
- Stock imagery should not be used merely to fill space.
- Headings use Georgia / Times New Roman-style serif typography.
- Body text uses Atkinson.
- Current palette uses warm cream, muted green, and charcoal.
- Permanent HTK favicon assets and branded default post image have replaced the Astro placeholders.

## Browser Publishing

Decap CMS admin files are configured under:

`public/admin`

The local Decap login page loads successfully.

Remaining publishing work includes:

- Configure GitHub authentication.
- Connect Decap to the live repository.
- Verify creating a post from the browser.
- Verify editing an existing post from the browser.
- Verify image uploads.
- Verify inserting additional images within article content.
- Verify a browser-published post automatically deploys and updates Home and Blog.

## Source of Truth

This GitHub repository contains the live source code for Handed the Keys.

This README is the development source of truth and should be updated when significant project decisions, milestones, or architecture changes are made.

## Status

**Current phase:** Initial development / launch preparation

- [x] Brand selected: Handed the Keys
- [x] GitHub organization created
- [x] GitHub repository created
- [x] Astro blog template installed
- [x] Local Astro development environment verified
- [x] Define site structure and initial design
- [x] Dynamic homepage and chronological Blog archive
- [x] Add first real blog post locally
- [x] Support optional featured images
- [x] Support portrait, landscape, and square image proportions
- [x] Add permanent branded fallback post image
- [x] Replace Astro favicon branding
- [x] Add About page
- [x] Add Privacy Policy
- [x] Add initial Decap CMS configuration
- [x] Complete remaining Astro sample-content cleanup audit
- [ ] Configure GitHub Pages deployment
- [ ] Complete no-code browser publishing
- [ ] Add comments
- [ ] Configure SEO and search services
- [ ] Publish initial live content
- [ ] Prepare for advertising