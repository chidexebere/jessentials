module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
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
