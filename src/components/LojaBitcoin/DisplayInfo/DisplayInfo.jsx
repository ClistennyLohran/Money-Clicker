import styles from './DisplayInfo.module.css';

import PoderMineracaoFormatter from '../../../Formatter/PoderMineracaoFormatter';
import ValueFormatter from '../../../Formatter/ValueFormatter';
import AnimatedNumber from '../../../AnimatedNumber/AnimatedNumber';

export default function DisplayInfo({ icon, title, value, value2, twoValues, formatter, middle, dataTip }) {
  
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
  
  return (
    <div className={!middle ? styles.container : styles.containerMiddle}>
      <div data-tip={dataTip} className={styles.iconContainer}>
        <p className={styles.icon}>{icon}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title}</p>
        {!twoValues ? <p className={styles.value}><AnimatedNumber value={value} formatValue={v => valueFormatter(v)}/></p> : <p className={styles.value}><AnimatedNumber value={value} formatValue={v => valueFormatter(v)}/> / <AnimatedNumber value={value2} formatValue={v => valueFormatter(v)}/></p>}
      </div>
    </div>
  );
}