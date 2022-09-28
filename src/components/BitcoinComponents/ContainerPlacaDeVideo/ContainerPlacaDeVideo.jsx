import styles from './ContainerPlacaDeVideo.module.css';

import { IoHardwareChipSharp } from 'react-icons/io5';

export default function ContainerPlacaDeVideo( {children} ) {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p className={styles.title}>{<IoHardwareChipSharp/>}&nbsp;PLACAS DE VÍDEO&nbsp;{<IoHardwareChipSharp/>}</p>
      </div>
      <div className={styles.containerPlacasDeVideo}>
        {children}
      </div>
    </div>
  );
}