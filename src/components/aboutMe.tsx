import React from 'react';
import Image from 'next/image';
import styles from '../styles/aboutMe.module.css';

function AboutMe() {
  return (
    <div className={styles.aboutMeSection} id='aboutme'>
      <div className={styles.textContainer}>
        <p className={styles.titleSection}>Sobre mí</p>
        <p className={styles.description}>
          ¡Holaaa!, finalmente, me presento, soy Ana María Vargas Amaya, aunque me gusta más que digan Ana Amaya. Soy desarrolladora de software con un enfoque fullstack y mobile. Me fascina la técnología desde pequeña, como viste, mi stack es enfocado en el desarrollo web y móvil utilizando React, Nextjs, React Native y demás, pero siempre estoy abierta a aprender nuevas tecnologías y herramientas que me ayuden a mejorar mis habilidades y aportar más valor a los proyectos en los que participo.
        </p>
        <p className={styles.description}>
          Más allá del código, me encanta muchas más cosas, como la música, hace parte de mi vida, al menos una vez al día debo de escuchar música, uno de mis artistas favoritos es BTS, de hecho, en ellos me inspire para seguir mis sueños y nunca rendirme, y también en el diseño del sitio, otra artistas que me encanta es Karol G, ando encantada con su último álbum &quot;Tropicoqueta&quot;. También tengo hobbies como tejer, viajar, voluntariados, caminar, y como buena Tauro, me encata la buena comida y siempre voy a disfutar de un helado. 
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

export default AboutMe;
