import styles from './UpgradeContainer.module.css';

export default function UpgradeContainer({children, title, icon}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{icon}&nbsp;<span>{title}</span>&nbsp;{icon}</p>
      <div className={styles.rollDown}>
        {children}
      </div>
    </div>
  );
}