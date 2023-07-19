/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'black',
			},
			fontFamily: {
				nespresso: ['NespressoLucas', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
