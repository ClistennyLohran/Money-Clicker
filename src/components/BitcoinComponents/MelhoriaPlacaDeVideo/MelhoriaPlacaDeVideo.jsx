import styles from './MelhoriaPlacaDeVideo.module.css';

import MoneyDollarFormatter from '../../../Formatter/MoneyDollarFormatter';

import { motion } from 'framer-motion';

import { FaPlus, FaMinus } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';

import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';

import { useState } from 'react';

import { AdvancedMiningContext } from '../../../contexts/AdvancedMiningContext/AdvancedMiningContext';

/* Audio Play */
import upgradeSong from '../../../songs/Melhoria.mp3';

export default function MelhoriaPlacaDeVideo({ id, item }) {
  const { generalUpgrades, setGeneralUpgrades, dollarBalance, setDollarBalance, btcAmount, setBtcAmount } = useContext(ValuesContext);
  const { setNotificationType, level } = useContext(ValuesContext);
  const { miningPowerMultiply } = useContext(AdvancedMiningContext);

  const [ overclockDisplay, setOverclockDisplay ] = useState(item.overclockAtual);

  const changeValue = (array, index) => e => {
    let newArr = [...generalUpgrades[4]];
    newArr[index] = {
      id: array.id,
      nome: array.nome,
      quantiaTotal: array.quantiaTotal,
      totalAtivo: array.totalAtivo,
      usoEnergia: array.usoEnergia,
      aumentoTemperatura: array.aumentoTemperatura,
      valor: array.valor,
      poderMineracao: array.poderMineracao,
      overclockAtual: e.target.value,
      overclockMaximo: array.overclockMaximo,
      minLevelUnlock: array.minLevelUnlock,
    }

    setGeneralUpgrades({...generalUpgrades, 4: newArr});
  }

  const increaseAmount = (array, index) => e => {
    if(item.totalAtivo < item.quantiaTotal) {
      let newArr = [...generalUpgrades[4]];
      newArr[index] = {
        id: array.id,
        nome: array.nome,
        quantiaTotal: array.quantiaTotal,
        totalAtivo: array.totalAtivo + 1,
        usoEnergia: array.usoEnergia,
        aumentoTemperatura: array.aumentoTemperatura,
        valor: array.valor,
        poderMineracao: array.poderMineracao,
        overclockAtual: array.overclockAtual,
        overclockMaximo: array.overclockMaximo,
        minLevelUnlock: array.minLevelUnlock,
      }

      setGeneralUpgrades({...generalUpgrades, 4: newArr});
    }

    // Ao comprar mais uma placa de vídeo do grupo.
    if(item.totalAtivo >= item.quantiaTotal) {
      if(item.valor <= dollarBalance) {
        let audio = new Audio(upgradeSong);
        audio.play();
        setDollarBalance(dollarBalance - item.valor);
        let newArr = [...generalUpgrades[4]];
        newArr[index] = {
          id: array.id,
          nome: array.nome,
          quantiaTotal: array.quantiaTotal + 1,
          totalAtivo: array.totalAtivo + 1,
          usoEnergia: array.usoEnergia,
          aumentoTemperatura: array.aumentoTemperatura,
          valor: array.valor * 1.12,
          poderMineracao: array.poderMineracao,
          overclockAtual: array.overclockAtual,
          overclockMaximo: array.overclockMaximo,
          minLevelUnlock: array.minLevelUnlock,
        }

        setGeneralUpgrades({...generalUpgrades, 4: newArr});
      }else {
        setNotificationType(1);
      }
    }
  }

  const decreaseAmount = (array, index) => e => {
    if(item.totalAtivo > 0) {
      let newArr = [...generalUpgrades[4]];
      newArr[index] = {
        id: array.id,
        nome: array.nome,
        quantiaTotal: array.quantiaTotal,
        totalAtivo: array.totalAtivo - 1,
        usoEnergia: array.usoEnergia,
        aumentoTemperatura: array.aumentoTemperatura,
        valor: array.valor,
        poderMineracao: array.poderMineracao,
        overclockAtual: array.overclockAtual,
        overclockMaximo: array.overclockMaximo,
        minLevelUnlock: array.minLevelUnlock,
      }

      setGeneralUpgrades({...generalUpgrades, 4: newArr});
    }
  }

  const stopAllProduction = (array, index) => e => {
    if(item.totalAtivo > 0) {
      let newArr = [...generalUpgrades[4]];
      newArr[index] = {
        id: array.id,
        nome: array.nome,
        quantiaTotal: array.quantiaTotal,
        totalAtivo: array.totalAtivo - array.totalAtivo,
        usoEnergia: array.usoEnergia,
        aumentoTemperatura: array.aumentoTemperatura,
        valor: array.valor,
        poderMineracao: array.poderMineracao,
        overclockAtual: array.overclockAtual,
        overclockMaximo: array.overclockMaximo,
        minLevelUnlock: array.minLevelUnlock,
      }

      setGeneralUpgrades({...generalUpgrades, 4: newArr});
    }
  }

  return (
    <div className={styles.generalContainer}>
      <div className={level >= item.minLevelUnlock ? styles.container : styles.containerLocked}>
        <div className={styles.lockedContainer}>
          <p className={styles.lockedText}>{<BsFillShieldLockFill/>}&nbsp;BLOQUEADO&nbsp;{<BsFillShieldLockFill/>}</p>
          <p className={styles.lockedLevel}><span>NÍVEL NECESSÁRIO:</span> {item.minLevelUnlock}</p>
        </div>
        <div className={styles.totalAmount}>
          <p>TOTAL: <span className={styles.bold}>{item.quantiaTotal}</span></p>
        </div>
        <div className={styles.amountControl}>
          <p className={styles.title}>QUANTIDADE</p>
          <div className={styles.amountContainer}>
            <p>{item.totalAtivo}</p>
          </div>
          <div className={styles.amountControlGrid}>
            <motion.button className={`${styles.button} ${styles.plus}`} onClick={increaseAmount(item, item.id)} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}}>{<FaPlus/>}</motion.button>
            <motion.button className={`${styles.button} ${styles.minus}`} onClick={decreaseAmount(item, item.id)} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}}>{<FaMinus/>}</motion.button>
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
        <p className={`${styles.valueText} ${styles.name}`}><span className={styles.bold}>{item.nome}</span></p>
        <p className={styles.valueText}>Valor: <span className={styles.bold}>{MoneyDollarFormatter(item.valor)}</span></p>
        <p className={styles.valueText}>Poder de Mineração: <span className={styles.bold}>{item.poderMineracao * miningPowerMultiply} MP/s</span></p>
        <p className={styles.valueText}>Uso de Energia: <span className={styles.bold}>{item.usoEnergia} W</span></p>
        <p className={styles.valueText}>Aumento de Temperatura: <span className={styles.bold}>{item.aumentoTemperatura} C°</span></p>
        <p className={`${styles.valueText} ${styles.spacing}`}>Overclock Atual: <span className={styles.bold}>{overclockDisplay} MHz</span></p>
        <input className={styles.overclockRange} type="range" min={0} value={overclockDisplay} max={item.overclockMaximo} onInput={(e) => setOverclockDisplay(e.target.value)} onTouchEnd={changeValue(item, item.id)} onMouseUp={changeValue(item, item.id)} />
      </div>
    </div>
  );
}