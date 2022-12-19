import styles from './DisplayBonus.module.css';

export default function DisplayBonus({ icon, title, middle, value, dataTip }) {
  
  const spacingMiddle = () => {
    switch(middle) {
      case true:
        return styles.containerMiddle;
      case false:
        return styles.container;
    }
  }
  
  return (
    <div className={styles.generalContainer}>
      <div className={spacingMiddle()}>
        <div data-tip={dataTip} className={styles.iconContainer}>
          <p className={styles.icon}>{icon}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>{title}</p>
        </div>
      </div>
      <div className={styles.displayValue}>
        <p className={styles.value}>{value}%</p>
      </div>
    </div>
  );
}