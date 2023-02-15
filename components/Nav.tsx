import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const navigation = [
	{ name: 'Health Care', slug: 'health-care', index: 0 },
	{ name: 'Home Care', slug: 'home-care', index: 1 },
	{ name: 'Fashion', slug: 'fashion', index: 2 },
];

const Nav = () => {
	const router = useRouter();

	const navIndex =
		router.pathname === '/'
			? -1
			: router.pathname === '/category/health-care'
			? 0
			: router.pathname === '/category/home-care'
			? 1
			: 2;

	const [activeIdx, setActiveIdx] = useState(navIndex);

	return (
		<nav className="block py-4 overflow-x-auto sm:py-0 sm:pb-2">
			<div className="flex justify-start sm:justify-center gap-x-2 sm:gap-x-10 space-x-4">
				<Link href={`/`}>
					<button
						className={classNames(
							activeIdx === -1
								? 'bg-black text-white hover:text-slate-200'
								: 'text-black bg-gray-300 hover:text-red-800',
							'px-8 py-2 rounded-md text-sm font-medium text-base'
						)}
						onClick={() => setActiveIdx(-1)}
					>
						All
					</button>
				</Link>
				{navigation.map((item, index) => (
					<Link key={item.name} href={`/category/${item.slug}`}>
						<button
							className={classNames(
								item.index === activeIdx
									? 'bg-black text-white hover:text-slate-200'
									: 'text-black bg-gray-300 hover:text-red-800',
								'px-8 py-2 rounded-md text-sm font-medium text-base'
							)}
							onClick={() => setActiveIdx(index)}
						>
							{item.name}
						</button>
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Nav;
