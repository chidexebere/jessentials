import React, { useRef } from 'react';
import Link from 'next/link';
import {
	HiMinus,
	HiPlus,
	HiArrowLeft,
	HiX,
	HiOutlineShoppingBag,
} from 'react-icons/hi';
import toast from 'react-hot-toast';

import { useStateContext } from '../state/hooks';
import { urlFor } from '../lib/sanity';
import getStripe from '../lib/getStripe';
import Image from 'next/image';

const Cart = () => {
	const cartRef = useRef<HTMLDivElement | any>();

	const {
		cartItems,
		totalPrice,
		totalQuantity,
		removeFromCart,
		modifyCartItems,
		toggleShowCart,
	} = useStateContext();

	const handleCheckout = async () => {
		const stripe = await getStripe();

		const response = await fetch('/api/stripe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cartItems),
		});

		if (response.status === 500) return;

		const data = await response.json();

		toast.loading('Redirecting...');

		stripe!.redirectToCheckout({ sessionId: data.id });
	};

	console.log(cartItems);

	return (
		<div
			className="w-screen bg-black/50 fixed top-0 right-0 z-50 transition duration-1000 ease-in-out"
			ref={cartRef}
		>
			<div className="h-screen w-4/5 md:w-3/5 xl:w-2/5 bg-white float-right py-4 px-2 md:px-5 lg:px-10 relative">
				<div className="flex items-center text-lg font-medium gap-0.5">
					<button
						type="button"
						className="rounded-full text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						onClick={toggleShowCart}
					>
						<HiArrowLeft size={25} />
					</button>
					<span className="mx-2.5">Your Cart</span>
					<span className="text-red-500">({totalQuantity} items)</span>
				</div>

				{cartItems.length < 1 && (
					<div className="m-10 text-center">
						<HiOutlineShoppingBag className="inline" size={150} />
						<h3 className="text-xl font-semibold">
							Your shopping bag is empty
						</h3>
						<Link href="/">
							<button
								type="button"
								onClick={toggleShowCart}
								className="mt-10 w-full bg-gray-50 hover:bg-red-400 border rounded-md py-3 px-8 flex items-center justify-center text-base uppercase font-medium text-red-500 hover:text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-50"
							>
								Continue Shopping
							</button>
						</Link>
					</div>
				)}

				<div className="mt-4 overflow-auto px-2.5 py-5">
					{cartItems.length >= 1 &&
						cartItems.map((item) => (
							<div
								className="mb-10 flex items-start gap-x-4 sm:gap-x-10"
								key={item.productItem._id}
							>
								<Image
									src={urlFor(
										item.productItem.defaultProductVariant.images[0]
									).url()}
									alt={item.productItem.title}
									className="bg-slate-300 rounded-md"
									width={150}
									height={120}
								/>
								<div className="grow mt-2 grid grid-cols-1 gap-y-1 sm:grid-cols-3 sm:gap-x-8 font-medium">
									<h5 className="sm:col-span-2">{item.productItem.title}</h5>
									<h4 className="text-gray-600 sm:ml-1">
										${item.productItem.defaultProductVariant.price}
									</h4>

									<div className="sm:col-span-2 w-32 mt-2 flex h-10 rounded-md border bg-transparent">
										<button
											data-action="decrement"
											className="text-gray-500 hover:text-red-500 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-l"
											onClick={() =>
												modifyCartItems(item.productItem._id, 'dec')
											}
										>
											<HiMinus className="m-auto" />
										</button>
										<input
											type="number"
											className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-gray-700  outline-none"
											name="quatity-input-number"
											value={item.quantity}
											onChange={() => {}}
										/>

										<button
											data-action="increment"
											className="text-gray-500 hover:text-green-700 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-r"
											onClick={() =>
												modifyCartItems(item.productItem._id, 'inc')
											}
										>
											<HiPlus className="m-auto" />
										</button>
									</div>
									<button
										type="button"
										className="mt-2 w-10 h-10 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
										onClick={() => removeFromCart(item.productItem)}
									>
										<HiX className="w-5 h-5 m-auto" />
									</button>
								</div>
							</div>
						))}
				</div>
				{cartItems.length >= 1 && (
					<div className="w-full bg-neutral-100 absolute bottom-0 inset-x-0 py-4 px-4  md:px-6 lg:px-12">
						<div className="flex justify-between text-lg font-bold mb-12">
							<h3>Subtotal:</h3>
							<h3>${totalPrice}</h3>
						</div>
						<button
							type="button"
							className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500 uppercase mb-8"
							onClick={handleCheckout}
						>
							Pay with Stripe
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
