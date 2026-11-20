<script>
import feather from 'feather-icons';
import ProjectsFilter from './ProjectsFilter.vue';
import ProjectSingle from './ProjectSingle.vue';
import projects, { categories } from '../../data/projects';

export default {
	components: { ProjectSingle, ProjectsFilter },
	data() {
		// A link like /projects?category=Game Development opens with that filter applied.
		const fromRoute = this.$route.query.category;
		return {
			projects,
			projectsHeading: 'Projects Portfolio',
			selectedCategory: categories.includes(fromRoute) ? fromRoute : '',
			searchProject: '',
		};
	},
	computed: {
		filteredProjects() {
			const search = this.searchProject.trim().toLowerCase();
			return this.projects.filter(
				(p) =>
					(!this.selectedCategory ||
						p.category === this.selectedCategory) &&
					(!search || p.title.toLowerCase().includes(search))
			);
		},
	},
	watch: {
		'$route.query.category'(value) {
			this.selectedCategory = categories.includes(value) ? value : '';
		},
		selectedCategory(value) {
			const query = value ? { category: value } : {};
			if ((this.$route.query.category || '') !== value) {
				this.$router.replace({ query });
			}
		},
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<section class="pt-10 sm:pt-14">
		<div class="text-center">
			<p
				class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
			>
				{{ projectsHeading }}
			</p>
		</div>

		<!-- Filter and search projects -->
		<div class="mt-10 sm:mt-10">
			<h3
				class="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"
			>
				Search projects by title or filter by category
			</h3>
			<div
				class="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
			>
				<div class="flex justify-between gap-2">
					<span
						class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl"
					>
						<i
							data-feather="search"
							class="text-ternary-dark dark:text-ternary-light"
						></i>
					</span>
					<input
						v-model="searchProject"
						class="font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
						id="search"
						name="search"
						type="search"
						placeholder="Search Projects"
						aria-label="Search projects by title"
					/>
				</div>
				<ProjectsFilter v-model="selectedCategory" />
			</div>
		</div>

		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"
		>
			<ProjectSingle
				v-for="project in filteredProjects"
				:key="project.id"
				:project="project"
			/>
		</div>
		<p
			v-if="!filteredProjects.length"
			class="font-general-regular text-center text-ternary-dark dark:text-ternary-light mt-10"
		>
			No projects match that search.
		</p>
	</section>
</template>
