import type { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Product from '../../components/Product';
import { client } from '../../lib/sanity';

interface Props {
	filteredProducts: Product[];
}

const Category = ({ filteredProducts }: Props) => {
	const { categories } = filteredProducts[0];
	return (
		<div className="">
			<h2 className="font-semibold text-2xl">{categories[0].title}</h2>

			<div className="mt-6 sm:px-0 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
				{filteredProducts.map((product) => (
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
	);
};

export default Category;

export const getStaticPaths: GetStaticPaths = async () => {
	const query = `*[_type == "category"] {
    slug {
      current
    }
  }
  `;

	const categories = await client.fetch(query);

	const paths = categories.map((category: Category) => ({
		params: {
			slug: category.slug.current,
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({
	params: { slug } = {},
}) => {
	const query = `*[_type == "product" && '${slug}' in categories[]->slug.current] {
		_id,
		title,
		slug,
		defaultProductVariant,
		categories[] -> {
			title
},
	}`;

	const filteredProducts = await client.fetch(query);

	return {
		props: { filteredProducts },
	};
};
