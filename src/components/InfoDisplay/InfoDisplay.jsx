import styles from './InfoDisplay.module.css';

export default function InfoDisplay({ datatip, tooltipIcon, title, titleBold, value, icon }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <p>{icon}</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.title}>{title} <span>{titleBold}</span></p>
        <p className={styles.value}>{value}</p>
      </div>
      <div data-tip={datatip} className={styles.tooltip}>
        {tooltipIcon}
      </div>
    </div>
  );
}