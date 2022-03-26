import classNames from 'classnames';

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
						className={classNames(
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

export default Nav;
