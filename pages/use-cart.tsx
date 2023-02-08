import dynamic from 'next/dynamic';

const CartDetails = dynamic(() => import('../components/Cart/CartDetails'), {
	ssr: false,
});

const CartSummary = dynamic(() => import('../components/Cart/CartSummary'), {
	ssr: false,
});
const CartHeader = dynamic(() => import('../components/Cart/CartHeader'), {
	ssr: false,
});

const UseCart = () => {
	return (
		<>
			<CartHeader />
			<CartDetails />
			<CartSummary />
		</>
	);
};

export default UseCart;
