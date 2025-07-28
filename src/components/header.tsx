'use client';

import React from 'react';
import Image from 'next/image';
import styles from '#/header.module.css';
import { useDarkMode } from '@/hooks/useDarkMode';

function Header() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <header className={styles.header}>
      <Image src={"/logo/logoanam.png"} alt="Logo Ana" width={60} height={60} className={styles.logo} />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href='#experience'>Experencias </a></li>
          <li className={styles.navItem}><a href='#skills'>Habilidades</a></li>
          <li className={styles.navItem}><a href='#projects'>Proyectos</a></li>
          <li className={styles.navItem}><a href='#aboutme'>Sobre mí</a></li>
          <li className={styles.navItem}><a href='#contactme'>Conctátame</a></li>
          <button onClick={toggleTheme} className={styles.buttonToggleTheme}>
            {theme === 'light' ?
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                <path d="M8.81261 4.96846C8.81261 10.6123 13.3877 15.1874 19.0315 15.1874C20.064 15.1874 21.0605 15.0347 22 14.7499C20.7282 18.946 16.8303 21.9999 12.2189 21.9999C6.57517 21.9999 2 17.425 2 11.7812C2 7.16987 5.0544 3.27193 9.25044 2.00014C8.96571 2.93956 8.81261 3.93605 8.81261 4.96846Z" stroke="#191919" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.icon}>
                <path d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#F9F9F9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>}
          </button>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
