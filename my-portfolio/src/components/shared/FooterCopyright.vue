<script>
export default {
	data: () => ({ copyrightDate: new Date().getFullYear() }),
};
</script>

<template>
	<div class="flex justify-center items-center text-center">
		<div
			class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light"
		>
			&copy; {{ copyrightDate }} Aris. All rights reserved.
			<span class="block text-sm opacity-70 mt-1">
				Built on the
				<a
					href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:underline hover:text-brand-600 dark:hover:text-brand-300 duration-500"
					>Vue.js &amp; Tailwind CSS Portfolio</a
				>
				template.
			</span>
		</div>
	</div>
</template>
