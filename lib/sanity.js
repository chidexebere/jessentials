import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: 'l04z0d82',
	dataset: 'production',
	apiVersion: '2022-03-15',
	useCdn: true,
});

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
	return builder.image(source);
};
