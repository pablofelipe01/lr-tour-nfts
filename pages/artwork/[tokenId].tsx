import React, { useState } from 'react';
import styles from "../../styles/Home.module.css";
import { useRouter } from 'next/router';
import { ThirdwebNftMedia, useAddress, useContract, useNFT, usePaperWalletUserEmail } from '@thirdweb-dev/react';
import { CheckoutWithCard } from "@paperxyz/react-client-sdk";

const Artwork = () => {
  const router = useRouter();
  const { tokenId } = router.query;

  const address = useAddress();
  const email = usePaperWalletUserEmail();

  const { contract } = useContract('0xf4482A16e35B60115beE56DECE25F35b3A209cDD', 'edition-drop');

  const { data: nft, isLoading: nftLoading } = useNFT(contract, tokenId as string);

  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const handlePaymentSuccess = () => {
    setPaymentSuccessful(true);
  };

  return (
    <div className={styles.container}>
      {!nftLoading && nft ? (
        <div className={styles.card}>
          <ThirdwebNftMedia metadata={nft.metadata} height='100%' width='100%' />
          <div className={styles.cardText}>
            <h1>{nft.metadata.name}</h1>
            {address && email && tokenId ? (
              !paymentSuccessful ? (
                <div>
                  <CheckoutWithCard
                    configs={{
                      contractId: "eef8e664-dd99-4632-8d88-8f30681ff29f",
                      walletAddress: address,
                      contractArgs: {
                        'tokenId': tokenId,
                      },
                      email: email.data,
                    }}
                    onPaymentSuccess={handlePaymentSuccess}
                    options={{
                      colorBackground: '#fefae0',
                      colorPrimary: '#f4f6ee',
                      colorText: '#e5ebdd',
                      borderRadius: 6,
                      inputBackgroundColor: '#faedcd',
                      inputBorderColor: '#d4a373',
                    }}
                  />
                </div>
              ) : (
                <div>
                  <h2>Payment Successful</h2>
                  <p>Check your email for the download link</p>
                  <button onClick={() => router.push(`/profile/${address}`)}>
                    View Collectibles
                  </button>
                </div>
              )
            ) : (
              <p>Login with e-mail or Wallet to purchase this NFT</p>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Artwork;
