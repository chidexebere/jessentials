'use client';

import { HiArrowLeft } from 'react-icons/hi';
import { useStateContext } from '../../state/hooks';
import CartHeader from './CartHeader';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';

const Cart = () => {
	const { toggleShowCart } = useStateContext();

	return (
		<div className="w-screen bg-black/50 fixed top-0 right-0 z-40 transition duration-1000 ease-in-out">
			<div className="h-screen w-4/5 md:w-3/5 xl:w-2/5 bg-white float-right py-4 px-2 md:px-5 lg:px-10 overflow-y-auto">
				<div className="flex items-center text-lg font-medium gap-0.5">
					<button
						type="button"
						className="mr-8 rounded-full text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						onClick={toggleShowCart}
					>
						<HiArrowLeft size={30} />
					</button>
					<CartHeader />
				</div>
				<div className="overflow-x-auto">
					<CartDetails />
				</div>

				<div className="bg-neutral-100 rounded-xl py-4 px-4 overflow-x-auto">
					<CartSummary />
				</div>
			</div>
		</div>
	);
};

export default Cart;
