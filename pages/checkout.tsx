import type { NextPage } from 'next';
import Image from 'next/image';

const orders = [
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
		price: '$50',
		color: 'Black',
	},
	{
		id: 3,
		name: 'Basic Tee',
		href: '#',
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
		imageAlt: "Front of men's Basic Tee in black.",
		price: '$55',
		color: 'Black',
	},
];

const Checkout: NextPage = () => {
	return (
		<div className="container mx-auto mt-10">
			<div className="flex flex-col lg:flex-row shadow-md my-10">
				<div className="w-full lg:w-3/4 bg-white px-10 py-10">
					<div className="flex justify-between border-b pb-8">
						<h1 className="font-semibold text-2xl">Shopping Cart</h1>
						<h2 className="font-semibold text-2xl">{orders.length} Items</h2>
					</div>
					<div className="flex mt-10 mb-5">
						<h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
							Product Details
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
							Quantity
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
							Price
						</h3>
						<h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
							Total
						</h3>
					</div>
					{orders.map((order) => (
						<div
							key={order.id}
							className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
						>
							<div className="flex w-2/5">
								<div className="w-20">
									<Image
										src={order.imageSrc}
										alt={order.imageAlt}
										className="w-full object-center object-cover"
										width={400}
										height={400}
										layout="responsive"
									/>
								</div>
								<div className="flex flex-col justify-between ml-4 flex-grow">
									<span className="font-bold text-sm">{order.name}</span>
									<span className="text-red-500 text-xs">{order.color}</span>
									<a
										href="#"
										className="font-semibold text-gray-500 hover:text-red-500 text-xs"
									>
										Remove
									</a>
								</div>
							</div>
							<div className="flex justify-center w-1/5">
								<svg
									className="fill-current text-gray-600 w-3"
									viewBox="0 0 448 512"
								>
									<path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
								</svg>

								<input
									className="mx-2 border text-center w-8"
									type="text"
									value="1"
								/>

								<svg
									className="fill-current text-gray-600 w-3"
									viewBox="0 0 448 512"
								>
									<path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
								</svg>
							</div>
							<span className="text-center w-1/5 font-semibold text-sm">
								{order.price}
							</span>
							<span className="text-center w-1/5 font-semibold text-sm">
								{order.price}
							</span>
						</div>
					))}

					<a
						href="#"
						className="flex font-semibold text-indigo-600 text-sm mt-10"
					>
						<svg
							className="fill-current mr-2 text-indigo-600 w-4"
							viewBox="0 0 448 512"
						>
							<path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
						</svg>
						Continue Shopping
					</a>
				</div>

				<div id="summary" className="w-full lg:w-1/4 px-8 py-10">
					<h1 className="font-semibold text-2xl border-b pb-8">
						Order Summary
					</h1>
					<div className="flex justify-between mt-10 mb-5">
						<span className="font-semibold text-sm uppercase">Sub Total</span>
						<span className="font-semibold text-sm">$590</span>
					</div>
					<div className="col-span-6 sm:col-span-3">
						<label
							htmlFor="country"
							className="block text-sm font-medium uppercase"
						>
							Shipping
						</label>
						<select
							id="shipping"
							name="shipping"
							autoComplete="shipping-type"
							className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-200"
						>
							<option>Standard shipping - $10.00</option>
							<option>Fast shipping - $20.00</option>
						</select>
					</div>

					<div className="border-t mt-8">
						<div className="flex font-semibold justify-between py-6 text-sm uppercase">
							<span>Total cost</span>
							<span>$600</span>
						</div>
						<button
							type="button"
							className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500 uppercase"
						>
							<span>Checkout</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
