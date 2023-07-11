import React from 'react'
import  styles  from '../styles/Home.module.css'
import Link from 'next/link'
import { ConnectWallet, useAddress } from '@thirdweb-dev/react'
import router from 'next/router'

const Navbar = () => {
    const address = useAddress();
  return (
    <div className={styles.navbar}>
    <Link href="/">
      <h3 className={`${styles.yellowText} ${styles.navLink}`}>Le Tour NFTs</h3>
    </Link>
    <button
      className={`${styles.yellowText} ${styles.buttonLink}`}
      onClick={() => router.push(`/profile/${address}`)}
    >
      My NFTs
    </button>
    <ConnectWallet />
  </div>
  


  )
}

export default Navbar