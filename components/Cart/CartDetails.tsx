'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HiMinus, HiPlus, HiX, HiOutlineShoppingBag } from 'react-icons/hi';

import { useStateContext } from '../../state/hooks';
import { urlFor } from '../../lib/sanity';
import Image from 'next/image';
import Modal from '.././Modal';
import Confirm from '.././Confirm';
import { convertToDollar } from '../../utils/helper';

const CartDetails = () => {
	const [showModal, setShowModal] = useState(false);

	const {
		cartItems,
		showCart,
		removeFromCart,
		modifyCartItems,
		toggleShowCart,
	} = useStateContext();

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const openModal = (e: React.MouseEvent) => {
		e.stopPropagation();
		toggleModal();
	};

	return (
		<>
			{cartItems.length < 1 && (
				<div className="m-10 col-span-2 text-center">
					<HiOutlineShoppingBag className="inline" size={150} />
					<h3 className="text-xl font-semibold">
						Your cart is currently empty
					</h3>
					<Link href="/" className="flex justify-center">
						<button
							type="button"
							onClick={showCart ? toggleShowCart : () => {}}
							className="mt-10 bg-gray-50 hover:bg-red-400 border rounded-md py-3 px-8 flex items-center justify-center text-base uppercase font-medium text-red-500 hover:text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-50"
						>
							Return to Shopping
						</button>
					</Link>
				</div>
			)}

			<div className="mt-4 py-5">
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
									{convertToDollar(
										item.productItem.defaultProductVariant.price
									)}
								</h4>

								<div className="sm:col-span-2 w-32 mt-2 flex h-10 rounded-md border bg-transparent">
									<button
										data-action="decrement"
										className="text-gray-500 hover:text-red-500 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-l"
										onClick={() => modifyCartItems(item.productItem._id, 'dec')}
									>
										<HiMinus className="m-auto" />
									</button>
									<input
										type="number"
										className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-gray-700"
										name="quatity-input-number"
										value={item.quantity}
										onChange={() => {}}
									/>

									<button
										data-action="increment"
										className="text-gray-500 hover:text-green-700 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-r"
										onClick={() => modifyCartItems(item.productItem._id, 'inc')}
									>
										<HiPlus className="m-auto" />
									</button>
								</div>
								<button
									type="button"
									className="mt-2 w-10 h-10 text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"
									onClick={openModal}
								>
									<HiX className="w-5 h-5 m-auto" />
								</button>

								<Modal
									title={`Remove ${item.productItem.title}`}
									isOpen={showModal}
									handleClick={toggleModal}
								>
									<Confirm
										toggleModal={toggleModal}
										name="remove"
										handleSubmit={(
											e:
												| React.FormEvent<HTMLFormElement>
												| React.MouseEvent<HTMLButtonElement>
										) => {
											e.preventDefault();
											removeFromCart(item.productItem);
											toggleModal();
										}}
									>
										<h5 className="text-lg leading-normal font-normal text-gray-800">
											Do you want to remove this item from cart?
										</h5>
									</Confirm>
								</Modal>
							</div>
						</div>
					))}
			</div>
		</>
	);
};

export default CartDetails;
