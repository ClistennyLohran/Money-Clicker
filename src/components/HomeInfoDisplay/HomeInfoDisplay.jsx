import styles from './HomeInfoDisplay.module.css';

import MoneyFormatter from '../../Formatter/MoneyFormatter';

export default function HomeInfoDisplay({ icon, valueLeft, titleLeft, valueRight, titleRight, formatter, dataTip }) {
  const valueFormatterLeft = (value) => {
    switch (formatter) {
      case 1:
        return MoneyFormatter(value);
      case 2:
        return "XP " + value;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.showInfoLeft}>
        <p className={styles.title}>{titleLeft}</p>
        <p className={styles.value}>{valueFormatterLeft(valueLeft)}</p>
      </div>
      <div className={styles.iconInnerContainer}>
        <p data-tip={dataTip} className={styles.icon}>{icon}</p>
      </div>
      <div className={styles.showInfoRight}>
        <p className={styles.title}>{titleRight}</p>
        <p className={styles.value}>{valueRight}x</p>
      </div>
    </div>
  );
}