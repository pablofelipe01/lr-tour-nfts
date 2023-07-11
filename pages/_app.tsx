import type { AppProps } from "next/app";

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  paperWallet,
} from "@thirdweb-dev/react";

import "../styles/globals.css";
import Navbar from "../components/Navbar";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "polygon";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
    
          activeChain={activeChain}
          supportedWallets={[ 
            paperWallet ({clientId: '70a6b02d-c10d-45e8-bf62-d14b106473b0'}),
           
          ]}
          
    >
        <Navbar />  
    
    
    
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
