<script>
import FeatherIcon from '../reusable/FeatherIcon.vue';

export default {
	name: 'AppBanner',
	components: { FeatherIcon },
	data: () => ({ theme: localStorage.getItem('theme') || 'light' }),
};
</script>

<template>
	<section
		class="flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10 gap-8"
	>
		<!-- Banner left contents -->
		<div class="w-full md:w-1/2 text-left">
			<span
				class="block font-general-semibold text-sm uppercase tracking-widest text-brand-500 dark:text-brand-300 text-center sm:text-left mb-4"
			>
				Tutor · Designer · Developer
			</span>
			<h1
				class="font-general-semibold text-3xl md:text-4xl xl:text-5xl text-center sm:text-left text-ternary-dark dark:text-primary-light leading-tight"
			>
				Hi, I'm Aris. I
				<em class="text-brand-500 dark:text-brand-300">teach</em>,
				design &amp; build.
			</h1>
			<p
				class="font-general-medium mt-4 text-lg sm:text-xl text-center sm:text-left text-gray-500 dark:text-gray-400"
			>
				I run a home tutoring service, design visuals that communicate
				clearly, and I'm currently building web apps.
			</p>
			<div
				class="flex flex-wrap justify-center sm:justify-start gap-3 mt-10 mb-6 sm:mb-0"
			>
				<router-link
					to="/projects"
					class="font-general-medium flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg bg-brand-500 hover:bg-brand-600 text-white duration-300"
				>
					See my work <FeatherIcon name="arrow-down-circle" :size="20" />
				</router-link>
				<router-link
					to="/contact"
					class="font-general-medium flex items-center px-6 py-3 rounded-lg border border-brand-200 dark:border-ternary-dark bg-brand-50 dark:bg-ternary-dark text-gray-600 dark:text-ternary-light hover:bg-brand-500 hover:text-white duration-300"
				>
					Get in touch
				</router-link>
			</div>
		</div>

		<!-- Banner right illustration -->
		<div class="w-full md:w-1/2 text-right">
			<img
				v-if="theme === 'light'"
				src="@/assets/images/developer.svg"
				alt=""
			/>
			<img v-else src="@/assets/images/developer-dark.svg" alt="" />
		</div>
	</section>
</template>
