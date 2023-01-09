import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { client, urlFor } from '../../lib/sanity';

interface Props {
	product: Product;
}

const ProductPage: NextPage<Props> = ({ product }) => {
	console.log(product);
	const { body } = product;
	const bodyContent: BodyContent[] = body.en;

	if (!product) {
		return <div>Product Not Found</div>;
	}

	return (
		<div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
			<div className="lg:col-span-4">
				<div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
					<Image
						src={urlFor(product.defaultProductVariant.images[0]).url()}
						alt={product.title}
						className="object-center object-cover bg-red-100"
						width={400}
						height={400}
						layout="responsive"
					/>
				</div>
			</div>
			<div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
				<div className="flex flex-col-reverse">
					<div>
						<h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							{product.title}
						</h1>
						<h2 id="information-heading" className="sr-only">
							Product information
						</h2>
						<p className="text-xl text-gray-500 mt-8">{`₦ ${product.defaultProductVariant.price}`}</p>
					</div>
				</div>

				<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
					<button
						type="button"
						className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
					>
						<span>Pay</span>
					</button>
					<button
						type="button"
						className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
					>
						Add To Cart
					</button>
				</div>
				<div className="pt-10 sm:border-t sm:mt-10">
					{bodyContent?.map((content) => (
						<p key={content._key} className="text-gray-500 mt-6">
							{content?.children[0]?.text}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await client.fetch(
		`*[_type == "product" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
	);

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params = {} } = context;
	const { slug } = params;

	const product = await client.fetch(
		`*[_type == "product" && slug.current == $slug][0]`,
		{ slug }
	);

	return {
		props: {
			product,
		},
	};
};
