import React from 'react'
import Image from 'next/image'
import styles from '#/contactme.module.css'
import info from '@/data/contactme-data.json'

interface ContactItem {
  iconSrc: string;
  altText: string;
  info: string;
}

export default function ContactMe() {
  return (
    <div className={styles.contactMeSection}>
      <p className={styles.title}>Contáctame</p>
      <div className={styles.contactMeContent}>
        <div className={styles.contactText}>
          <p className={styles.contactDescription}>La mejor tecnología nace del trabajo en equipo. Si estás buscando una mente tech aliada, ¡escríbeme! 🧸</p>
          {info.info.map((item: ContactItem, index: number) => (
            <div key={index} className={styles.contactItem}>
              <Image
                className={styles.contactIcon}
                src={item.iconSrc}
                alt={item.altText}
                width={26}
                height={26}
              />
              <span className={styles.contactInfo}>{item.info}</span>
            </div>
          ))}
          <button className={styles.contactButton}>CV</button>
        </div>
        <Image
          className={styles.contactImage}
          src="/logo/anam.png"
          alt="Animación Ana"
          width={380}
          height={380}
          priority
        />
      </div>
    </div>
  )
}
