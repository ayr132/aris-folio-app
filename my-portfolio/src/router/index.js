import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: { title: 'Aris | Portfolio' },
	},
	{
		path: '/about',
		name: 'About',
		// Lazy-loaded: built as a separate chunk, fetched when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
		meta: { title: 'Aris | About' },
	},
	{
		path: '/projects',
		name: 'Projects',
		component: () =>
			import(/* webpackChunkName: "projects" */ '../views/Projects.vue'),
		meta: { title: 'Aris | Projects' },
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () =>
			import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
		meta: { title: 'Aris | Contact' },
	},
	// The old standalone pages now open the filtered Projects page.
	{ path: '/web-apps', redirect: { path: '/projects', query: { category: 'Web Application' } } },
	{ path: '/game-dev', redirect: { path: '/projects', query: { category: 'Game Development' } } },
	{ path: '/:pathMatch(.*)*', redirect: '/' },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from) {
		// Changing only the filter (?category=) keeps the scroll position.
		if (to.path === from.path) return false;
		return { top: 0 };
	},
});

export default router;

/**
 * Below code will display the component/active page title
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
