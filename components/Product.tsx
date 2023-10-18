'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/sanity';
import { transition } from '../utils/transition';

interface Props {
  product: Product;
}

const Product = ({
  product: { slug, defaultProductVariant, title },
}: Props) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <div className="w-full rounded-md overflow-hidden hover:shadow-lg hover:shadow-red-500/50">
        <motion.div
          layoutId={`product-${slug.current}`}
          transition={transition}
        >
          <Image
            src={urlFor(defaultProductVariant.images[0]).url()}
            alt={title}
            className="w-full sm:h-64 object-center object-fill shadow-lg rounded-md hover:rounded-none"
            width={250}
            height={250}
          />
        </motion.div>
        <motion.div
          layoutId={`product-${slug.current}-info`}
          transition={transition}
        >
          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-base font-medium text-gray-900">{title}</h3>
            <p className="text-base text-gray-700 hover:text-red-500">{`$${defaultProductVariant.price}`}</p>
          </div>
        </motion.div>
      </div>
    </Link>
  );
};

export default Product;
