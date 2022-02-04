import type { NextPage } from 'next';
import Image from 'next/image';

const products = [
	{
		id: 1,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 2,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	{
		id: 4,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$35',
		color: 'Black',
	},
	// More products...
];

const Home: NextPage = () => {
	return (
		<div className="">
			<h2 className="text-lg uppercase tracking-tight text-gray-900">
				All products
			</h2>

			<div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.map((product) => (
					<div key={product.id} className="group relative">
						<div className="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75  lg:aspect-none">
							<Image
								src={product.imageSrc}
								alt={product.imageAlt}
								className="w-full object-center object-cover"
								width={400}
								height={400}
								layout="responsive"
							/>
						</div>
						<div className="bg-white mt-4 flex justify-between p-4">
							<div>
								<h3 className="text-sm text-gray-700">
									<a href={product.href}>
										<span aria-hidden="true" className="absolute inset-0" />
										{product.name}
									</a>
								</h3>
								<p className="mt-1 text-sm text-gray-500">{product.color}</p>
							</div>
							<p className="text-sm font-medium text-gray-900">
								{product.price}
							</p>
						</div>
					</div>
				))}
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
