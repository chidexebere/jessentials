import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AppContextProvider from '../state/context/appContext';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Layout>
				<Toaster />
				<Component {...pageProps} />
			</Layout>
		</AppContextProvider>
	);
}

export default MyApp;
