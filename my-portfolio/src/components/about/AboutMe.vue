<script>
export default {
	setup() {
		return {
			// TODO: replace this placeholder text with your own bio.
			bios: [
				{
					id: 1,
					bio: 'I am a final year student at Islamic University of Malaysia (IIUM) majoring in Information Technology, specializing in Digital Media Design.',
				},
				{
					id: 2,
					bio: 'I was born in Pahang, Malaysia, and I have a passion for web development and design. I enjoy creating visually appealing and user-friendly websites that provide a seamless experience for users.',
				},
				{
					id: 3,
					bio: 'I am a creative and detail-oriented individual with a strong foundation in both design and development. I strive to create innovative solutions that meet the needs of users and stakeholders.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- Avatar -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/aris-about.jpg"
				alt="Aris Syazwan Zainul Aman"
				width="640"
				height="905"
				class="w-full max-w-[16rem] aspect-[4/5] object-cover object-top rounded-xl shadow-lg ring-1 ring-brand-100 dark:ring-secondary-dark"
			/>
		</div>

		<div class="w-full sm:w-3/4 text-left">
			<p
				class="font-general-semibold text-3xl text-ternary-dark dark:text-primary-light mb-6"
			>
				About Me
			</p>
			<p
				v-for="(bio, i) in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light"
				:class="i === 0 ? 'text-xl' : 'text-lg opacity-80'"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
