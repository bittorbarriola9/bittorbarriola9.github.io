# 👨🏽‍💻 bittorbarriola9.github.io

Personal website and blog built with Astro 6, Tailwind CSS 4, Preact islands, and deployed to GitHub Pages.

This repository powers my personal space on the web: a place to present who I am, share blog posts, document ideas, and keep evolving a site that feels more like me than a generic starter.

## 🌍 Live Site

- Website: [bittorbarriola9.github.io](https://bittorbarriola9.github.io)
- RSS feed: [bittorbarriola9.github.io/rss.xml](https://bittorbarriola9.github.io/rss.xml)
- Sitemap: [bittorbarriola9.github.io/sitemap-index.xml](https://bittorbarriola9.github.io/sitemap-index.xml)

## ✨ Project Overview

This project is a customized personal site for Bittor Barriola Artieda. It combines:

- A landing page with personal branding, social links, and recent posts
- A blog powered by Astro Content Collections
- Dedicated About and Contact pages
- Tag-based post navigation
- Light and dark theme support
- Static generation for fast deployment and low maintenance

The current codebase already goes well beyond a plain template setup, especially in the content structure, About page customization, personal assets, and site configuration.

## 🛠️ Tech Stack

- Astro 6
- TypeScript
- Tailwind CSS 4 via Vite
- Preact via @astrojs/preact
- Astro Content Collections
- Swup for page transitions
- @astrojs/rss for RSS generation
- @astrojs/sitemap for sitemap generation
- Sharp for image processing
- Prettier with prettier-plugin-tailwindcss
- GitHub Actions for deployment to GitHub Pages

## ✅ Current Features

- Responsive personal website and blog
- Home page driven by centralized site configuration
- Reusable Astro and Preact components
- Blog post listing with pagination
- Dynamic tag pages
- RSS feed generation
- Sitemap generation
- View transitions with Swup
- Social links and personal hero section
- Asset-driven About page with skills and journey sections
- Markdown-based blog content with typed frontmatter schema

## 🔭 Planned Evolution

This repository is already usable in production, but there is still clear room to grow. Some likely next steps are:

- Replace remaining placeholder content in contact and about copy where needed
- Expand the blog with real posts and a consistent content cadence
- Add MDX support for richer article layouts
- Improve SEO metadata, Open Graph cards, and canonical URLs
- Add a projects or portfolio section
- Connect the subscribe UI to a real newsletter provider
- Add analytics and performance monitoring
- Introduce draft filtering and stronger editorial workflows

## 🙌 Origin and Attribution

This site is based on the Space Ahead Astro template created by Siddhesh Thadeshwar.

- Original project: [github.com/djsiddz/space-ahead](https://github.com/djsiddz/space-ahead)
- Original demo: [djsiddz.github.io/space-ahead](https://djsiddz.github.io/space-ahead)
- Original author: Siddhesh Thadeshwar
- Author GitHub: [github.com/djsiddz](https://github.com/djsiddz)
- Author personal blog: [supersiddy.wordpress.com](https://supersiddy.wordpress.com/)

The original template provided the initial structure and theme foundation. This repository adapts that base into a personal site tailored to my own content, identity, assets, and navigation.

## 🚦Getting Started

### 📦 Requirements

- Node.js 20+ recommended
- pnpm recommended

This repository includes a pnpm lockfile and the deployment workflow is configured around pnpm.

### ⬇️ Install dependencies 

```bash
pnpm install
```

### ▶️ Start the local development server

```bash
pnpm dev
```

By default, Astro will start a local server and print the preview URL in the terminal.

### 🏗️ Build for production

```bash
pnpm build
```

### 👀 Preview the production build locally

```bash
pnpm preview
```

### 🧪 Available scripts

```bash
pnpm dev
pnpm build
pnpm preview
pnpm start
pnpm astro
```

Notes:

- pnpm start runs a production build and then starts Astro preview
- pnpm astro gives direct access to Astro CLI commands

## 🎨 How to Customize This Site

If you want to adapt this repository further, these are the main files and folders to touch first.

### ⚙️ Core configuration

- astro.config.mjs: Controls the public site URL, Astro integrations, image behavior, Swup integration, and Vite plugins.
- src/site.config.ts: Main content and navigation configuration for title, description, hero content, links, contact details, footer links, and blog settings.
- src/content.config.ts: Defines the blog content collection schema and validates frontmatter.

### 🧭 Main pages

- src/pages/index.astro: Homepage layout, hero rendering, and recent-post listing.
- src/pages/about.astro: Custom About page with intro text, skills, and personal journey content.
- src/pages/contact.astro: Contact page that renders content from src/site.config.ts.
- src/pages/blog/[...page].astro: Paginated blog listing.
- src/pages/blog/[id].astro: Individual post page.
- src/pages/tags/index.astro: Tags overview page.
- src/pages/tags/[id]/[...page].astro: Paginated posts per tag.

### 📝 Content and media

- src/content/blogs/: Markdown posts live here.
- src/assets/images/blogs/: Blog images.
- src/assets/images/myjourney/: Journey timeline images used in the About page.
- src/assets/images/skills/: Skill icons for the About page.
- public/: Static files such as logos, icons, social images, and feed-related assets.

### 🧩 Shared UI

- src/layouts/MainLayout.astro: Main layout wrapper used across the site.
- src/components/: Shared Astro and Preact components such as navigation, footer, previews, tabs, buttons, and theme switcher.
- src/styles/: Global and page-specific styles.

## ✍️ Content Authoring

Blog posts are stored in src/content/blogs/ as Markdown files.

The current content schema supports:

- title
- description
- pubDate
- author
- tags
- draft
- image

That means each post can carry typed metadata and be safely consumed by Astro Content Collections.

If you create new posts, keep frontmatter consistent with the schema in src/content.config.ts.

## 🚀 Deployment

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### 🤖 Deployment workflow

The workflow lives in:

- .github/workflows/deploy.yml

On every push to main, the workflow:

1. Checks out the repository
2. Installs dependencies
3. Builds the Astro site using Node.js 22
4. Deploys the generated output to GitHub Pages

### 📌 Important deployment settings

- Site URL is configured in astro.config.mjs as [bittorbarriola9.github.io](https://bittorbarriola9.github.io)
- Base path is currently set to /
- Package manager in CI is pnpm

If the repository name, custom domain, or hosting strategy changes, update astro.config.mjs first.

## 🗂️ Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── public/                     # Static public assets
│   ├── social-icons/           # Social icon images
│   └── pretty-feed-v3.xsl      # RSS/feed styling asset
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── blogs/          # Blog post images
│   │       ├── myjourney/      # About page timeline/company/school assets
│   │       └── skills/         # Skill and tooling icons
│   ├── components/             # Reusable Astro and Preact UI components
│   ├── content/
│   │   └── blogs/              # Markdown blog posts
│   ├── icons/                  # Small Astro icon components
│   ├── layouts/                # Shared layout components
│   ├── pages/                  # Route-based Astro pages
│   │   ├── blog/               # Blog index and post pages
│   │   └── tags/               # Tag pages and pagination
│   ├── styles/                 # Global and page-level CSS
│   ├── utils/                  # Helper utilities
│   ├── content.config.ts       # Astro Content Collections schema
│   ├── env.d.ts                # Astro environment typings
│   └── site.config.ts          # Site-wide content and navigation config
├── astro.config.mjs            # Astro app configuration
├── package.json                # Scripts and dependencies
├── pnpm-lock.yaml              # Locked dependency versions
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

## 🔧 Notes for Maintenance

- The site is mostly configuration-driven, so many visible changes can be made without touching layout logic.
- The About page is one of the most customized parts of the repo and is worth treating as product content, not just a static page.
- The draft field exists in the blog schema, but draft filtering is not yet fully enforced in route generation logic.
- The Contact page currently renders values directly from src/site.config.ts, so placeholder contact data should be updated there.
- If you add new sections or routes, keep navigation links in src/site.config.ts in sync.

## 💡 Why This Repo Exists

This repository is not just a starter deployed as-is. It is the base for a personal website that can evolve over time with:

- new writing
- experiments
- career updates
- project showcases
- tech notes
- personal branding updates

The goal is to keep a lightweight, maintainable, static-first site that is easy to update and pleasant to extend.

## 📄 License 

This repository is distributed under the GNU GPL v3 license.

See the LICENSE file for the full text.

Because this project is based on Space Ahead, keeping attribution to the original author and template is the right thing to do both technically and editorially.