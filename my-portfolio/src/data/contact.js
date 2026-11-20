// TODO: replace the placeholder email and WhatsApp number with your real details.
// The contact form and "Hire me" form open the visitor's email app addressed to CONTACT_EMAIL.
export const CONTACT_EMAIL = 'you@example.com';

export const contacts = [
	{
		id: 1,
		label: 'Email',
		name: CONTACT_EMAIL,
		icon: 'mail',
		url: `mailto:${CONTACT_EMAIL}`,
	},
	{
		id: 2,
		label: 'WhatsApp',
		name: '+60 00-000 0000',
		icon: 'phone',
		url: 'https://wa.me/60000000000',
	},
	{
		id: 3,
		label: 'GitHub',
		name: 'github.com/ayr132',
		icon: 'github',
		url: 'https://github.com/ayr132',
	},
];

// Opens the visitor's email app with the message filled in.
export function sendMail({ name, email, subject, message }) {
	const subj = encodeURIComponent(subject || `Message from ${name}`);
	const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
	window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subj}&body=${body}`;
}
