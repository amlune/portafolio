import React from 'react';
import Image from 'next/image';
import styles from '#/home.module.css';

function HomeC() {
  return (
    <div className={styles.homeSection}>
      <div className={styles.logoContainer}>
        <Image src={"/logo/anam1.png"} alt="Logo Ana" width={407} height={407} className={styles.img} />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={styles.icon}>
              <path fillRule="evenodd" clipRule="evenodd" d="M40 40H32V26.002C32 22.162 30.306 20.0195 27.268 20.0195C23.962 20.0195 22 22.252 22 26.002V40H14V14H22V16.9238C22 16.9238 24.51 12.5195 30.166 12.5195C35.824 12.5195 40 15.9722 40 23.1162V40ZM4.884 9.8418C2.186 9.8418 0 7.63792 0 4.91992C0 2.20392 2.186 0 4.884 0C7.58 0 9.76599 2.20392 9.76599 4.91992C9.76799 7.63792 7.58 9.8418 4.884 9.8418ZM0 40H10V14H0V40Z" />
            </svg>
          </a>
          <a href="https://github.com/amlune" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className={styles.icon}>
              <path fillRule="evenodd" clipRule="evenodd" d="M20 0C31.0459 0 39.9998 9.17985 39.9998 20.5058C39.9998 29.5638 34.2759 37.2479 26.3339 39.9619C25.3199 40.1639 24.96 39.5235 24.96 38.9775C24.96 38.3015 24.9839 36.0936 24.9839 33.3496C24.9839 31.4376 24.344 30.1897 23.626 29.5537C28.0799 29.0457 32.7599 27.3115 32.7599 19.4355C32.7599 17.1955 31.9839 15.3676 30.6999 13.9316C30.9079 13.4136 31.5939 11.3279 30.5039 8.5039C30.5039 8.5039 28.8279 7.95444 25.0099 10.6064C23.412 10.1524 21.7 9.924 20 9.916C18.3 9.924 16.59 10.1524 14.994 10.6064C11.172 7.95444 9.49206 8.5039 9.49206 8.5039C8.40607 11.3279 9.09206 13.4136 9.29806 13.9316C8.02007 15.3676 7.23808 17.1955 7.23808 19.4355C7.23808 27.2915 11.908 29.0523 16.35 29.5703C15.778 30.0823 15.26 30.9855 15.08 32.3115C13.94 32.8355 11.044 33.7424 9.26005 30.6084C9.26005 30.6084 8.20207 28.6381 6.19408 28.4941C6.19408 28.4941 4.24409 28.4682 6.05808 29.7402C6.05808 29.7402 7.36807 30.3702 8.27806 32.7402C8.27806 32.7402 9.45206 36.4001 15.016 35.1601C15.026 36.8741 15.044 38.4895 15.044 38.9775C15.044 39.5195 14.676 40.1538 13.678 39.9638C5.73008 37.2538 0.00012207 29.5658 0.00012207 20.5058C0.00012207 9.17985 8.95606 0 20 0Z" />
            </svg>
          </a>
          <a href="/pdf/Ana María Vargas Amaya – Software Developer – Español.pdf" download>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" className={styles.icon}>
              <path d="M26.1531 34.3877C25.8571 34.7115 25.4387 34.8958 25 34.8958C24.5612 34.8958 24.1429 34.7115 23.8468 34.3877L15.5135 25.2731C14.9312 24.6362 14.9754 23.6479 15.6123 23.0656C16.2492 22.4833 17.2375 22.5275 17.8198 23.1644L23.4375 29.3087V6.25C23.4375 5.38706 24.1371 4.6875 25 4.6875C25.8629 4.6875 26.5625 5.38706 26.5625 6.25V29.3087L32.1802 23.1644C32.7625 22.5275 33.7508 22.4833 34.3877 23.0656C35.0246 23.6479 35.0687 24.6362 34.4864 25.2731L26.1531 34.3877Z" strokeWidth="3" />
              <path d="M7.8125 31.25C7.8125 30.3871 7.11296 29.6875 6.25 29.6875C5.38706 29.6875 4.6875 30.3871 4.6875 31.25V31.3644C4.68746 34.2135 4.68742 36.51 4.93025 38.3162C5.18238 40.1915 5.72173 41.7702 6.97573 43.0242C8.22973 44.2783 9.80863 44.8177 11.6839 45.0698C13.49 45.3125 15.7865 45.3125 18.6357 45.3125H31.3644C34.2135 45.3125 36.51 45.3125 38.3162 45.0698C40.1915 44.8177 41.7702 44.2783 43.0244 43.0242C44.2783 41.7702 44.8177 40.1915 45.0698 38.3162C45.3125 36.51 45.3125 34.2135 45.3125 31.3644V31.25C45.3125 30.3871 44.6129 29.6875 43.75 29.6875C42.8871 29.6875 42.1875 30.3871 42.1875 31.25C42.1875 34.2404 42.1842 36.326 41.9727 37.8998C41.7671 39.4285 41.3912 40.2379 40.8146 40.8146C40.2379 41.3912 39.4285 41.7671 37.8998 41.9727C36.326 42.1842 34.2404 42.1875 31.25 42.1875H18.75C15.7596 42.1875 13.6739 42.1842 12.1003 41.9727C10.5716 41.7671 9.76202 41.3912 9.18544 40.8146C8.60885 40.2379 8.23292 39.4285 8.0274 37.8998C7.81581 36.326 7.8125 34.2404 7.8125 31.25Z" strokeWidth="3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default HomeC;