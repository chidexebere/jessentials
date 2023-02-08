import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { HiArrowLeft } from 'react-icons/hi';
import { useStateContext } from '../../state/hooks';

const CartDetails = dynamic(() => import('../Cart/CartDetails'), {
	ssr: false,
});

const CartSummary = dynamic(() => import('../Cart/CartSummary'), {
	ssr: false,
});

const CartHeader = dynamic(() => import('../Cart/CartHeader'), {
	ssr: false,
});

const Cart = () => {
	const cartRef = useRef<HTMLDivElement | any>();

	const { toggleShowCart } = useStateContext();

	return (
		<div
			className="w-screen bg-black/50 fixed top-0 right-0 z-40 transition duration-1000 ease-in-out"
			ref={cartRef}
		>
			<div className="h-screen w-4/5 md:w-3/5 xl:w-2/5 bg-white float-right py-4 px-2 md:px-5 lg:px-10 relative">
				<div className="flex items-center text-lg font-medium gap-0.5">
					<button
						type="button"
						className="mr-8 rounded-full text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						onClick={toggleShowCart}
					>
						<HiArrowLeft size={25} />
					</button>
					<CartHeader />
				</div>

				<CartDetails />

				<div className="w-full bg-neutral-100 absolute bottom-0 inset-x-0 py-4 px-4  md:px-6 lg:px-12">
					<CartSummary />
				</div>
			</div>
		</div>
	);
};

export default Cart;
