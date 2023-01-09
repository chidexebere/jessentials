// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// };

// // module.exports = nextConfig;

// module.exports = {
// 	nextConfig,
// 	images: {
// 		domains: ['tailwindui.com', 'images.unsplash.com', 'cdn.sanity.io'],
// 	},
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io'],
	},
};

module.exports = nextConfig;
