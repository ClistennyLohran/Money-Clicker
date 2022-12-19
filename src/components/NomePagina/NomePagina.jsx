import styles from './NomePagina.module.css';

export default function NomePagina({ icon, name }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{icon}&nbsp;{name}&nbsp;{icon}</p>
    </div>
  );
}