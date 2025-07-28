import React from 'react';
import Image from 'next/image';
import styles from '#/projects.module.css';
import projectsData from '@/data/projects-data.json';

interface ProjectData {
  title: string;
  languages: Array<{ icon1?: string; icon2?: string; icon3?: string; icon4?: string; icon5?: string; icon6?: string; icon7?: string; icon8?: string; icon9?: string; icon10?: string }>;
  description: string;
  url?: string;
  repository?: string;
  image: string;
}

function Projects() {
  return (
    <div className={styles.projectSection} id='projects'>
      <p className={styles.titleSection}>Proyectos</p>
      <div className={styles.projectList}>
        {projectsData.projects.map((project: ProjectData, index: number) => {
          return (
            <div key={index} className={styles.projectCard}>
              <Image
                src={project.image}
                alt={`Imagen del proyecto ${project.title}`}
                width={450}
                height={253}
                className={styles.projectImage}
              />
              <div className={styles.projectDetails}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.projectLanguagesContainer}>
                  {project.languages.map((lang, i) => {
                    const iconKey = `icon${i + 1}` as keyof typeof lang;
                    const iconSrc = lang[iconKey];
                    return iconSrc ? (
                      <Image
                        key={i}
                        src={iconSrc}
                        alt={`Icon ${i + 1}`}
                        width={30}
                        height={30}
                        className={styles.projectLanguagesIcon}
                      />
                    ) : null;
                  })}
                </div>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectLinks}>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      URL
                    </a>
                  )}
                  {project.repository && (
                    <a href={project.repository} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Repositorio
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects;
