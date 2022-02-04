import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';

const navigation = [
	{ name: 'All', href: '#', current: true },
	{ name: 'Oils', href: '#', current: false },
	{ name: 'Bags', href: '#', current: false },
	{ name: 'Shoes', href: '#', current: false },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const Navbar: NextPage = () => {
	return (
		<Disclosure as="nav" className="bg-neutral-100">
			{({ open }) => (
				<>
					<div className="px-4 py-2 sm:px-8 lg:px-14">
						<div className="relative flex items-center justify-between h-16">
							<div className="flex-1 flex items-stretch justify-start">
								<div className="flex-shrink-0 flex items-center">
									<h1 className="text-3xl text-red-700 font-bold">
										J<span className="text-2xl text-black">ESSENTIALS</span>
									</h1>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								{/* Profile dropdown */}
								<Menu as="div" className="mx-2 sm:mx-4 relative">
									<div>
										<Menu.Button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
											<span className="sr-only">Open user menu</span>
											<UserIcon className="h-6 w-6" aria-hidden="true" />
										</Menu.Button>
									</div>
									<Transition
										as={Fragment}
										enter="transition ease-out duration-100"
										enterFrom="transform opacity-0 scale-95"
										enterTo="transform opacity-100 scale-100"
										leave="transition ease-in duration-75"
										leaveFrom="transform opacity-100 scale-100"
										leaveTo="transform opacity-0 scale-95"
									>
										<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700'
														)}
													>
														Your Profile
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700'
														)}
													>
														Settings
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700'
														)}
													>
														Sign out
													</a>
												)}
											</Menu.Item>
										</Menu.Items>
									</Transition>
								</Menu>

								<button
									type="button"
									className="p-1 rounded-full text-black hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								>
									<span className="sr-only">View notifications</span>
									<ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
								</button>
							</div>
						</div>
						<div className="block py-4 overflow-x-auto">
							<div className="flex justify-start sm:justify-center gap-x-2 sm:gap-x-10 space-x-4">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current
												? 'bg-black text-white'
												: 'text-black bg-gray-300 hover:text-white',
											'px-8 py-2 rounded-md text-sm font-medium text-base'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};
export default Navbar;
