export type ProductObject = {
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
	};
	slug: { _type: string; current: string };
	title: string;
	tags: [];
	vendor: {
		_ref: string;
		_type: string;
	};
};

export type ProductsArray = ProductObject[];

export type BodyContent = {
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
