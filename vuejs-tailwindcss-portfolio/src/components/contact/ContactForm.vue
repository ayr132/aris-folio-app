<script>
import Button from '../reusable/Button.vue';
import FormInput from '../reusable/FormInput.vue';
import FormTextarea from '../reusable/FormTextarea.vue';
import { sendMail } from '../../data/contact';

export default {
	components: { Button, FormInput, FormTextarea },
	data: () => ({ name: '', email: '', subject: '', message: '' }),
	methods: {
		submit() {
			sendMail(this.$data);
		},
	},
};
</script>

<template>
	<div class="w-full md:w-1/2">
		<div
			class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
		>
			<p
				class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"
			>
				Contact Form
			</p>
			<form @submit.prevent="submit" class="font-general-regular space-y-7">
				<FormInput label="Full Name" inputIdentifier="name" v-model:val="name" />
				<FormInput
					label="Email"
					inputIdentifier="email"
					inputType="email"
					v-model:val="email"
				/>
				<FormInput
					label="Subject"
					inputIdentifier="subject"
					v-model:val="subject"
					:required="false"
				/>
				<FormTextarea
					label="Message"
					textareaIdentifier="message"
					v-model:val="message"
					required
				/>

				<div>
					<Button
						title="Send Message"
						class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
						type="submit"
					/>
				</div>
			</form>
		</div>
	</div>
</template>
