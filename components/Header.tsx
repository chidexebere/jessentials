'use client';

import { useEffect, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import cn from 'classnames';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Link from 'next/link';
import Nav from './Nav';
import { useStateContext } from '../state/hooks';
import dynamic from 'next/dynamic';

const Cart = dynamic(() => import('./Cart'), { ssr: false });

const Header = () => {
  const [changeHeaderColor, setChangeHeaderColor] = useState(false);

  const { showCart, toggleShowCart, totalQuantity } = useStateContext();

  const pathname = usePathname();
  const params = useParams();
  const { slug } = params as PageParams;
  const homePath = `/`;
  const showNav =
    pathname === homePath ||
    pathname === '/use-cart' ||
    pathname === `/category/${slug}`;

  const changeBackground = () => {
    if (window.scrollY >= 35) {
      setChangeHeaderColor(true);
    } else {
      setChangeHeaderColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, [homePath, pathname]);

  const navIndex =
    pathname === '/'
      ? 0
      : pathname === '/category/health-care'
      ? 1
      : pathname === '/category/home-care'
      ? 2
      : pathname === '/category/fashion'
      ? 3
      : null;

  const [activeIdx, setActiveIdx] = useState(navIndex);

  return (
    <header
      className={cn(
        changeHeaderColor ? 'bg-slate-100 shadow-lg' : 'bg-white',
        'sticky inset-x-0 top-0 z-10'
      )}
    >
      <div className="mx-auto px-4 py-2 sm:px-8 lg:px-14 xl:w-[80rem]">
        <div className={`flex items-center justify-between`}>
          <Link href={`/`} onClick={() => setActiveIdx(0)}>
            <h1 className="text-3xl text-red-700 font-bold">
              J<span className="text-2xl text-black">ESSENTIALS</span>
            </h1>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              className="relative p-1 rounded-full text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleShowCart}
            >
              <span className="sr-only">View cart</span>
              <HiOutlineShoppingBag className="h-6 w-6" aria-hidden="true" />
              {totalQuantity > 0 && (
                <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>
        </div>
        {showNav && <Nav activeIdx={activeIdx} setActiveIdx={setActiveIdx} />}
      </div>
      {showCart && <Cart />}
    </header>
  );
};
export default Header;
