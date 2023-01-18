import styles from './DisplayInfo.module.css';

import PoderMineracaoFormatter from '../../../Formatter/PoderMineracaoFormatter';
import ValueFormatter from '../../../Formatter/ValueFormatter';
import AnimatedNumber from '../../../AnimatedNumber/AnimatedNumber';

import { useState, useEffect } from 'react';

export default function DisplayInfo({ tempAlert, tempAlertStatus, energyAlert, icon, title, value, value2, twoValues, formatter, middle, dataTip }) {
  const [ classTitle, setClassTitle ] = useState();
  const [ classValue, setClassValue ] = useState();

  const [ classTitleTemp, setClassTitleTemp ] = useState();
  const [ classValueTemp, setClassValueTemp ] = useState();
  
  const valueFormatter = (value) => {
    switch(formatter) {
      case 1:
        return ValueFormatter(value) + " W";
      case 2:
        return PoderMineracaoFormatter(value) + " MP/s";
      case 3:
        return value.toFixed(1) + " C°";
      default:
        return;
    }
  }

  useEffect(() => {
    const energyTitle = () => {
      if(energyAlert === 1) {
        return setClassTitle(styles.titleCritic);
      } else if(energyAlert === 2) {
        return setClassTitle(styles.titleAlert);
      } else {
        return setClassTitle(styles.title);
      }
    }
    energyTitle();

    const energyValue = () => {
      if(energyAlert === 1) {
        return setClassValue(styles.valueCritic);
      } else if(energyAlert === 2) {
        return setClassValue(styles.valueAlert);
      } else {
        return setClassValue(styles.value);
      }
    }
    energyValue();
  }, [energyAlert]);

  useEffect(() => {
    const tempTitle = () => {
      if(tempAlert === 1) {
        return setClassTitleTemp(styles.titleAlertTemp);
      } else if(tempAlert === 2) {
        return setClassTitleTemp(styles.titleCriticTemp);
      } else {
        return setClassTitleTemp(styles.titleTemp);
      }
    }
    tempTitle();

    const tempValue = () => {
      if(tempAlert === 1) {
        return setClassValueTemp(styles.valueAlertTemp);
      } else if(tempAlert === 2) {
        return setClassValueTemp(styles.valueCriticTemp);
      } else {
        return setClassValueTemp(styles.valueTemp);
      }
    }
    tempValue();
  }, [tempAlert]);
  
  return (
    <div className={!middle ? styles.container : styles.containerMiddle}>
      <div data-tip={dataTip} className={styles.iconContainer}>
        <p className={styles.icon}>{icon}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={tempAlertStatus ? classTitleTemp : classTitle}>{title}</p>
        {!twoValues ? <p className={tempAlertStatus ? classValueTemp : classValue}><AnimatedNumber value={value} formatValue={v => valueFormatter(v)}/></p> : <p className={tempAlertStatus ? classValueTemp : classValue}><AnimatedNumber value={value} formatValue={v => valueFormatter(v)}/> / <AnimatedNumber value={value2} formatValue={v => valueFormatter(v)}/></p>}
      </div>
    </div>
  );
}