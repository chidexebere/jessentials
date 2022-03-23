import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsArray } from '../utils/types';
import { client, urlFor } from '../lib/sanity';

interface Props {
	products: ProductsArray;
}

const Home: NextPage<Props> = ({ products }) => {
	return (
		<div className="">
			<h2 className="font-semibold text-2xl">All products</h2>

			<div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.map((product) => {
					return (
						<div key={product._id} className="group relative">
							<Link href={`/product/${product.slug.current}`} passHref>
								<div>
									<div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
										<Image
											src={urlFor(
												product.defaultProductVariant.images[0]
											).url()}
											alt={product.title}
											className="w-full object-center object-cover bg-red-100"
											width={400}
											height={400}
											layout="responsive"
										/>
									</div>
									<div className="p-4 flex flex-col gap-2">
										<div>
											<h3 className="text-base font-medium text-gray-900">
												<a href={product._rev}>
													<span
														aria-hidden="true"
														className="absolute inset-0"
													/>
													{product.title}
												</a>
											</h3>
										</div>
										<p className="text-base text-gray-700">{`₦ ${product.defaultProductVariant.price}`}</p>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>

			<a
				href="#"
				className="text-lg text-right underline text-gray-900 hover:text-gray-500"
			>
				<p className="mt-16"> see more</p>
			</a>
		</div>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const products = await client.fetch(`*[_type == "product"]`);
	return {
		props: {
			products,
		},
	};
};
