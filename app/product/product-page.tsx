'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import Product from '../../components/Product';
import { urlFor } from '../../lib/sanity';
import { useStateContext } from '../../state/hooks';
import { convertToDollar } from '../../utils/helper';

interface Props {
  eachProduct: Product;
  products: Product[];
}

const ProductPage = ({ eachProduct, products }: Props) => {
  const { decreaseQty, increaseQty, setQty, selectedQty, addToCart } =
    useStateContext();

  const [imageIndex, setImageIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setQty(Number(value));
  };

  const quantity = selectedQty === 0 ? '' : selectedQty;

  return (
    <div className="">
      {eachProduct && (
        <div className="flex flex-col lg:flex-row">
          <div className="lg:basis-1/2 flex flex-col">
            <div className="mx-auto sm:h-[26rem] flex items-center bg-neutral-100">
              <Image
                src={urlFor(
                  eachProduct.defaultProductVariant.images[imageIndex]
                ).url()}
                alt={eachProduct.title}
                className="object-center object-cover bg-neutral-100 rounded-lg overflow-hidden shadow-lg shadow-indigo-500/50 hover:shadow-red-500/50"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-4 mx-auto flex gap-x-2">
              {eachProduct.defaultProductVariant.images?.map((item, i) => (
                <Image
                  key={i}
                  src={urlFor(item).url()}
                  alt={eachProduct.title}
                  className={
                    i === imageIndex
                      ? 'rounded-md cursor-pointer shadow-md hover:shadow-red-500'
                      : 'rounded-md cursor-pointer'
                  }
                  width={70}
                  height={70}
                  onMouseEnter={() => setImageIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="lg:basis-1/2 max-w-xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0">
            <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
              <div className="flex flex-col">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 ">
                  {eachProduct.title}
                </h1>
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <p className="text-2xl text-gray-800 my-2">
                  {convertToDollar(eachProduct.defaultProductVariant.price)}
                  <span className="ml-1 text-lg text-gray-500">USD</span>
                </p>
              </div>
            </motion.div>

            <div className="mt-2 lg:mt-4 text-lg lg:text-xl w-32">
              <label htmlFor="quanity-input-number" className="text-gray-700">
                Quantity
              </label>
              <div className="mt-1 flex h-10 rounded-md border bg-transparent">
                <button
                  data-action="decrement"
                  className="text-gray-500 hover:text-red-500 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-l"
                  onClick={decreaseQty}
                >
                  <HiMinus className="m-auto" />
                </button>
                <input
                  type="number"
                  className="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default text-gray-700  outline-none"
                  name="quatity-input-number"
                  value={quantity}
                  onChange={handleInputChange}
                />
                <button
                  data-action="increment"
                  className="text-gray-500 hover:text-green-700 bg-white hover:bg-gray-400 outline-none h-full w-20 rounded-r"
                  onClick={increaseQty}
                >
                  <HiPlus className="m-auto" />
                </button>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <button
                type="button"
                className="w-full bg-gray-50 hover:bg-gray-400 border rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
                onClick={() => addToCart(eachProduct, selectedQty)}
              >
                Add To Cart
              </button>

              <Link href={'/use-cart'}>
                <button
                  type="button"
                  className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
                >
                  Checkout
                </button>
              </Link>
            </div>
            <div className="pt-10 sm:border-t sm:mt-10">
              {eachProduct.body.en.map((content) => (
                <p key={content._key} className="text-gray-500 mt-6">
                  {content.children[0].text}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
      {products && (
        <section className="mt-16">
          <h2 className="mb-4 text-2xl sm:text-3xl font-medium tracking-tight">
            Other products
          </h2>
          <div className="relative w-full h-[22rem] overflow-x-hidden">
            <div className="flex justify-start gap-8 absolute whitespace-nowrap will-change-transform animate-marquee hover:pause">
              {products.map((item) => (
                <div
                  key={item._id}
                  className="w-60"
                  onClick={() => setImageIndex(0)}
                >
                  <Product product={item} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
