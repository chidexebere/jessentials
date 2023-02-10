import React, { useEffect } from 'react';
import Link from 'next/link';
import { HiCheckBadge } from 'react-icons/hi2';

import { useStateContext } from '../state/hooks';
import { runFireworks } from '../utils/runFireworks';

const Success = () => {
	const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

	useEffect(() => {
		setCartItems([]);
		setTotalPrice(0);
		setTotalQuantity(0);
		runFireworks();
	}, []);

	return (
		<div className="grid place-items-center">
			<div className="mt-4 md:w-4/5 xl:w-3/5 text-center">
				<HiCheckBadge className="inline text-green-600" size={100} />

				<h2 className="mt-8 font-bold text-4xl capitalize">
					Thank you for your purchase!
				</h2>
				<p className="mt-4 text-base font-medium">
					Please check your email inbox for the receipt.
				</p>
				<p className="mt-4 text-base font-medium">
					If you have any questions, email:
					<a className="ml-2 text-blue-400" href="mailto:order@jessentials.com">
						order@jessentials.com
					</a>
				</p>

				<Link href="/" className="flex justify-center">
					<button
						type="button"
						className="my-10 bg-gray-50 hover:bg-red-400 border rounded-md py-3 px-8 flex items-center justify-center text-base uppercase font-medium text-red-500 hover:text-white shadow-sm  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-50"
					>
						Continue Shopping
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Success;
