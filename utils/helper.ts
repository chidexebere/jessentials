import { toast } from 'react-hot-toast';
import getStripe from '../lib/getStripe';

export const handleCheckout = async (cartItems: CartItem[]) => {
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

export const convertToDollar = (amount: number) => {
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};
