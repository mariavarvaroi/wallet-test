import { Web3Modal } from "@web3modal/react"
import { WALLETCONNECT_PROJECT_KEY, client } from "@/web3/connection";

const CustomWeb3Modal = () => {
    return (
        <Web3Modal
            projectId={WALLETCONNECT_PROJECT_KEY}
            ethereumClient={client}
            enableNetworkView
            explorerExcludedWalletIds={"ALL"}
            explorerRecommendedWalletIds={[
                // wallet ids from wallet connect (https://walletconnect.com/explorer).
                "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // metamask
                "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927", // legder live
                "5864e2ced7c293ed18ac35e0db085c09ed567d67346ccb6f58a0327a75137489" // fireblocks 
            ]}
        />
    );
};

export default CustomWeb3Modal;
