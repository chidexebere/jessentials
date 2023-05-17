'use client';

import Product from '../../components/Product';
import { makeTitle } from '../../utils/helper';

interface Props {
	products: Product[];
	slug: string;
}

const Category = ({ products, slug }: Props) => {
	return (
		<>
			{products && (
				<div className="">
					<h2 className="font-semibold text-2xl">{makeTitle(slug)}</h2>

					<div className="mt-6 sm:px-0 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
						{products.map((product) => (
							<Product key={product._id} product={product} />
						))}
					</div>

					<a
						href="#"
						className="text-lg text-right underline text-gray-900 hover:text-gray-500"
					>
						<p className="mt-16"> see more</p>
					</a>
				</div>
			)}
		</>
	);
};

export default Category;
