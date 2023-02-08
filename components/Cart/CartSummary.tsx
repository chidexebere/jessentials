import { useStateContext } from '../../state/hooks';
import { handleCheckout } from '../../utils/helper';
import DemoCard from '../DemoCard';

const CartSummary = () => {
	const { cartItems, totalPrice } = useStateContext();

	return (
		<>
			{cartItems.length >= 1 && (
				<div className="">
					<div className="flex justify-between text-lg font-bold mb-8">
						<h3>Subtotal:</h3>
						<h3>${totalPrice}</h3>
					</div>
					<button
						type="button"
						className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500 uppercase mb-8"
						onClick={() => handleCheckout(cartItems)}
					>
						Pay with Stripe
					</button>
					<div className="overflow-auto">
						<h3 className="uppercase text-center font-bold tracking-more-wider text-sm">
							use this test demo card
						</h3>
						<DemoCard />
					</div>
				</div>
			)}
		</>
	);
};

export default CartSummary;
