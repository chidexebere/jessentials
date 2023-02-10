export const initialState: IAppState = {
	showCart: false,
	cartItems:
		typeof window !== 'undefined' && localStorage.getItem('cartItems')
			? JSON.parse(localStorage.getItem('cartItems') as string)
			: [],
	totalPrice:
		typeof window !== 'undefined' && localStorage.getItem('totalPrice')
			? JSON.parse(localStorage.getItem('totalPrice') as string)
			: 0,
	totalQuantity:
		typeof window !== 'undefined' && localStorage.getItem('totalQuantity')
			? JSON.parse(localStorage.getItem('totalQuantity') as string)
			: 0,
	selectedQty: 1,
};
