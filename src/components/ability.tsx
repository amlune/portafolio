import React from 'react';
import styles from '#/ability.module.css';
import abilityData from '@/data/abilities-data.json';

interface AbilityType {
  imageSrc: string;
  name: string;
}

export default function Ability() {
  return (
    <div className={styles.abilitySection}>
      <p className={styles.title}>Habilidades</p>
      <div className={styles.abilityContainer}>
        {abilityData.abilities.map((ability: AbilityType, index: number) => (
          <div key={index} className={styles.ability}>
            <img src={ability.imageSrc} alt={ability.name} width={60} height={60} />
            <p className={styles.abilityName}>{ability.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
