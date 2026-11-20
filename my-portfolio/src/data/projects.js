// Every project shown on the site. `url: null` means it isn't deployed yet.
// `icon` is a Feather icon name (https://feathericons.com).

export const categories = [
	'Graphic Design',
	'Tutoring',
	'Web Application',
	'Game Development',
];

const projects = [
	{
		id: 1,
		title: 'Graphic Design Portfolio',
		category: 'Graphic Design',
		icon: 'pen-tool',
		description:
			'A collection of my graphic design projects: posters, branding and social media visuals.',
		url: 'https://ayr132.github.io/graphic_design_portfolio/',
		linkText: 'View portfolio',
	},
	{
		id: 2,
		title: 'Sir Aris Home Tutor Service',
		category: 'Tutoring',
		icon: 'book-open',
		description:
			'One-to-one home tutoring that helps students build confidence and get results, with lessons tailored to each learner.',
		url: 'https://hometutor-f8172b.gitlab.io/index.html',
		linkText: 'Visit site',
	},
	{
		id: 3,
		title: 'SplitBill',
		category: 'Web Application',
		icon: 'divide-circle',
		description:
			'A web app for splitting bills with friends, so everyone knows exactly what they owe.',
		url: 'https://splitbill-three-eta.vercel.app/',
		linkText: 'Open app',
	},
	{
		id: 4,
		title: 'OKtakRoute',
		category: 'Web Application',
		tag: 'Web App · Hackathon',
		icon: 'map',
		description:
			'An accessibility-first campus route planner with step-free routing, community path reports, and automatic rerouting around blocked paths. Built with Vue, Leaflet and OpenStreetMap.',
		url: null,
		status: 'Not deployed yet',
	},
	{
		id: 5,
		title: 'KerjaMudah',
		category: 'Web Application',
		icon: 'briefcase',
		description: 'Open the KerjaMudah project dashboard.',
		url: 'https://wad-kerjamudah-production-qa81eb.laravel.cloud/dashboard',
		linkText: 'View dashboard',
	},
	{
		id: 6,
		title: 'Snake Game',
		category: 'Game Development',
		tag: 'Browser Game',
		icon: 'grid',
		description:
			'A classic Snake game rebuilt for the browser. Play, eat, and grow your way to a high score.',
		url: 'https://snake-game-0acb2d.gitlab.io/',
		linkText: 'Play game',
	},
];

export default projects;
