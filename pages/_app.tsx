import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AppContextProvider from '../state/context/appContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppContextProvider>
	);
}

export default MyApp;
