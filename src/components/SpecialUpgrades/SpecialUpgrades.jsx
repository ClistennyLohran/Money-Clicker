import styles from './SpecialUpgrades.module.css';

export default function SpecialUpgrades({ children, title, icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.text}>{icon}&nbsp;<span className={styles.textBold}>{title}</span>&nbsp;{icon}</p>
      </div>
      <div className={styles.upgradesContainer}>
        {children}
      </div>
    </div>
  );
}