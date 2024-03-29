import styles from './HomeInfoPorcentagem.module.css';

export default function HomeInfoPorcentagem({ icon, title, value, dataTip }) {
  return (
    <div className={styles.container}>
      <div data-tip={dataTip} className={styles.iconContainer}>
        <p className={styles.icon}>{icon}</p>
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
}