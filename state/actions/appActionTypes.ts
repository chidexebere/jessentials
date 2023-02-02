export enum CONSTANTS {
	TOGGLE_SHOW_CART = 'TOGGLE_SHOW_CART',
	SET_CART_ITEMS = 'SET_CART_ITEMS',
	SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
	SET_TOTAL_QTY = 'SET_TOTAL_QTY',
	INC_QTY = 'INC_QTY',
	DEC_QTY = 'DEC_QTY',
	SET_QTY = 'SET_QTY',
}

interface toggleShowCart {
	type: CONSTANTS.TOGGLE_SHOW_CART;
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

interface setCartQty {
	type: CONSTANTS.SET_QTY;
	payload: number;
}

export type AppActions =
	| toggleShowCart
	| setCartItems
	| setTotalPrice
	| setTotalQuantity
	| increaseCartQty
	| decreaseCartQty
	| setCartQty;
