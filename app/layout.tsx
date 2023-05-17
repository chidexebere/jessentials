import { Metadata } from 'next';
import '../styles/globals.css';
import AppContextProvider from '../state/context/appContext';
import Layout from '../components/Layout';

export const metadata: Metadata = {
	title: 'Jessentials',
	description: 'Jessentials eCommerce website',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<AppContextProvider>
					<Layout>{children}</Layout>
				</AppContextProvider>
			</body>
		</html>
	);
}
