import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import styles from './DisplayDinheiroDolares.module.css';

import { GiMoneyStack } from 'react-icons/gi';

import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';
import MoneyDollarFormatter from '../../Formatter/MoneyDollarFormatter';

export default function DisplayDinheiroReais() {
  const { dollarBalance } = useContext(ValuesContext);
  
  return (
    <div className={`${styles.infoContainer} ${styles.infoContainerMoney}`}>
      <div className={styles.iconContainer}>
        {<GiMoneyStack/>}
      </div>
      <div className={styles.valuesContainer}>
        <p className={styles.valueName}>DINHEIRO EM DÓLARES</p>
        <p className={styles.valueDisplay}>
          <AnimatedNumber
            value={dollarBalance}
            formatValue={v => MoneyDollarFormatter(v)}
            duration={200}
          />
        </p>
      </div>
    </div>
  );
}