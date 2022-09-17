import styles from './UpgradeContainer.module.css';

export default function UpgradeContainer({children, title, titleBold}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title} <span>{titleBold}</span></p>
      <div className={styles.rollDown}>
        {children}
      </div>
    </div>
  );
}