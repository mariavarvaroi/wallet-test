

import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import CustomWeb3Modal from "src/components/web3modal";
import { config } from "src/web3/connection";
import { WagmiConfig } from "wagmi";

function MyApp({ Component, pageProps }: AppProps) {

    const queryClient = new QueryClient();

    return (
        <WagmiConfig config={config}>
            <QueryClientProvider client={queryClient}>
                <Component {...pageProps} />
                <CustomWeb3Modal />
            </QueryClientProvider>
        </WagmiConfig>
    );
}

export default MyApp;
