/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['cdn.sanity.io', 'i.imgur.com'],
	},
};

module.exports = nextConfig;
