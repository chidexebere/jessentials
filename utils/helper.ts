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

export const makeTitle = (slug: string) => {
	var words = slug.split('-');

	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		words[i] = word.charAt(0).toUpperCase() + word.slice(1);
	}

	return words.join(' ');
};
