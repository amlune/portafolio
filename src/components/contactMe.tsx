import React from 'react';
import Image from 'next/image';
import { MailIcon, PhoneIcon, LinkedInIcon } from './contactIcons';
import styles from '#/contactMe.module.css';
import info from '@/data/contactme-data.json';

interface ContactItem {
  iconType: string;
  altText: string;
  info: string;
  url: string;
}

const iconMap = {
  mail: MailIcon,
  phone: PhoneIcon,
  linkedin: LinkedInIcon
}

function ContactMe() {
  const renderIcon = (iconType: string) => {
    const IconComponent = iconMap[iconType as keyof typeof iconMap];
    return IconComponent ? <IconComponent /> : null;
  }

  return (
    <div className={styles.contactMeSection} id='contactme'>
      <p className={styles.titleSection}>Contáctame</p>
      <div className={styles.contactMeContent}>
        <div className={styles.contactTextContainer}>
          <p className={styles.contactDescription}>La mejor tecnología nace del trabajo en equipo. Si estás buscando una mente tech aliada, ¡escríbeme! 🧸</p>
          {info.info.map((contact: ContactItem, index: number) => (
            <div key={index} className={styles.contactItem}>
              <div className={styles.contactIcon}>
                {renderIcon(contact.iconType)}
              </div>
              <span className={styles.contactInfo}><a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.info}</a></span>
            </div>
          ))}
  {/*         <button className={styles.contactButton}>CV</button> */}
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

export default ContactMe;
