import styles from './SpecialUpgrades.module.css';

export default function SpecialUpgrades({ children, title, boldTitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.text}>{title} <span className={styles.textBold}>{boldTitle}</span></p>
      </div>
      <div className={styles.upgradesContainer}>
        {children}
      </div>
    </div>
  );
}