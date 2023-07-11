import React from 'react'
import styles from "../../styles/Home.module.css";
import { useRouter } from 'next/router';
import { ThirdwebNftMedia, useAddress, useContract, useDisconnect, useOwnedNFTs } from '@thirdweb-dev/react';

const Profile = () => {
    const router = useRouter();
    const address = useAddress();
    const disconnect = useDisconnect();

    const { 
        contract
      } = useContract('0xf4482A16e35B60115beE56DECE25F35b3A209cDD', 'edition-drop');

    const { 
        data: ownedNfts,
        isLoading: ownedNftsLoading,
      } = useOwnedNFTs(contract, address);

    const signout = () => {
        disconnect();
        router.push('/')
    }  

  return (
    <div className={styles.container}>

        <h1>Profile</h1>
        <button className={styles.signOutButton} onClick={signout}>
            Sign Out
        </button>

        <h3>Your Collectibles</h3>
            {!ownedNftsLoading && ownedNfts ? (
                ownedNfts.length > 0 ? (
                    ownedNfts.map((nft) => (
                        <div className={styles.card} key={nft.metadata.id}>
                            <ThirdwebNftMedia 
                                metadata={nft.metadata}
                            />
                            <div className={styles.cardText}>
                                <h2 className={styles.gradientText1}>{nft.metadata.name}</h2>
                                <h3>QTY: {nft.quantityOwned} </h3>
                            </div>


                        </div>
                    ))
                ) : (
                    <p>You don`t own any NFTs</p>
                    )
                ) : (
                    <p>Loading...</p>

                
            )}



    </div>
  )
}

export default Profile