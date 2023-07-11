import { ConnectWallet, ThirdwebNftMedia, useContract, useNFTs } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
    const { 
      contract
    } = useContract('0xf4482A16e35B60115beE56DECE25F35b3A209cDD', 'edition-drop')

    const { 
      data: nfts,
      isLoading: nftsLoading,
    } = useNFTs(contract);


  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <div className={styles.header}>
  <h1 className={styles.title}>
    Welcome to{" "}
    <span className={styles.gradientText0}>
      <a
        href="https://www.toksol.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Tok Sol.
      </a>
    </span>
  </h1>
</div>

        <div className={styles.grid}>
          <a
            href="/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/image1.png"
              alt="Placeholder preview of starter"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText1}>Le Tour NFTs</h2>
              <p>
              Purchase delightful Tour de France-themed Pixar characters hassle-free by using your email account and credit card—no cryptocurrency required!
              </p>
            </div>
          </a>

        
        </div>
        <br />
        {!nftsLoading && nfts && (
            <div className={styles.grid}>
              {nfts.map((nft) => (
                <Link
                key={nft.metadata.id}
                href={`/artwork/${nft.metadata.id}`}
                >
                  <div className={styles.card}>
                    <ThirdwebNftMedia 
                      metadata={nft.metadata}
                      />
                      <div className={styles.cardText}>
                      <h2 className={styles.gradientText1}>{nft.metadata.name}</h2>

                      </div>
                    

                  </div>
                </Link>
              ))}
                
                
                

            </div>
        )}
      </div>
    </main>
  );
};

export default Home;
