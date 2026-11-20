<script>
import FeatherIcon from '../reusable/FeatherIcon.vue';

export default {
	components: { FeatherIcon },
	props: ['contacts'],
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div class="text-left max-w-xl px-6">
			<h2
				class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-4"
			>
				Contact details
			</h2>
			<p
				class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light opacity-80 mb-8"
			>
				Need a tutor, a designer, or help with a web project? Send me a
				message and I'll get back to you.
			</p>
			<ul class="font-general-regular grid gap-4">
				<li v-for="contact in contacts" :key="contact.id">
					<a
						:href="contact.url"
						:target="contact.url.startsWith('http') ? '_blank' : undefined"
						rel="noopener noreferrer"
						class="flex items-center gap-4 px-5 py-4 rounded-xl border border-gray-200 dark:border-secondary-dark hover:border-brand-400 dark:hover:border-brand-400 duration-300"
					>
						<FeatherIcon
							:name="contact.icon"
							:size="20"
							class="text-brand-500 dark:text-brand-300"
						/>
						<span>
							<small class="block text-sm text-gray-500 dark:text-gray-400">{{
								contact.label
							}}</small>
							<span class="text-lg text-ternary-dark dark:text-ternary-light">{{
								contact.name
							}}</span>
						</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
