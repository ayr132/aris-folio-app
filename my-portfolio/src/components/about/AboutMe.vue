<script>
export default {
	setup() {
		return {
			// TODO: replace this placeholder text with your own bio.
			bios: [
				{
					id: 1,
					bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				},
				{
					id: 2,
					bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
				},
				{
					id: 3,
					bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- Avatar (swap for a photo: <img src="@/assets/images/your-photo.jpg" class="rounded-xl w-96" alt="Aris">) -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<div
				class="aspect-square w-full max-w-[16rem] rounded-xl bg-indigo-50 dark:bg-ternary-dark border border-indigo-100 dark:border-secondary-dark flex items-center justify-center font-general-semibold text-7xl text-indigo-500 dark:text-indigo-300"
				aria-hidden="true"
			>
				A
			</div>
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
