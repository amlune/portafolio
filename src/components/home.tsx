import React from 'react'
import Image from 'next/image'
import styles from '#/home.module.css'

function HomeC() {
  return (
    <div className={styles.home}>
      <div className={styles.logoContainer}>
        <Image src={"/logo/anam1.png"} alt="Logo Ana" width={407} height={407} className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.scroll}>
          <div className={styles.scrollAnimation}>
            <p className={`${styles.scrollText} ${styles.scrollTextColor1}`}>Software Developer ❀︎</p>
            <p className={`${styles.scrollText} ${styles.scrollTextColor2}`}>Software Developer ❀︎</p>
            <p className={`${styles.scrollText} ${styles.scrollTextColor1}`}>Software Developer ❀︎</p>
          </div>
        </div>

        <p className={styles.description}>Desarrolladora de software con experiencia en desarrollo full-stack, mobile y gestión de proyectos. He trabajado en lenguajes como Javascript, TypeScript y Python, usando frameworks como React.js, Next.js, React Native, Node.js para construir aplicaciones funcionales y escalables. También tengo experiencia en diseño y mantenimiento en bases de datos como MySQL y MariaDB.</p>

        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/anam-vamaya" target="_blank" rel="noopener noreferrer">
            <Image src={"/icons/linkedin.svg"} alt="LinkedIn" width={35} height={35} className={styles.icon} />
          </a>
          <a href="https://github.com/amlune" target="_blank" rel="noopener noreferrer">
            <Image src={"/icons/github.svg"} alt="GitHub" width={35} height={35} className={styles.icon} />
          </a>
          <a href="/pdf/Ana María Vargas Amaya – Software Developer – Español.pdf" download>
            <Image src={"/icons/download.svg"} alt="Download" width={35} height={35} className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeC