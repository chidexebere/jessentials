import { client } from '../../../lib/sanity';
import Category from '../category-page';

export const generateStaticParams: () => Promise<PageParams[]> = async () => {
	const query = `*[_type == "category"] {
    slug {
      current
    }
  }
  `;

	const categories = await client.fetch(query);

	const paths = categories.map((category: Category) => ({
		slug: category.slug.current,
	}));

	return paths;
};

export const getFilteredProducts = async (slug: string) => {
	const query = `*[_type == "product" && '${slug}' in categories[]->slug.current] {
		_id,
		title,
		slug,
		defaultProductVariant,
		categories[] -> {
			title
},
	}`;

	const filteredProducts: Product[] = await client.fetch(query);

	return {
		filteredProducts,
		slug,
	};
};

const Page = async ({ params }: PageProps) => {
	const { filteredProducts, slug } = await getFilteredProducts(params.slug);

	return <Category products={filteredProducts} slug={slug} />;
};

export default Page;
