import sanityClient from '@sanity/client';
export const client = sanityClient({
	projectId: 'l04z0d82',
	dataset: 'production',
	useCdn: true,
});
