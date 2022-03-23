import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

const Layout: NextPage = ({ children }) => {
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
			<Header />
			<main className="relative top-44 px-4 mb-10 sm:top-32 sm:px-8 sm:my-12 lg:px-14">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
