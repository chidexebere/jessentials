'use client';

import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Header = dynamic(() => import('../components/Header'), {
	ssr: false,
});

interface Props {
	children: React.ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
	return (
		<div className="bg-neutral-100">
			<Header />
			<main className="mt-6 mx-auto px-12 mb-10 sm:px-8 sm:my-12 lg:px-14 xl:w-[80rem] min-h-[calc(100vh-320px)]">
				<Toaster />
				{children}
			</main>

			<Footer />
		</div>
	);
};

export default Layout;
