import CriptoDisplay from '../../components/CriptoDisplay/CriptoDisplay';

import { motion } from 'framer-motion';

import styles from './Criptos.module.css';

export default function Criptos() {
  return (
    <motion.div
      className={styles.center}
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <div className={styles.container}>
        <p className={styles.title}>Mineração de <span>Bitcoin</span></p>
        <CriptoDisplay/>
      </div>
    </motion.div>
  );
}