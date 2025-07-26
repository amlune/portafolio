import React from 'react'
import Image from 'next/image'
import styles from '../styles/about_me.module.css'

export default function AboutMe() {
  return (
    <div className={styles.aboutMeSection}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Sobre mí</p>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare et libero ac scelerisque. Donec semper dui in vestibulum faucibus. Etiam tempor mattis lacus, eget vehicula enim viverra vitae. In non urna tellus. Quisque sapien ipsum, finibus ut scelerisque vitae, feugiat non lorem. Praesent maximus massa et mattis aliquet.
        </p>
        <p className={styles.description}>
          Aenean vel lorem nec dolor ullamcorper scelerisque. Nam ultrices nulla sit amet blandit porttitor. Duis mattis est neque, vel facilisis diam porta eu. Pellentesque id dolor vel sapien pellentesque tincidunt vel a neque. In vel lorem odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id dui at mauris facilisis porttitor eget commodo libero. Donec quis feugiat orci.
        </p>
      </div>
      <Image
        className={styles.profileImage}
        src="/logo/me.jpeg"
        alt="Profile"
        width={200}
        height={200}
        priority
      />
    </div>
  )
}
