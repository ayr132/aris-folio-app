const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./src/**/*.vue',
		'./src/**/*.js',
		'./src/**/*.jsx',
		'./src/**/*.html',
		'./src/**/*.md'
	],

	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				'primary-dark': '#0E1733',
				'secondary-dark': '#121E40',
				'ternary-dark': '#1B2A55',

				// Brand blues, from the ASZA logo: 400, 500 and 600 are the logo's three colours.
				brand: {
					50: '#EEF3FC',
					100: '#DCE6F9',
					200: '#BCCFF3',
					300: '#9AB6EC',
					400: '#6C93E0',
					500: '#446BCC',
					600: '#2B4EBC',
					700: '#233F9A',
					800: '#1D3379',
					900: '#172859',
				},
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
