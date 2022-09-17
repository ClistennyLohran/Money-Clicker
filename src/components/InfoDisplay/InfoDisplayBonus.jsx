import styles from './InfoDisplayBonus.module.css';

export default function InfoDisplayBonus({ datatip, title, titleBold, value, icon, tooltipIcon }) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {icon}
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