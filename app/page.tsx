import Product from '../components/Product';
import { client } from '../lib/sanity';

const getProducts: () => Promise<Product[]> = async () => {
	const query = `*[_type == "product"]{
		_id,
		title,
		slug,
		defaultProductVariant,
	}`;

	const products = await client.fetch(query);
	return products;
};

const Home = async () => {
	const products = await getProducts();

	return (
		<>
			<h2 className="font-semibold text-2xl">All products</h2>

			<div className="mt-6 sm:px-0 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
				{products?.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>

			<a
				href="#"
				className="text-lg text-right underline text-gray-900 hover:text-gray-500"
			>
				<p className="mt-16"> see more</p>
			</a>
		</>
	);
};

export default Home;
