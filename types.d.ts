type ImageType = {
	_type: string;
	_key: string;
	asset: { _ref: string; _type: strings };
};

type CategoryRef = {
	_type: string;
	_key: string;
	_ref: string;
};

type Category = {
	slug: { _type: string; current: string };
	title: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
};

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
	body: { _type: string; en: BodyContent[] };
	categories: Category[];
	defaultProductVariant: {
		_type: string;
		grams: number;
		images: ImageType[];
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

type CartItem = {
	productItem: Product;
	quantity: number;
};

interface IAppState {
	showCart: boolean;
	cartItems: CartItem[];
	totalPrice: number;
	totalQuantity: number;
	selectedQty: number;
}

type PageParams = {
	slug: string;
};

type PageProps = {
	params: PageParams;
};
