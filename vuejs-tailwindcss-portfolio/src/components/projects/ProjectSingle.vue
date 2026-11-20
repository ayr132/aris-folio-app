<script>
import FeatherIcon from '../reusable/FeatherIcon.vue';

export default {
	components: { FeatherIcon },
	props: ['project'],
};
</script>

<template>
	<component
		:is="project.url ? 'a' : 'div'"
		:href="project.url || undefined"
		:target="project.url ? '_blank' : undefined"
		:rel="project.url ? 'noopener noreferrer' : undefined"
		class="group flex flex-col text-left rounded-xl shadow-lg p-7 mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark duration-300"
		:class="
			project.url
				? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer'
				: 'border-2 border-dashed border-indigo-200 dark:border-secondary-dark'
		"
	>
		<span
			class="flex items-center justify-center w-12 h-12 mb-5 rounded-xl bg-indigo-50 dark:bg-secondary-dark text-indigo-500 dark:text-indigo-300"
		>
			<FeatherIcon :name="project.icon" />
		</span>
		<span
			class="font-general-medium text-xs uppercase tracking-wider text-gray-400 mb-2"
			>{{ project.tag || project.category }}</span
		>
		<p
			class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-3"
		>
			{{ project.title }}
		</p>
		<p
			class="font-general-regular text-ternary-dark dark:text-ternary-light opacity-80 mb-6 flex-1"
		>
			{{ project.description }}
		</p>
		<span
			v-if="project.url"
			class="font-general-medium flex items-center gap-2 text-indigo-500 dark:text-indigo-300"
		>
			{{ project.linkText }}
			<FeatherIcon
				name="arrow-right"
				:size="16"
				class="duration-300 group-hover:translate-x-1"
			/>
		</span>
		<span
			v-else
			class="self-start font-general-medium text-sm px-3 py-1 rounded-full bg-indigo-50 dark:bg-secondary-dark text-indigo-500 dark:text-indigo-300"
		>
			<span class="animate-pulse">●</span> {{ project.status }}
		</span>
	</component>
</template>
