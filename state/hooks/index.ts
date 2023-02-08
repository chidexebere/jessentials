import Cookies from 'js-cookie';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { CONSTANTS } from '../actions';
import { AppContext } from '../context';

export const useStateContext = () => {
	const { state, dispatch } = useContext(AppContext);

	const { showCart, cartItems, totalPrice, totalQuantity, selectedQty } = state;

	const setCartItems = (cartItems: CartItem[]) => {
		dispatch({
			type: CONSTANTS.SET_CART_ITEMS,
			payload: cartItems,
		});
		Cookies.set('cartItems', JSON.stringify(cartItems));
	};

	const setTotalPrice = (totalPrice: number) => {
		dispatch({
			type: CONSTANTS.SET_TOTAL_PRICE,
			payload: totalPrice,
		});
		Cookies.set('totalPrice', JSON.stringify(totalPrice));
	};

	const setTotalQuanitity = (totalQuantity: number) => {
		dispatch({
			type: CONSTANTS.SET_TOTAL_QTY,
			payload: totalQuantity,
		});
		Cookies.set('totalQuantity', JSON.stringify(totalQuantity));
	};

	const addToCart = (selectedProduct: Product, selectedQuantity: number) => {
		const checkProductInCart = cartItems.some(
			(cartItem) => cartItem.productItem._id === selectedProduct._id
		);
		const newTotalPrice =
			totalPrice +
			selectedProduct.defaultProductVariant.price * selectedQuantity;

		setTotalPrice(newTotalPrice);
		setTotalQuanitity(totalQuantity + selectedQuantity);

		if (checkProductInCart) {
			const updatedCartItem = cartItems.find(
				(cartItem) => cartItem.productItem._id === selectedProduct._id
			) as CartItem;

			const remainingCartItems = cartItems.filter(
				(cartItem) => cartItem.productItem._id !== selectedProduct._id
			);

			setCartItems([
				...remainingCartItems,
				{
					...updatedCartItem,
					quantity: updatedCartItem.quantity + selectedQuantity,
				},
			]);
		} else {
			const selectedItem = {
				productItem: selectedProduct,
				quantity: selectedQuantity,
			};

			setCartItems([...cartItems, { ...selectedItem }]);
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

		setTotalPrice(newTotalPrice);
		setTotalQuanitity(totalQuantity - selectedItem.quantity);
		setCartItems(newCartItems);

		toast(`${selectedProduct.title} removed from cart.`, {
			icon: '🔔',
		});
	};

	const modifyCartItems = (id: string, value: string) => {
		const selectedItem = cartItems.find(
			(cartItem) => cartItem.productItem._id === id
		) as CartItem;

		const selectedItemIndex = cartItems.findIndex(
			(cartItem) => cartItem.productItem._id === id
		);

		const cartItemsCopy = cartItems.slice();

		if (value === 'inc') {
			cartItemsCopy.splice(selectedItemIndex, 1, {
				...selectedItem,
				quantity: selectedItem.quantity + 1,
			});

			setCartItems(cartItemsCopy);

			const newTotalPrice =
				totalPrice + selectedItem.productItem.defaultProductVariant.price;

			setTotalPrice(newTotalPrice);
			setTotalQuanitity(totalQuantity + 1);
		} else if (value === 'dec') {
			if (selectedItem.quantity > 1) {
				cartItemsCopy.splice(selectedItemIndex, 1, {
					...selectedItem,
					quantity: selectedItem.quantity - 1,
				});

				setCartItems(cartItemsCopy);

				const newTotalPrice =
					totalPrice - selectedItem.productItem.defaultProductVariant.price;

				setTotalPrice(newTotalPrice);
				setTotalQuanitity(totalQuantity - 1);
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
		setCartItems,
		addToCart,
		removeFromCart,
		modifyCartItems,
		increaseQty,
		decreaseQty,
		setQty,
		toggleShowCart,
	};
};
