import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { CONSTANTS } from '../actions';
import { AppContext } from '../context';

export const useStateContext = () => {
	const { state, dispatch } = useContext(AppContext);

	const { showCart, cartItems, totalPrice, totalQuantity, selectedQty } = state;

	const addToCart = (selectedProduct: Product, quantity: number) => {
		const checkProductInCart = cartItems.some(
			(cartItem) => cartItem.productItem._id === selectedProduct._id
		);
		const newTotalPrice =
			totalPrice + selectedProduct.defaultProductVariant.price * quantity;
		dispatch({
			type: CONSTANTS.SET_TOTAL_PRICE,
			payload: newTotalPrice,
		});

		dispatch({
			type: CONSTANTS.SET_TOTAL_QTY,
			payload: totalQuantity + quantity,
		});

		if (checkProductInCart) {
			const updatedCartItems = cartItems.map((cartItem) => {
				if (cartItem.productItem._id === selectedProduct._id)
					return {
						...cartItem,
						quantity: cartItem.quantity + quantity,
					};
			});

			dispatch({
				type: CONSTANTS.SET_CART_ITEMS,
				payload: updatedCartItems as CartItem[],
			});
		} else {
			const selectedItem = { productItem: selectedProduct, quantity };

			dispatch({
				type: CONSTANTS.SET_CART_ITEMS,
				payload: [...cartItems, { ...selectedItem }],
			});
		}

		toast.success(`${selectedQty} ${selectedProduct.title} added to the cart.`);
	};

	const removeFromCart = (selectedProduct: Product) => {
		const selectedItem = cartItems.find(
			(cartItem) => cartItem.productItem._id === selectedProduct._id
		) as CartItem;
		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.productItem._id !== selectedProduct._id
		);

		const newTotalPrice =
			totalPrice -
			selectedItem.productItem.defaultProductVariant.price *
				selectedItem.quantity;
		dispatch({
			type: CONSTANTS.SET_TOTAL_PRICE,
			payload: newTotalPrice,
		});

		dispatch({
			type: CONSTANTS.SET_TOTAL_QTY,
			payload: totalQuantity - selectedItem.quantity,
		});

		dispatch({
			type: CONSTANTS.SET_CART_ITEMS,
			payload: newCartItems,
		});
	};

	const modifyCartItems = (id: string, value: string) => {
		const selectedItem = cartItems.find(
			(cartItem) => cartItem.productItem._id === id
		) as CartItem;

		const newCartItems = cartItems.filter(
			(cartItem) => cartItem.productItem._id !== id
		);

		if (value === 'inc') {
			const modifiedCartItems = [
				...newCartItems,
				{ ...selectedItem, quantity: selectedItem.quantity + 1 },
			];
			dispatch({
				type: CONSTANTS.SET_CART_ITEMS,
				payload: modifiedCartItems,
			});

			const newTotalPrice =
				totalPrice + selectedItem.productItem.defaultProductVariant.price;

			dispatch({
				type: CONSTANTS.SET_TOTAL_PRICE,
				payload: newTotalPrice,
			});

			dispatch({
				type: CONSTANTS.SET_TOTAL_QTY,
				payload: totalQuantity + 1,
			});
		} else if (value === 'dec') {
			if (selectedItem.quantity > 1) {
				const modifiedCartItems = [
					...newCartItems,
					{ ...selectedItem, quantity: selectedItem.quantity - 1 },
				];
				dispatch({
					type: CONSTANTS.SET_CART_ITEMS,
					payload: modifiedCartItems,
				});

				const newTotalPrice =
					totalPrice - selectedItem.productItem.defaultProductVariant.price;

				dispatch({
					type: CONSTANTS.SET_TOTAL_PRICE,
					payload: newTotalPrice,
				});

				dispatch({
					type: CONSTANTS.SET_TOTAL_QTY,
					payload: totalQuantity - 1,
				});
			}
		}
	};

	const increaseQty = () => {
		dispatch({
			type: CONSTANTS.INC_QTY,
		});
	};

	const decreaseQty = () => {
		dispatch({
			type: CONSTANTS.DEC_QTY,
		});
	};

	const setQty = (quantity: number) => {
		dispatch({
			type: CONSTANTS.SET_QTY,
			payload: quantity,
		});
	};

	const toggleShowCart = () => {
		dispatch({
			type: CONSTANTS.TOGGLE_SHOW_CART,
		});
	};

	return {
		showCart,
		cartItems,
		totalPrice,
		totalQuantity,
		selectedQty,
		addToCart,
		removeFromCart,
		modifyCartItems,
		increaseQty,
		decreaseQty,
		setQty,
		toggleShowCart,
	};
};
