import MoneyDollarFormatter from '../../../Formatter/MoneyDollarFormatter';
import styles from './MelhoriaRefrigeracao.module.css';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';

import ValueFormatter from '../../../Formatter/ValueFormatter';

import { motion } from 'framer-motion';

import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';

/* Audio Play */
import upgradeSong from '../../../songs/Melhoria.mp3';

export default function MelhoriaRefrigeracao({ id, item, nome }) {
  
  const { level, dollarBalance, setDollarBalance, generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);
  const { setNotificationType } = useContext(ValuesContext);

  const increaseAmount = (array, index) => e => {
    if(item.quantidadeAtiva < item.quantidadeTotal) {
      let newArr = [...generalUpgrades[6]];
      newArr[index] = {
        id: array.id,
        valor: array.valor,
        consumoEnergia: array.consumoEnergia,
        reducaoTemperatura: array.reducaoTemperatura,
        quantidadeTotal: array.quantidadeTotal,
        quantidadeAtiva: array.quantidadeAtiva + 1,
        minLevelUnlock: array.minLevelUnlock,
      }

      setGeneralUpgrades({...generalUpgrades, 6: newArr});
    }

    if(item.quantidadeAtiva >= item.quantidadeTotal) {
      if(item.valor <= dollarBalance) {
        let audio = new Audio(upgradeSong);
        audio.play();
        setDollarBalance(dollarBalance - item.valor);
        let newArr = [...generalUpgrades[6]];
        newArr[index] = {
          id: array.id,
          valor: array.valor * 1.14,
          consumoEnergia: array.consumoEnergia,
          reducaoTemperatura: array.reducaoTemperatura,
          quantidadeTotal: array.quantidadeTotal + 1,
          quantidadeAtiva: array.quantidadeAtiva + 1,
          minLevelUnlock: array.minLevelUnlock,
        }

        setGeneralUpgrades({...generalUpgrades, 6: newArr});
      }else {
        setNotificationType(1);
      }
    }
  }

  const decreaseAmount = (array, index) => e => {
    if(item.quantidadeAtiva > 0) {
      let newArr = [...generalUpgrades[6]];
      newArr[index] = {
        id: array.id,
        valor: array.valor,
        consumoEnergia: array.consumoEnergia,
        reducaoTemperatura: array.reducaoTemperatura,
        quantidadeTotal: array.quantidadeTotal,
        quantidadeAtiva: array.quantidadeAtiva - 1,
        minLevelUnlock: array.minLevelUnlock,
      }
  
      setGeneralUpgrades({...generalUpgrades, 6: newArr});
    }
  }

  const stopAllProduction = (array, index) => e => {
    if(item.quantidadeAtiva > 0) {
      let newArr = [...generalUpgrades[6]];
      newArr[index] = {
        id: array.id,
        valor: array.valor,
        consumoEnergia: array.consumoEnergia,
        reducaoTemperatura: array.reducaoTemperatura,
        quantidadeTotal: array.quantidadeTotal,
        quantidadeAtiva: array.quantidadeAtiva - array.quantidadeAtiva,
        minLevelUnlock: array.minLevelUnlock,
      }
  
      setGeneralUpgrades({...generalUpgrades, 6: newArr});
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
          <motion.button onClick={increaseAmount(item, item.id)} className={`${styles.button} ${styles.plus}`} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} >{<FaPlus/>}</motion.button>
          <motion.button onClick={decreaseAmount(item, item.id)} className={`${styles.button} ${styles.minus}`} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} >{<FaMinus/>}</motion.button>
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
      <p className={`${styles.text} ${styles.title}`}><span className={styles.bold}>{nome.MaquinasRefrigeracaoDataList[nome.MaquinasRefrigeracaoDataList.findIndex(x => x.id === id)].nome.toUpperCase()}</span></p>
      <p className={styles.text}>Valor: <span className={styles.bold}>{MoneyDollarFormatter(item.valor)}</span></p>
      <p className={styles.text}>Consumo de Energia: <span className={styles.bold}>{item.consumoEnergia + " W"}</span></p>
      <p className={styles.text}>Temperatura: <span className={styles.bold}>{"-" + item.reducaoTemperatura + " C°"}</span></p>
      <p className={styles.totais}>TOTAIS</p>
      <p className={styles.text}>Refrigeração Total: <span className={styles.bold}>-{ValueFormatter(item.reducaoTemperatura * item.quantidadeAtiva)} C°</span></p>
      <p className={styles.text}>Total Comprado: <span className={styles.bold}>{item.quantidadeTotal}</span></p>
    </div>
  );
}