import React from 'react';
import styles from '#/ability.module.css';
import abilityData from '@/data/abilities-data.json';

interface AbilityType {
  imageSrc: string;
  name: string;
}

function Ability() {
  return (
    <div className={styles.abilitySection} id='skills'>
      <p className={styles.titleSection}>Habilidades</p>
      <div className={styles.abilityContainer}>
        {abilityData.abilities.map((ability: AbilityType, index: number) => (
          <div key={index} className={styles.ability}>
            <img src={ability.imageSrc} alt={ability.name} width={60} height={60} className={styles.iconAbility}/>
            <p className={styles.abilityName}>{ability.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ability;
