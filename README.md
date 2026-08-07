# Handed the Keys

Official website and blog for **Handed the Keys**.

> Stories from the working week.

## Project

Handed the Keys is a personal blog beginning with weekly stories and experiences from substitute teaching. The blog is intended to continue beyond substitute teaching as a record of professional experiences, changing roles, and the stories that come with working life.

The name comes from a recurring part of substitute teaching: arriving for an assignment and being handed the keys to a classroom, or sometimes several classrooms. Over time, "being handed the keys" can also represent being trusted with a new responsibility, opportunity, role, or chapter.

## Goals

- Publish primarily weekly blog posts.
- Allow occasional additional posts when a particular day warrants its own story.
- Make publishing new posts possible without coding.
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
- Decap CMS planned for post publishing
- Giscus planned for comments

## Development

Local development and preview should be completed before publishing changes.

Start the local development server with:

`npm run dev`

Local preview:

`http://localhost:4321/`


## Publishing Requirements

- Routine publishing must not require editing code, using VS Code, or working from the local development environment.
- New posts should eventually be publishable through a browser-based CMS from any computer.
- Publishing a new post must automatically update the homepage, recent stories, and chronological blog archive.
- The newest published post should automatically become the featured story on the homepage.
- Featured images are optional.
- Posts without images must use an intentional text-only layout with no placeholder image or empty image space.
- Posts may contain additional real photos within the article.
- The site should be structured so Google AdSense can be added later without redesigning individual pages or adding advertising placeholders during initial development.

## Post Image Behavior

- Featured images are optional when publishing a post.
- When a featured image is supplied, listings use that real photo.
- When no featured image is supplied, homepage and blog listings automatically use the shared Handed the Keys default post image.
- Individual article pages do not display the default image when no real featured image was supplied.
- The current default post image is temporary and will be replaced with a permanent Handed the Keys branded image after the visual identity is established.

## Source of Truth

This GitHub repository contains the live source code for Handed the Keys.

This README is the development source of truth and should be updated when significant project decisions, milestones, or architecture changes are made.

## Status

**Current phase:** Initial development

- [x] Brand selected: Handed the Keys
- [x] GitHub organization created
- [x] GitHub repository created
- [x] Astro blog template installed
- [x] Local Astro development environment verified
- [ ] Define site structure and initial design
- [ ] Replace Astro sample content
- [ ] Configure GitHub Pages deployment
- [ ] Add no-code publishing
- [ ] Add comments
- [ ] Configure SEO and search services
- [ ] Publish initial content
- [ ] Prepare for advertising