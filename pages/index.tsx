import type { GetServerSideProps } from 'next';
import Product from '../components/Product';
import { client } from '../lib/sanity';

interface Props {
	products: Product[];
}

const Home = ({ products }: Props) => {
	return (
		<div className="">
			<h2 className="font-semibold text-2xl">All products</h2>

			<div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				{products.map((product) => {
					return <Product key={product._id} product={product} />;
				})}
			</div>

			<a
				href="#"
				className="text-lg text-right underline text-gray-900 hover:text-gray-500"
			>
				<p className="mt-16"> see more</p>
			</a>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
	const products = await client.fetch(`*[_type == "product"]`);
	return {
		props: {
			products,
		},
	};
};
