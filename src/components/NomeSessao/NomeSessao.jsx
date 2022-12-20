import styles from './NomeSessao.module.css';

export default function NomeSessao({ icon, title, marginTop }) {
  return (
    <div className={marginTop ? styles.containerMarginTop : styles.container}>
      <p className={styles.title}>{icon}&nbsp;{title}&nbsp;{icon}</p>
    </div>
  );
}