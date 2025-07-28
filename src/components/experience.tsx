import React from 'react';
import styles from '#/experience.module.css';
import experience from '@/data/experience-data.json';

interface ExperienceType {
  title: string;
  company: string;
  date: string;
  description: string;
  latest?: boolean;
}

function Experience() {
  return (
    <div className={styles.experienceSection} id='experience'>
      <p className={styles.titleSection}>Experiencia</p>
      <div className={styles.experienceList}>
        <ol className={styles.experienceItems}>
          {experience.experiences.map((exp: ExperienceType, index: number) => (
            <li key={index} className={styles.experienceItem}>
                <span className={styles.timelineCircle}></span>
                <p className={styles.experienceTitle}>{exp.title}</p>
                <p className={styles.experienceCompany}>{exp.company}</p>
                <time className={styles.experienceDate}>{exp.date}</time>
                <p className={styles.experienceDescription}>{exp.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default Experience;
