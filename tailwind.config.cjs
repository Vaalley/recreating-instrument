/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				"barlow-condensed": "Barlow Condensed",
				"ibm-plex-mono": "IBM Plex Mono",
			}
		}
	},
	plugins: []
};