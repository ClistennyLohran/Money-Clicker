import styles from './InfoDisplayBitcoin.module.css';

import { FaQuestion } from 'react-icons/fa';

/* Tooltip */
import ReactTooltip from 'react-tooltip';

export default function InfoDisplayBitcoin({ title, value, icon, dataTip }) {
  return (
    <div className={styles.container}>
      <ReactTooltip 
        place="top"
        multiline={true}
      />
      <div data-tip={dataTip} className={styles.tooltip}>
        <p>{<FaQuestion/>}</p>
      </div>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.valuesContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
}