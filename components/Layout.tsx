import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import cn from 'classnames';
import Footer from './Footer';
import Header from './Header';

interface Props {
	children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
	const [isNavAdded, setIsNavAdded] = useState(false);

	const handleNavAdded = (value: boolean) => {
		setIsNavAdded(value);
	};

	return (
		<div className="bg-neutral-100">
			<Head>
				<title>Jessentials</title>
				<meta
					name="description"
					content="Home page of jessentials eCommerce website"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header handleNavAdded={handleNavAdded} />
			<main className="mt-6 mx-auto px-12 mb-10 sm:px-8 sm:my-12 lg:px-14 xl:w-[80rem]">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
