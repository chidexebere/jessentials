import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
	apiVersion: '2022-11-15',
});

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		try {
			const params: Stripe.Checkout.SessionCreateParams = {
				submit_type: 'pay',
				mode: 'payment',
				payment_method_types: ['card'],
				billing_address_collection: 'auto',
				shipping_options: [
					{ shipping_rate: 'shr_1MXykiB7e4AnGvuM2Nxe1QI8' },
					{ shipping_rate: 'shr_1MXyjGB7e4AnGvuMXmxwesLW' },
				],
				line_items: req.body.map((item: CartItem) => {
					const img =
						item.productItem.defaultProductVariant.images[0].asset._ref;
					const newImage = img
						.replace(
							'image-',
							'https://cdn.sanity.io/images/l04z0d82/production/'
						)
						.replace('-jpg', '.jpg');

					return {
						price_data: {
							currency: 'usd',
							product_data: {
								name: item.productItem.title,
								images: [newImage],
							},
							unit_amount: item.productItem.defaultProductVariant.price * 100,
						},
						adjustable_quantity: {
							enabled: true,
							minimum: 1,
						},
						quantity: item.quantity,
					};
				}),
				success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
				cancel_url: `${req.headers.origin}/use-cart?session_id={CHECKOUT_SESSION_ID}`,
			};

			// Create Checkout Sessions from body params.
			const session: Stripe.Checkout.Session =
				await stripe.checkout.sessions.create(params);

			res.status(200).json(session);
		} catch (err) {
			console.log(err);
			const errorMessage =
				err instanceof Error ? err.message : 'Internal server error';
			res.status(500).json({ statusCode: 500, message: errorMessage });
		}
	} else {
		res.setHeader('Allow', 'POST');
		res.status(405).end('Method Not Allowed');
	}
}
