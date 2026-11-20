<script>
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';
import { contacts } from '@/data/contact';

export default {
	components: { ContactForm, ContactDetails },
	data: () => ({ contacts }),
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<ContactForm />
		<ContactDetails :contacts="contacts" />
	</div>
</template>
