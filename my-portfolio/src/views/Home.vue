<script>
import AppBanner from '@/components/shared/AppBanner';
import FeatherIcon from '@/components/reusable/FeatherIcon.vue';

// The four areas of work. External sites open in a new tab; the two
// collections open the Projects page filtered to that category.
const work = [
	{
		tag: 'Graphic Design',
		title: 'Graphic Design Portfolio',
		text: 'A collection of my graphic design projects: posters, branding and social media visuals.',
		icon: 'pen-tool',
		href: 'https://ayr132.github.io/graphic_design_portfolio/',
		link: 'View portfolio',
	},
	{
		tag: 'Tutoring',
		title: 'Sir Aris Home Tutor Service',
		text: 'One-to-one home tutoring that helps students build confidence and get results, with lessons tailored to each learner.',
		icon: 'book-open',
		href: 'https://hometutor-f8172b.gitlab.io/index.html',
		link: 'Visit site',
	},
	{
		tag: 'Web App Development',
		title: 'Web App Projects',
		text: "A collection of web apps I've built, from bill splitting tools to practical project dashboards.",
		icon: 'layout',
		to: { path: '/projects', query: { category: 'Web Application' } },
		link: 'Explore projects',
	},
	{
		tag: 'Game Development',
		title: 'Game Development',
		text: 'Browse game projects and experiments, including my browser-based Snake game.',
		icon: 'play-circle',
		to: { path: '/projects', query: { category: 'Game Development' } },
		link: 'Explore projects',
	},
];

export default {
	name: 'Home',
	components: { AppBanner, FeatherIcon },
	data: () => ({ work }),
};
</script>

<template>
	<div class="container mx-auto">
		<AppBanner class="mb-5 sm:mb-8" />

		<!-- Professional work -->
		<section class="pt-10 sm:pt-14">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-10 text-center text-ternary-dark dark:text-ternary-light"
			>
				Professional Work
			</p>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
				<component
					v-for="item in work"
					:key="item.title"
					:is="item.to ? 'router-link' : 'a'"
					:to="item.to"
					:href="item.href"
					:target="item.href ? '_blank' : undefined"
					:rel="item.href ? 'noopener noreferrer' : undefined"
					class="group flex flex-col text-left rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 p-7 bg-secondary-light dark:bg-ternary-dark duration-300"
				>
					<span
						class="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-indigo-50 dark:bg-secondary-dark text-indigo-500 dark:text-indigo-300"
					>
						<FeatherIcon :name="item.icon" />
					</span>
					<span
						class="font-general-medium text-xs uppercase tracking-wider text-gray-400 mb-2"
						>{{ item.tag }}</span
					>
					<p
						class="font-general-semibold text-2xl text-ternary-dark dark:text-ternary-light mb-3"
					>
						{{ item.title }}
					</p>
					<p
						class="font-general-regular text-ternary-dark dark:text-ternary-light opacity-80 mb-6 flex-1"
					>
						{{ item.text }}
					</p>
					<span
						class="font-general-medium flex items-center gap-2 text-indigo-500 dark:text-indigo-300"
					>
						{{ item.link }}
						<FeatherIcon
							name="arrow-right"
							:size="16"
							class="duration-300 group-hover:translate-x-1"
						/>
					</span>
				</component>
			</div>
		</section>

		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
			>
				All Projects
			</router-link>
		</div>
	</div>
</template>
