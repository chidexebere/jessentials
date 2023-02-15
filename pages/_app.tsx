import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import AppContextProvider from '../state/context/appContext';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<AppContextProvider>
			<Layout>
				<Toaster />
				<QueryClientProvider client={queryClient}>
					<Hydrate state={pageProps.dehydratedState}>
						<Component {...pageProps} />
					</Hydrate>
				</QueryClientProvider>
			</Layout>
		</AppContextProvider>
	);
}

export default MyApp;
