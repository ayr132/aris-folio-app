<script>
import FeatherIcon from '../reusable/FeatherIcon.vue';
import {
	designIntro,
	designTools,
	techIntro,
	techSkills,
} from '../../data/skills';

export default {
	components: { FeatherIcon },
	setup() {
		return { designIntro, designTools, techIntro, techSkills };
	},
};
</script>

<template>
	<section class="mt-16 sm:mt-24 text-left" aria-labelledby="skills-title">
		<p
			id="skills-title"
			class="font-general-semibold text-3xl text-ternary-dark dark:text-primary-light mb-8"
		>
			Skills
		</p>

		<div class="grid gap-6 lg:grid-cols-2">
			<!-- Design -->
			<div
				class="rounded-xl bg-secondary-light dark:bg-ternary-dark shadow-lg p-6 sm:p-8"
			>
				<h3
					class="flex items-center gap-2 font-general-semibold text-xl text-ternary-dark dark:text-primary-light mb-2"
				>
					<FeatherIcon name="pen-tool" :size="20" class="text-brand-500 dark:text-brand-300" />
					Design
				</h3>
				<p class="font-general-regular text-ternary-dark dark:text-ternary-light opacity-80 mb-6">
					{{ designIntro }}
				</p>
				<ul class="grid gap-4 sm:grid-cols-2">
					<li
						v-for="tool in designTools"
						:key="tool.id"
						class="flex items-center gap-4 rounded-lg bg-primary-light dark:bg-secondary-dark p-3 hover:-translate-y-0.5 duration-300"
					>
						<svg
							:viewBox="tool.viewBox"
							class="w-10 h-10 shrink-0 text-brand-600 dark:text-brand-300"
							aria-hidden="true"
							v-html="tool.svg"
						></svg>
						<div class="min-w-0">
							<p class="font-general-medium text-ternary-dark dark:text-primary-light leading-tight">
								{{ tool.name }}
							</p>
							<p class="font-general-regular text-sm text-ternary-dark dark:text-ternary-light opacity-70">
								{{ tool.use }}
							</p>
						</div>
					</li>
				</ul>
			</div>

			<!-- Technical -->
			<div
				class="rounded-xl bg-secondary-light dark:bg-ternary-dark shadow-lg p-6 sm:p-8"
			>
				<h3
					class="flex items-center gap-2 font-general-semibold text-xl text-ternary-dark dark:text-primary-light mb-2"
				>
					<FeatherIcon name="code" :size="20" class="text-brand-500 dark:text-brand-300" />
					Technical
				</h3>
				<p class="font-general-regular text-ternary-dark dark:text-ternary-light opacity-80 mb-6">
					{{ techIntro }}
				</p>
				<ul class="flex flex-wrap gap-3">
					<li
						v-for="skill in techSkills"
						:key="skill.id"
						class="flex items-center gap-2 rounded-full bg-brand-50 dark:bg-secondary-dark text-brand-700 dark:text-brand-200 font-general-medium text-sm px-4 py-2"
					>
						<FeatherIcon :name="skill.icon" :size="16" />
						{{ skill.name }}
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>
