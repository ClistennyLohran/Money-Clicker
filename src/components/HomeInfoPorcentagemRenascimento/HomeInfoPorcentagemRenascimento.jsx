import styles from './HomeInfoPorcentagemRenascimento.module.css';

export default function HomeInfoPorcentagemRenascimento({ icon, title, value, dataTip }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
      <div data-tip={dataTip} className={styles.iconContainer}>
        <p className={styles.icon}>{icon}</p>
      </div>
    </div>
  );
}