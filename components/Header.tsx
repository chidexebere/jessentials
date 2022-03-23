import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import cn from 'classnames';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
	{ name: 'All', href: '#', current: true },
	{ name: 'Oils', href: '#', current: false },
	{ name: 'Bags', href: '#', current: false },
	{ name: 'Shoes', href: '#', current: false },
];

const Nav = () => {
	return (
		<nav className="block py-4 overflow-x-auto sm:py-0 sm:pb-2">
			<div className="flex justify-start sm:justify-center gap-x-2 sm:gap-x-10 space-x-4">
				{navigation.map((item) => (
					<a
						key={item.name}
						href={item.href}
						className={cn(
							item.current
								? 'bg-black text-white hover:text-slate-200'
								: 'text-black bg-gray-300 hover:text-slate-500',
							'px-8 py-2 rounded-md text-sm font-medium text-base'
						)}
						aria-current={item.current ? 'page' : undefined}
					>
						{item.name}
					</a>
				))}
			</div>
		</nav>
	);
};

interface Props {
	handleNavAdded: (value: boolean) => void;
}

const Header: NextPage<Props> = ({ handleNavAdded }) => {
	const [changeHeaderColor, setChangeHeaderColor] = useState(false);

	const router = useRouter();
	const homePath = `/`;
	let nav;

	if (router.pathname === homePath) {
		nav = <Nav />;
		handleNavAdded(true);
	} else {
		nav = null;
		handleNavAdded(false);
	}

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
	});

	return (
		<header
			className={cn(
				changeHeaderColor ? 'bg-slate-100 shadow-lg' : 'bg-neutral-100',
				'fixed inset-x-0 top-0 z-10'
			)}
		>
			<div className="px-4 py-2 sm:px-8 lg:px-14">
				<div className="relative flex items-center justify-between h-16">
					<div className="flex-1 flex items-stretch justify-start">
						<div className="flex-shrink-0 flex items-center cursor-pointer">
							<Link href={`/`} passHref>
								<h1 className="text-3xl text-red-700 font-bold">
									J<span className="text-2xl text-black">ESSENTIALS</span>
								</h1>
							</Link>
						</div>
					</div>
					<div className="flex items-center gap-2 sm:gap-4">
						<button
							type="button"
							className="p-1 rounded-full text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span className="sr-only">Open user menu</span>
							<UserIcon className="h-6 w-6" aria-hidden="true" />
						</button>

						<button
							type="button"
							className="p-1 rounded-full text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							<span className="sr-only">View notifications</span>
							<ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
				</div>
				{nav}
			</div>
		</header>
	);
};
export default Header;
