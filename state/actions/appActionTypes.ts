export enum CONSTANTS {
	TOGGLE_CART = 'TOGGLE_CART',
	SET_CART_ITEMS = 'SET_CART_ITEMS',
	SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
	SET_TOTAL_QTY = 'SET_TOTAL_QTY',
	INC_QTY = 'INC_QTY',
	DEC_QTY = 'DEC_QTY',
}

interface toggleCart {
	type: CONSTANTS.TOGGLE_CART;
}

interface setCartItems {
	type: CONSTANTS.SET_CART_ITEMS;
	payload: CartItem[];
}

interface setTotalPrice {
	type: CONSTANTS.SET_TOTAL_PRICE;
	payload: number;
}

interface setTotalQuantity {
	type: CONSTANTS.SET_TOTAL_QTY;
	payload: number;
}

interface increaseCartQty {
	type: CONSTANTS.INC_QTY;
}

interface decreaseCartQty {
	type: CONSTANTS.DEC_QTY;
}

export type AppActions =
	| toggleCart
	| setCartItems
	| setTotalPrice
	| setTotalQuantity
	| increaseCartQty
	| decreaseCartQty;
