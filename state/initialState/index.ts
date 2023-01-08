// import { CartItems, ProductObject } from '../../types';

// export interface AppState {
// 	cart: {
// 		cartItems: CartItems[];
// 		shippingAddress: string;
// 		paymentMethod: string;
// 	};
// 	userInfo: string;
// }

// export const initialState: AppState = {
// 	cart: {
// 		cartItems: [],
// 		shippingAddress: '',
// 		paymentMethod: '',
// 	},
// 	userInfo: '',
// };

export const initialState: IAppState = {
	showCart: false,
	cartItems: [],
	totalPrice: 0,
	totalQuantity: 0,
	selectedQty: 1,
};
