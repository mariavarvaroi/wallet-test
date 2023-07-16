// WC STUFF
import { PstlWeb3ModalProps } from "@past3lle/web3-modal";
import { goerli, mainnet } from "viem/chains";
import theme, { PALETTE } from './theme'
import { WALLETCONNECT_CONFIG } from "./config/walletconnect";
import { ROOT_CONFIG } from "./config/root";
import { CONNECTORS_CONFIG } from "./config/connectors";
import { Chain } from "@wagmi/core"

const privatenet: Chain = {
    id: 4242,
    network: "minimal",
    name: "Hopper privatenet",
    nativeCurrency: { name: "Hopper Ether", symbol: "ETH", decimals: 18 },
    rpcUrls: {
        default: {
            http: ["http://localhost:8545"],
        },
        public: {
            http: ["http://localhost:8545"],
        },
        privatenet: {
            http: ["http://localhost:8545"],
        },
    },
    contracts: {},
    testnet: true,
};

export type SupportedChainIds = 1 | 5 | 4242;
const availableChains = [mainnet, goerli, privatenet];

export const pstlModalConfig: PstlWeb3ModalProps<1 | 5 | 4242> = {
    appName: 'CHORUS MODAL TEST',
    chains: availableChains,
    connectors: CONNECTORS_CONFIG,
    modals: {
        root: ROOT_CONFIG,
        walletConnect: WALLETCONNECT_CONFIG
    },
}
