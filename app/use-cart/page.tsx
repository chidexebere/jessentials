import dynamic from 'next/dynamic';

const CartDetails = dynamic(() => import('../../components/Cart/CartDetails'), {
	ssr: false,
});

const CartSummary = dynamic(() => import('../../components/Cart/CartSummary'), {
	ssr: false,
});
const CartHeader = dynamic(() => import('../../components/Cart/CartHeader'), {
	ssr: false,
});

const UseCart = () => {
	return (
		<>
			<CartHeader />
			<div className="grid grid-cols-1 gap-x-4 lg:grid-cols-2">
				<CartDetails />
				<CartSummary />
			</div>
		</>
	);
};

export default UseCart;
