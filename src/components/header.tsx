import React from 'react'
import Image from 'next/image'
import styles from '#/header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Image src={"/logo/logoanam.png"} alt="Logo Ana" width={60} height={60} className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>Experencias</li>
          <li className={styles.navItem}>Habilidades</li>
          <li className={styles.navItem}>Sobre mí</li>
          <li className={styles.navItem}>Proyectos</li>
          <li className={styles.navItem}>Conctátame</li>
        </ul>
        <Image src={"/icons/moon.svg"} alt="Sun" width={30} height={30} className={styles.mode}/>
      </nav>
    </header>
  )
}

export default Header