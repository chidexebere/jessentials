import { client } from '../../../lib/sanity';
import ProductPage from '../product-page';

export const generateStaticParams: () => Promise<PageParams[]> = async () => {
	const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

	const products: Product[] = await client.fetch(query);
	const paths = products.map((product: Product) => ({
		slug: product.slug.current,
	}));

	return paths;
};

export const getAllProducts = async (slug: string) => {
	const query = `*[_type == "product" && slug.current == '${slug}'][0]{
		_id,
		title,
		body,
		defaultProductVariant,
	}`;
	const productsQuery = `*[_type == "product"]{
		_id,
		title,
		slug,
		defaultProductVariant,
	}`;

	const eachProduct: Product = await client.fetch(query);
	const products: Product[] = await client.fetch(productsQuery);

	return {
		eachProduct,
		products,
	};
};

const Page = async ({ params }: PageProps) => {
	const { eachProduct, products } = await getAllProducts(params.slug);

	return <ProductPage eachProduct={eachProduct} products={products} />;
};

export default Page;
