module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [
		// ...
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
	theme: {
		extend: {
			keyframes: {
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				marquee: 'marquee 15s linear infinite',
			},
		},
	},
	plugins: [],
};
