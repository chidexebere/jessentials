import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';

interface Props {
	product: Product;
}

const Product = ({
	product: { slug, defaultProductVariant, title, _rev },
}: Props) => {
	console.log(_rev);
	return (
		<div>
			<Link href={`/product/${slug.current}`} passHref>
				<div className="group/item hover:bg-red-200">
					<div className="w-full rounded-md overflow-hidden shadow-lg shadow-indigo-500/50 hover:shadow-red-500/50">
						{/* <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs"> */}
						<Image
							src={urlFor(defaultProductVariant.images[0]).url()}
							alt={title}
							className="w-full object-center object-cover"
							// className="max-w-xs"
							width={300}
							height={300}
							layout="responsive"
						/>
						{/* <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-30 transition duration-300 ease-in-out bg-red-700"></div> */}
					</div>
					<div className="p-4 flex flex-col gap-2">
						<div>
							<h3 className="text-base font-medium text-gray-900">
								{/* <a href={_rev}> */}
								<span aria-hidden="true" className="absolute inset-0" />
								{title}
								{/* </a> */}
							</h3>
						</div>
						<p className="text-base text-gray-700">{`$${defaultProductVariant.price}`}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Product;
