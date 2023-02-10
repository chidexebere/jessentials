import { HiArrowDown } from 'react-icons/hi';
import { useStateContext } from '../../state/hooks';
import { convertToDollar, handleCheckout } from '../../utils/helper';
import DemoCard from '../DemoCard';

const CartSummary = () => {
	const { cartItems, totalPrice } = useStateContext();

	return (
		<>
			{cartItems.length >= 1 && (
				<div className="">
					<div className="flex justify-between text-xl font-bold mb-8">
						<h3>Subtotal:</h3>
						<h3>{convertToDollar(totalPrice)}</h3>
					</div>

					<div className="flex flex-col">
						<h3 className="font-medium tracking-more-wider">
							use this test demo card
						</h3>
						<HiArrowDown className="my-4" size={25} />
						<DemoCard />
					</div>
					<div className="mt-8 flex justify-end">
						<button
							type="button"
							className="bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-50 focus:ring-cyan-500 uppercase mb-8"
							onClick={() => handleCheckout(cartItems)}
						>
							Checkout with Stripe
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default CartSummary;
