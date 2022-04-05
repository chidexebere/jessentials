export interface AppState {
	cart: {
		cartItems: [];
		shippingAddress: {};
		paymentMethod: string;
	};
	userInfo: string;
}

export const initialState: AppState = {
	cart: {
		cartItems: [],
		shippingAddress: {},
		paymentMethod: '',
	},
	userInfo: '',
};
