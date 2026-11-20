<script>
import { categories } from '../../data/projects';

export default {
	props: {
		select: {
			type: String,
			default: 'projects',
		},
		modelValue: {
			type: String,
			default: '',
		},
	},
	emits: ['update:modelValue'],
	data: () => ({ categories }),
};
</script>

<template>
	<select
		:value="modelValue"
		@change="$emit('update:modelValue', $event.target.value)"
		:name="select"
		:id="select"
		aria-label="Filter projects by category"
		class="font-general-medium px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
	>
		<option value class="text-sm sm:text-md">All Projects</option>
		<option
			v-for="option in categories"
			:key="option"
			:value="option"
			class="sm:text-md"
		>
			{{ option }}
		</option>
	</select>
</template>
