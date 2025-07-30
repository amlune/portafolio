import React from 'react'
import styles from '#/header.module.css';

interface NavBarHamburgerProps {
  hamburgerOpen: boolean;
}

function NavBarHamburger({ hamburgerOpen }: NavBarHamburgerProps) {
  return (
    <>
      <div className={styles.hamburger}>
        <div className={`${styles.burger} ${hamburgerOpen ? styles.burgerOpen1 : ''}`}/>
        <div className={`${styles.burger} ${hamburgerOpen ? styles.burgerOpen2 : ''}`}/>
        <div className={`${styles.burger} ${hamburgerOpen ? styles.burgerOpen3 : ''}`}/>
      </div>
    </>
  )
}

export default NavBarHamburger
