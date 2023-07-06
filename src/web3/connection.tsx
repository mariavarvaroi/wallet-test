// WC STUFF
import { EthereumClient, w3mConnectors, w3mProvider } from "@web3modal/ethereum";
import { goerli, mainnet } from "viem/chains";
import { configureChains, createConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";

// CONNECTION INFO
const WALLETCONNECT_PROJECT_KEY = "d2dca0cfaa13e8b4c340b762c05c3708";
const INFURA_API_KEY = "042244e0e3884dc2bcd8455f482aad04";

const availableChains = [mainnet, goerli];

const { publicClient } = configureChains(availableChains, [
    infuraProvider({ apiKey: INFURA_API_KEY }),
    w3mProvider({ projectId: WALLETCONNECT_PROJECT_KEY }),
]);

const connectors = w3mConnectors({
    projectId: WALLETCONNECT_PROJECT_KEY,
    chains: availableChains,
    // version: 2,
});

// Wagmi config
const config = createConfig({
    // autoConnect: true,
    connectors,
    publicClient,
});

const client = new EthereumClient(config, availableChains)

export { WALLETCONNECT_PROJECT_KEY, config, client };
