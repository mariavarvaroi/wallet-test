// make a simple page
import { useWeb3Modal } from "@web3modal/react";
import React from "react"
import { useAccount } from "wagmi";

const Home = () => {
    const { address, isConnected } = useAccount();
    const { open, isOpen } = useWeb3Modal();

    const handleClick = React.useCallback(async () => {
        open();
    }, [open]);

    return (
        <div>
            <h1>Wagmi test</h1>
            <button
                className={`btn whitespace-nowrap ${address ? "bg-opus-teal" : "bg-black"
                    }`}
                disabled={isOpen}
                onClick={handleClick}
            >
                {isConnected ? (
                    <span id="account-info">{address}</span>
                ) : (
                    <span id="connect-wallet">Connect wallet</span>
                )}
            </button>
        </div>
    )
}

export default Home