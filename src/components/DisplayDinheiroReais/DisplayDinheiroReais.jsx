import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import styles from './DisplayDinheiroReais.module.css';

import { GiMoneyStack } from 'react-icons/gi';

import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';

import MoneyFormatter from '../../Formatter/MoneyFormatter';

export default function DisplayDinheiroReais() {
  const { balance } = useContext(ValuesContext);
  
  return (
    <div className={`${styles.infoContainer} ${styles.infoContainerMoney}`}>
      <div className={styles.iconContainer}>
        {<GiMoneyStack/>}
      </div>
      <div className={styles.valuesContainer}>
        <p className={styles.valueName}>DINHEIRO EM REAIS</p>
        <p className={styles.valueDisplay}>
          <AnimatedNumber 
            value={balance}
            formatValue={v => MoneyFormatter(v)}
          />
        </p>
      </div>
    </div>
  );
}