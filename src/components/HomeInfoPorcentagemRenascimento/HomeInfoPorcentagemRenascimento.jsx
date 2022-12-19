import styles from './HomeInfoPorcentagemRenascimento.module.css';

export default function HomeInfoPorcentagemRenascimento({ icon, title, value }) {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
      <div className={styles.iconContainer}>
        <p className={styles.icon}>{icon}</p>
      </div>
    </div>
  );
}