import styles from './DisplayLeft.module.css';

import AnimatedNumber from '../../../AnimatedNumber/AnimatedNumber';
import MoneyDollarFormatter from '../../../Formatter/MoneyDollarFormatter';
import ValueFormatter from '../../../Formatter/ValueFormatter';

import { motion } from 'framer-motion';

export default function DisplayLeft({ dataTip, icon, title, value, formatter, position, convertIcon, converterStatus, buttonFunction }) {
  const setContainer = () => {
    switch(position) {
      case 1:
        return styles.container;
      case 2:
        return styles.insideContainer;
      default:
        return styles.container;
    }
  }

  const valueFormatter = (value) => {
    switch(formatter) {
      case 1:
        return value.toFixed(8) + " BTC";
      case 2:
        return ValueFormatter(value) + " W";
      case 3:
        return MoneyDollarFormatter(value);
      default:
        return value + " SEM FORMATAÇÃO";
    }
  }

  const convertButton = <motion.button data-tip="Converte todos os seus Bitcoins para dólares" className={styles.convertButton} onClick={buttonFunction} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}}>{convertIcon}</motion.button>;

  return (
    <div className={setContainer()}>
      <div data-tip={dataTip} className={styles.iconContainer}>
        <p className={styles.icon}>{icon}</p>
      </div>
      <div className={styles.displayContent}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}><AnimatedNumber value={value} formatValue={v => valueFormatter(v)}/></p>
        {converterStatus ? convertButton : <></>}
      </div>
    </div>
  );
}