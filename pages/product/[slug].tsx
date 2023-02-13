import type { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import Product from '../../components/Product';
import { client, urlFor } from '../../lib/sanity';
import { useStateContext } from '../../state/hooks';
import { convertToDollar } from '../../utils/helper';

interface Props {
	product: Product;
	products: Product[];
}

const ProductPage = ({ product, products }: Props) => {
	const { body, title, defaultProductVariant } = product;
	const { decreaseQty, increaseQty, setQty, selectedQty, addToCart } =
		useStateContext();

	const [index, setIndex] = useState(0);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target as HTMLInputElement;
		setQty(Number(value));
	};

	const quantity = selectedQty === 0 ? '' : selectedQty;

	if (!product) {
		return <div>Product Not Found</div>;
	}

	return (
		<div className="flex flex-col">
			<div className="lg:grid lg:grid-cols-8 lg:gap-x-8">
				<div className="lg:col-span-4 flex flex-col">
					<div className="mx-auto sm:h-[26rem] flex items-center bg-neutral-100">
						<Image
							src={urlFor(defaultProductVariant.images[index]).url()}
							alt={title}
							className="object-center object-cover bg-neutral-100 rounded-lg overflow-hidden shadow-lg shadow-indigo-500/50 hover:shadow-red-500/50"
							width={400}
							height={400}
						/>
					</div>
					<div className="mt-4 mx-auto flex gap-x-2">
						{defaultProductVariant.images?.map((item, i) => (
							<Image
								key={i}
								src={urlFor(item).url()}
								alt={title}
								className={
									i === index
										? 'rounded-md cursor-pointer shadow-md hover:shadow-red-500'
										: 'rounded-md cursor-pointer'
								}
								width={70}
								height={70}
								onMouseEnter={() => setIndex(i)}
							/>
						))}
					</div>
				</div>
				<div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
					<div className="flex flex-col">
						<h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 ">
							{title}
						</h1>
						<h2 id="information-heading" className="sr-only">
							Product information
						</h2>
						<p className="text-2xl text-gray-800 my-2">
							{convertToDollar(defaultProductVariant.price)}
							<span className="ml-1 text-lg text-gray-500">USD</span>
						</p>
					</div>

					<div className="mt-2 lg:mt-4 text-lg lg:text-xl w-32">
						<label htmlFor="quanity-input-number" className="text-gray-700">
							Quantity
						</label>
						<div className="mt-1 flex h-10 rounded-md border bg-transparent">
							<button
								data-action="decrement"
								className="text-gray-500 hover:text-red-500 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-l"
								onClick={decreaseQty}
							>
								<HiMinus className="m-auto" />
							</button>
							<input
								type="number"
								className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-gray-700  outline-none"
								name="quatity-input-number"
								value={quantity}
								onChange={handleInputChange}
							/>
							<button
								data-action="increment"
								className="text-gray-500 hover:text-green-700 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-r"
								onClick={increaseQty}
							>
								<HiPlus className="m-auto" />
							</button>
						</div>
					</div>

					<div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
						<button
							type="button"
							className="w-full bg-gray-50 hover:bg-gray-400 border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
							onClick={() => addToCart(product, selectedQty)}
						>
							Add To Cart
						</button>

						<Link href={'/use-cart'}>
							<button
								type="button"
								className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
							>
								Checkout
							</button>
						</Link>
					</div>
					<div className="pt-10 sm:border-t sm:mt-10">
						{body.en.map((content) => (
							<p key={content._key} className="text-gray-500 mt-6">
								{content.children[0].text}
							</p>
						))}
					</div>
				</div>
			</div>
			<section className="mt-16">
				<h2 className="mb-4 text-2xl sm:text-3xl font-medium tracking-tight">
					Other products
				</h2>
				<div className="relative w-full h-[22rem] overflow-x-hidden">
					<div className="flex justify-start gap-8 absolute whitespace-nowrap will-change-transform animate-marquee hover:pause">
						{products.map((item) => (
							<div key={item._id} className="w-60">
								<Product product={item} />
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default ProductPage;

export const getStaticPaths: GetStaticPaths = async () => {
	const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

	const products = await client.fetch(query);

	const paths = products.map((product: Product) => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({
	params: { slug } = {},
}) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]{
		_id,
		title,
		body,
		defaultProductVariant,
	}`;
	const productsQuery = `*[_type == "product"]{
		_id,
		title,
		slug,
		defaultProductVariant,
	}`;

	const product = await client.fetch(query);
	const products = await client.fetch(productsQuery);

	return {
		props: { product, products },
	};
};
