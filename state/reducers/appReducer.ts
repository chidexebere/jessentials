import { AppActions, CONSTANTS } from '../actions';

const appReducer = (state: IAppState, action: AppActions): IAppState => {
	switch (action.type) {
		case CONSTANTS.TOGGLE_SHOW_CART: {
			return { ...state, showCart: !state.showCart };
		}

		case CONSTANTS.SET_CART_ITEMS: {
			return { ...state, cartItems: action.payload };
		}

		case CONSTANTS.SET_TOTAL_PRICE: {
			return { ...state, totalPrice: action.payload };
		}

		case CONSTANTS.SET_TOTAL_QTY: {
			return { ...state, totalQuantity: action.payload };
		}

		case CONSTANTS.INC_QTY: {
			return { ...state, selectedQty: state.selectedQty + 1 };
		}

		case CONSTANTS.DEC_QTY: {
			const decreasedQty = state.selectedQty - 1;
			if (decreasedQty < 1) return state;
			return { ...state, selectedQty: state.selectedQty - 1 };
		}

		case CONSTANTS.SET_QTY: {
			return { ...state, selectedQty: action.payload };
		}

		default:
			return state;
	}
};
export default appReducer;
