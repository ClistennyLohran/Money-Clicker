import styles from './MelhoriaGerador.module.css';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';

import ValueFormatter from '../../../Formatter/ValueFormatter';
import MoneyDollarFormatter from '../../../Formatter/MoneyDollarFormatter';

import { motion } from 'framer-motion';

import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';

export default function MelhoriaGerador({ id, item, nome }) {
  
  const { level, dollarBalance, setDollarBalance, generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);
  const { setNotificationType } = useContext(ValuesContext);

  const increaseAmount = (array, index) => e => {
    if(item.quantidadeAtiva < item.quantidadeTotal) {
      let newArr = [...generalUpgrades[5]];
      newArr[index] = {
        id: array.id,
        valor: array.valor,
        quantidadeGerada: array.quantidadeGerada,
        quantidadeTotal: array.quantidadeTotal,
        quantidadeAtiva: array.quantidadeAtiva + 1,
        minLevelUnlock: array.minLevelUnlock,
      }

      setGeneralUpgrades({...generalUpgrades, 5: newArr});
    }

    if(item.quantidadeAtiva >= item.quantidadeTotal) {
      if(item.valor <= dollarBalance) {
        setDollarBalance(dollarBalance - item.valor);
        let newArr = [...generalUpgrades[5]];
        newArr[index] = {
          id: array.id,
          valor: array.valor * 1.19,
          quantidadeGerada: array.quantidadeGerada,
          quantidadeTotal: array.quantidadeTotal + 1,
          quantidadeAtiva: array.quantidadeAtiva + 1,
          minLevelUnlock: array.minLevelUnlock,
        }

        setGeneralUpgrades({...generalUpgrades, 5: newArr});
      }else {
        setNotificationType(1);
      }
    }
  }

  const decreaseAmount = (array, index) => e => {
    if(item.quantidadeAtiva > 0) {
      let newArr = [...generalUpgrades[5]];
      newArr[index] = {
        id: array.id,
        valor: array.valor,
        quantidadeGerada: array.quantidadeGerada,
        quantidadeTotal: array.quantidadeTotal,
        quantidadeAtiva: array.quantidadeAtiva - 1,
        minLevelUnlock: array.minLevelUnlock,
      }
  
      setGeneralUpgrades({...generalUpgrades, 5: newArr});
    }
  }

  const stopAllProduction = (array, index) => e => {
    if(item.quantidadeAtiva > 0) {
      let newArr = [...generalUpgrades[5]];
      newArr[index] = {
        id: array.id,
        valor: array.valor,
        quantidadeGerada: array.quantidadeGerada,
        quantidadeTotal: array.quantidadeTotal,
        quantidadeAtiva: array.quantidadeAtiva - array.quantidadeAtiva,
        minLevelUnlock: array.minLevelUnlock,
      }
  
      setGeneralUpgrades({...generalUpgrades, 5: newArr});
    }
  }

  return (
    <div className={level >= item.minLevelUnlock ? styles.container : styles.containerLocked}>
      <div className={styles.lockedContainer}>
        <p className={styles.lockedText}>{<BsFillShieldLockFill/>}&nbsp;BLOQUEADO&nbsp;{<BsFillShieldLockFill/>}</p>
        <p className={styles.lockedLevel}><span>NÍVEL NECESSÁRIO:</span> {item.minLevelUnlock}</p>
      </div>
      <div className={styles.amountControl}>
        <p className={styles.titleQtd}>QUANTIDADE</p>
        <div className={styles.amountContainer}>
          <p>{item.quantidadeAtiva}</p>
        </div>
        <div className={styles.amountControlGrid}>
          <motion.button className={`${styles.button} ${styles.plus}`} onClick={increaseAmount(item, item.id)} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} >{<FaPlus/>}</motion.button>
          <motion.button className={`${styles.button} ${styles.minus}`} onClick={decreaseAmount(item, item.id)} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} >{<FaMinus/>}</motion.button>
        </div>
        <motion.button 
          className={styles.stopProduction}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={stopAllProduction(item, item.id)}
        >
          PARAR
        </motion.button>
      </div>
      <p className={`${styles.text} ${styles.title}`}><span className={styles.bold}>{nome.GeradoresEnergiaDataList[nome.GeradoresEnergiaDataList.findIndex(x => x.id === id)].nome.toUpperCase()}</span></p>
      <p className={styles.text}>Valor: <span className={styles.bold}>{MoneyDollarFormatter(item.valor)}</span></p>
      <p className={styles.text}>Quantidade Gerada: <span className={styles.bold}>{ValueFormatter(item.quantidadeGerada)} W</span></p>
      <p className={styles.totais}>TOTAIS</p>
      <p className={styles.text}>Total Gerado: <span className={styles.bold}>{ValueFormatter(item.quantidadeGerada * item.quantidadeAtiva)} W</span></p>
      <p className={styles.text}>Total Comprado: <span className={styles.bold}>{item.quantidadeTotal}</span></p>
    </div>
  );
}