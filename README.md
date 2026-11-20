# Aris | Portfolio

My personal portfolio: home tutoring, graphic design, web apps and games, all in one place.

Built with **Vue 3**, **Vue Router** and **Tailwind CSS**, on top of the
[Vue.js & Tailwind CSS Portfolio](https://github.com/realstoman/vuejs-tailwindcss-portfolio) template.

## Pages

| Page | What's there |
|---|---|
| **Home** | Intro, plus the four areas of work: graphic design, tutoring, web apps and games |
| **Projects** | Every project, with search and a category filter (`/projects?category=Web Application` opens it pre-filtered) |
| **About** | A short bio |
| **Contact** | Contact details and a form that opens the visitor's email app |

## Projects featured

- [Graphic Design Portfolio](https://ayr132.github.io/graphic_design_portfolio/)
- [Sir Aris Home Tutor Service](https://hometutor-f8172b.gitlab.io/index.html)
- [SplitBill](https://splitbill-three-eta.vercel.app/): split bills with friends
- OKtakRoute: accessibility-first campus route planner (not deployed yet)
- [KerjaMudah](https://wad-kerjamudah-production-qa81eb.laravel.cloud/dashboard)
- [Snake Game](https://snake-game-0acb2d.gitlab.io/)

## Running it locally

Needs [Node.js](https://nodejs.org/) 18 or newer.

```bash
cd vuejs-tailwindcss-portfolio
npm install
npm run serve      # dev server at http://localhost:8080
npm run build      # production build in vuejs-tailwindcss-portfolio/dist
```

From the repository root, `npm run dev` and `npm run build` do the same.

## Editing content

Most content lives in plain data files, so you rarely need to touch the components:

| To change | Edit |
|---|---|
| Projects (title, description, link, category, icon) | `vuejs-tailwindcss-portfolio/src/data/projects.js` |
| Contact email, WhatsApp, and where the forms send to | `vuejs-tailwindcss-portfolio/src/data/contact.js` |
| Footer social links | `vuejs-tailwindcss-portfolio/src/data/socialLinks.js` |
| Bio | `vuejs-tailwindcss-portfolio/src/components/about/AboutMe.vue` |
| Home intro | `vuejs-tailwindcss-portfolio/src/components/shared/AppBanner.vue` |

Icons are [Feather icons](https://feathericons.com); use the icon's name, for example `book-open`.

## Credits

Based on [vuejs-tailwindcss-portfolio](https://github.com/realstoman/vuejs-tailwindcss-portfolio)
by Nangialai Stoman, released under the MIT License (see
[`vuejs-tailwindcss-portfolio/LICENSE`](vuejs-tailwindcss-portfolio/LICENSE)).
