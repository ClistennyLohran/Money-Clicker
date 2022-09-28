import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import styles from './DisplayDinheiroReais.module.css';

import { GiMoneyStack } from 'react-icons/gi';

import AnimatedNumber from 'animated-number-react';
import MoneyFormatter from '../../Formatter/MoneyFormatter';

export default function BalanceDisplay() {
  const { balance } = useContext(ValuesContext);
  
  return (
    <div className={styles.balanceContainer}>
      <p className={styles.balanceTitle}>{<GiMoneyStack/>}&nbsp;<span>DINHEIRO</span>&nbsp;{<GiMoneyStack/>}</p>
      {/* <p className={styles.balanceValue}>{MoneyFormatter(balance)}</p> */}
      <div className={styles.balanceValue}>
        <AnimatedNumber
          value={balance}
          formatValue={v => MoneyFormatter(v)}
          duration={200}
        />
      </div>
    </div>
  );
}