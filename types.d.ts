type Product = {
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
	blurb: {
		_type: string;
		en: string;
	};
	body: { _type: string; en: [] };
	categories: [[], []];
	defaultProductVariant: {
		_type: string;
		grams: number;
		images: string[];
		price: number;
		numberInStock: number;
	};
	slug: { _type: string; current: string };
	title: string;
	tags: [];
	vendor: {
		_ref: string;
		_type: string;
	};
};

// type ProductsArray = ProductObject[];

type BodyContent = {
	_key: string;
	_type: string;
	children: [
		{
			marks: [];
			text: string;
			_key: string;
			_type: string;
		}
	];
	markDefs: [];
	style: string;
};

type CartItem = {
	productItem: Product;
	quantity: number;
};

// type CartItems = Product & number;

interface IAppState {
	showCart: boolean;
	cartItems: CartItem[];
	totalPrice: number;
	totalQuantity: number;
	selectedQty: number;
}
