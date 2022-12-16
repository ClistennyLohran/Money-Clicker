import styles from './MelhoriaPlacaDeVideo.module.css';

import MoneyDollarFormatter from '../../../Formatter/MoneyDollarFormatter';

import { motion } from 'framer-motion';

import { FaPlus, FaMinus, FaTemperatureHigh, FaQuestion } from 'react-icons/fa';
import { BsFillLightningChargeFill, BsFillShieldLockFill } from 'react-icons/bs';
import { GiMining } from 'react-icons/gi';

import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';

import ReactTooltip from 'react-tooltip';

import { useState } from 'react';
import { useEffect } from 'react';
import { AdvancedMiningContext } from '../../../contexts/AdvancedMiningContext/AdvancedMiningContext';

export default function MelhoriaPlacaDeVideo({ id, item }) {
  
  const { miningPower, setMiningPower, energyPower, setEnergyPower, energyPowerUsed, setEnergyPowerUsed, temperature, setTemperature, memoryClock, setMemoryClock, graphicsCardAmount, setGraphicsCardAmount, energyGeneratorAmount, setEnergyGeneratorAmount } = useContext(ValuesContext);
  const { generalUpgrades, setGeneralUpgrades, dollarBalance, setDollarBalance, btcAmount, setBtcAmount } = useContext(ValuesContext);
  const { setNotificationType, level, windowSize, setWindowSize } = useContext(ValuesContext);
  const { miningPowerMultiply } = useContext(AdvancedMiningContext);

  const [ displayInfo, setDisplayInfo ] = useState(0);
  const [ selectedItem, setSelectedItem ] = useState(0);
  const [ tipContent, setTipContent ] = useState('');

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

  const showInfo = () => {
    if(displayInfo === 0) {
      setDisplayInfo(1);
    }else {
      setDisplayInfo(0);
    }
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

  useEffect(() => {
    if(selectedItem === 1) {
      setTipContent('Todos os dados sobre a quantidade total<br>de energia sendo utilizada por este grupo!');
    }else if(selectedItem === 2) {
      setTipContent('Mostra a temperatura que está sendo<br>gerada por todas placas de vídeos deste grupo!');
    }else {
      setTipContent('Mostra o poder de mineração total<br>gerado por todas placas de vídeos deste grupo!');
    }
  }, [selectedItem]);

  const infoDisplay = (actualInfo) => {
    switch(actualInfo) {
      case 1:
        return (
          <div>
            <p className={styles.valueText}>Energia Total: <span className={styles.bold}>{(item.usoEnergia * item.totalAtivo).toFixed(0) + " W"}</span></p>
            <p className={styles.valueText}>Energia do Overclock: <span className={styles.bold}>{((item.overclockAtual * 0.03950) * item.totalAtivo).toFixed(2) + " W"}</span></p>
          </div>
        )
      case 2:
        return (
          <div>
            <p className={styles.valueText}>Temperatura Total: <span className={styles.bold}>{(item.aumentoTemperatura * item.totalAtivo).toFixed(2) + " C°"}</span></p>
            <p className={styles.valueText}>Temperatura total Overclock: <span className={styles.bold}>{((item.overclockAtual * 0.00108) * item.totalAtivo).toFixed(2) + " C°"}</span></p>
          </div>
        )
      case 3:
        return (
          <div>
            <p className={styles.valueText}>Mineração Total: <span className={styles.bold}>{(item.poderMineracao * item.totalAtivo).toFixed(4) + " MP/s"}</span></p>
            <p className={styles.valueText}>Mineração total Overclock: <span className={styles.bold}>{((item.overclockAtual * 0.00288) * item.totalAtivo).toFixed(4) + " MP/s"}</span></p>
          </div>
        )
      default:
        return (
          <div>
            <p>No Content!</p>
          </div>
        )
    }
  }

  function detectWindowSize() {
    if(window.innerWidth > 480) {
      if(displayInfo === 1) {
        return (
          {height: 260}
        )
      }else {
        return (
          {height: 200}
        )
      }
    }else if(window.innerWidth <= 480) {
      if(displayInfo === 1) {
        return (
          {height: 220}
        )
      }else {
        return (
          {height: 160}
        )
      }
    }
  }

  useEffect(() => {
    let checkWindow = setInterval(() => {
      setWindowSize(window.innerWidth);
      detectWindowSize();
    }, 300);

    return () => {
      clearInterval(checkWindow);
    }
  }, [windowSize]);

  return (
    <motion.div
     className={styles.generalContainer}
     animate={detectWindowSize()}
    >
      <ReactTooltip 
        place="top"
        multiline={true}
      />
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
            <button className={`${styles.button} ${styles.plus}`} onClick={increaseAmount(item, item.id)} >{<FaPlus/>}</button>
            <button className={`${styles.button} ${styles.minus}`} onClick={decreaseAmount(item, item.id)} >{<FaMinus/>}</button>
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
        <div className={styles.buttonInfoGrid}>
          <motion.button 
            className={`${styles.buttonInfo} ${styles.button01}`}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
            onClick={() => (setSelectedItem(1), showInfo(1))}
          >
            {<BsFillLightningChargeFill/>}
          </motion.button>
          <motion.button 
            className={`${styles.buttonInfo} ${styles.button02}`}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
            onClick={() => (setSelectedItem(2), showInfo(2))}
          >
            {<FaTemperatureHigh/>}
          </motion.button>
          <motion.button 
            className={`${styles.buttonInfo} ${styles.button03}`}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
            onClick={() => (setSelectedItem(3), showInfo(3))}
          >
            {<GiMining/>}
          </motion.button>
        </div>
      </div>
      <motion.div
        className={styles.extraInfoContainer}
        animate={ displayInfo === 1 ? { opacity: 1, top: 0 } : { opacity: 0, top: -80 }}
      >
        {infoDisplay(selectedItem)}
        <div 
          data-tip={tipContent}
          className={styles.infoDiv}
        >
          {<FaQuestion/>}
        </div>
      </motion.div>
    </motion.div>
  );
}