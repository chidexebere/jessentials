import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

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
			<Navbar />
			<main className="px-4 my-10 sm:px-8 sm:my-12 lg:px-14">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
