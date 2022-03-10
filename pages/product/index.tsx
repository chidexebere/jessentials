import type { NextPage } from 'next';
import Image from 'next/image';

const ProductPage: NextPage = () => {
	return (
		<div className="lg:grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-16">
			<div className="lg:col-span-4">
				<div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
					<Image
						src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
						alt="Preview of the Annuals UI Kit"
						className="object-center object-cover"
						width={400}
						height={400}
						layout="responsive"
					/>
				</div>
			</div>
			<div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
				<div className="flex flex-col-reverse">
					<div>
						<h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
							Annuals
						</h1>
						<h2 id="information-heading" className="sr-only">
							Product information
						</h2>
						<p className="text-sm text-gray-500 mt-2">UI Kit ·</p>
					</div>
				</div>
				<p className="text-gray-500 mt-6">
					Never miss a date again with our timeless calendar design UI Kit. Duis
					commodo purus ligula, a tristique ipsum finibus ut. Nulla gravida
					ultrices dui quis varius.
				</p>
				<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
					<button
						type="button"
						className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
					>
						<span>Pay $39</span>
					</button>
					<button
						type="button"
						className="w-full bg-white border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
					>
						Preview
					</button>
				</div>
				<div className="pt-10 sm:border-t sm:mt-10">
					<h3 className="text-sm font-medium text-gray-900">License</h3>
					<p className="mt-4 text-sm text-gray-500">
						For personal and professional use. You cannot resell or redistribute
						these icons in their original or modified state.{' '}
						<a
							href="#"
							className="font-medium text-gray-900 hover:text-gray-700"
						>
							Read full license
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;