import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import cn from 'classnames';
import Footer from './Footer';
import Header from './Header';

const Layout: NextPage = ({ children }) => {
	const [isNavAdded, setIsNavAdded] = useState(false);

	const handleNavAdded = (value: boolean) => {
		setIsNavAdded(value);
	};

	return (
		<div className="bg-neutral-100">
			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Home page of jessential eCommerce website"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header handleNavAdded={handleNavAdded} />
			<main
				className={cn(
					isNavAdded ? 'top-44 sm:top-32' : 'top-20 sm:top-16',
					'relative px-4 mb-10 sm:px-8 sm:my-12 lg:px-14'
				)}
			>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
