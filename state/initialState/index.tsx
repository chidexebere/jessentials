import Cookies from 'js-cookie';

export const initialState: IAppState = {
	showCart: false,
	cartItems:
		Cookies.get('cartItems') !== undefined
			? JSON.parse(Cookies.get('cartItems') as string)
			: [],
	totalPrice: Cookies.get('totalPrice')
		? JSON.parse(Cookies.get('totalPrice') as string)
		: 0,
	totalQuantity: Cookies.get('totalQuantity')
		? JSON.parse(Cookies.get('totalQuantity') as string)
		: 0,
	selectedQty: 1,
};
