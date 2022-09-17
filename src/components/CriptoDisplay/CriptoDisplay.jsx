import { useContext, useEffect, useState } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import styles from './CriptoDisplay.module.css';

import { motion } from 'framer-motion';

import { TbArrowsLeftRight, TbCopy } from 'react-icons/tb';
import ReactTooltip from 'react-tooltip';

import AnimatedNumber from 'animated-number-react';

import MoneyFormatter from '../../Formatter/MoneyFormatter';
import BitcoinFormatter from '../../Formatter/BitcoinFormatter';

import BalanceDisplay from '../BalanceDisplay/BalanceDisplay';

let interval = undefined;

export default function CriptoDisplay() {
  const { btcBalance, setBtcBalance, mpcValue, setBalance, setNotificationType, miningTime, mpcBoost, mpcMultiply, mpcRebirthBoost } = useContext(ValuesContext);
  const { specialMpcBoostStatus, specialMpcBoost } = useContext(ValuesContext);

  const [ running, setRunning ] = useState(false);
  const [ progress, setProgress ] = useState(0);

  const [ btcAmountToConvert, setBtcAmountToConvert ] = useState(0.00001);
  const [ amountToRecieve, setAmountToRecieve ] = useState(1);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, (500 * miningTime));
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      setProgress(0);
      if(specialMpcBoostStatus === 1) {
        setBtcBalance(parseFloat((btcBalance + ((mpcValue * ((mpcBoost + specialMpcBoost) + mpcRebirthBoost)) * mpcMultiply)).toFixed(5)));
      }else {
        setBtcBalance(parseFloat((btcBalance + ((mpcValue * (mpcBoost + mpcRebirthBoost)) * mpcMultiply)).toFixed(5)));
      }
      clearInterval(interval);
    }
  }, [progress]);

  useEffect(() => {
    setAmountToRecieve(btcAmountToConvert * 80000);
  }, [btcAmountToConvert]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let convertBtn = document.getElementById('convertBtn');
    let container = document.getElementById('container');

    convertBtn.onclick = async (e) => {
      if(btcBalance > 0) {
        let number = document.createElement('p');
        number.className = `${styles.number}`;
        number.innerText = `${MoneyFormatter(amountToRecieve)}`;
        number.style.pointerEvents = "none";
        number.style.transition = "none";
        number.style.position = "absolute";
        number.style.left = `${e.pageX - 35}px`;
        number.style.top = `${e.pageY - 30}px`;
        container.appendChild(number);
        await sleep(2000);
        container.removeChild(number);
      }
    }
  }, [btcBalance, amountToRecieve]);

  function tryConvert() {
    if(btcAmountToConvert <= btcBalance || btcAmountToConvert === btcBalance) {
      if(btcAmountToConvert !== '' && btcAmountToConvert !== 0 && btcBalance > 0) {
        setBalance(balance => balance + amountToRecieve);
        setBtcBalance(parseFloat((parseFloat(btcBalance).toFixed(5) - parseFloat(btcAmountToConvert).toFixed(5)).toFixed(5)));
      }else {
        setNotificationType(2);
      }
    }else {
      setNotificationType(3);
    }
  }

  let keyCodeList = [188, 69, 189, 187, 110, 109, 107, 17];

  function checkInsertValue(e) {
    let inputValue = document.getElementById('inputValue');

    if(inputValue.value.length >= 7 && e.keyCode !== 8) {
      e.preventDefault();
    }

    keyCodeList.forEach((value) => {
      if(e.keyCode === value) {
        e.preventDefault();
      }
    });
  }

  return (
    <div id="container" className={styles.generalContainer}>
      <ReactTooltip 
        place="top"
        multiline={true}
      />
      <div className={styles.gridMoneyContainer}>
        <div className={styles.container}>
          <p className={styles.title}>Seus <span>Bitcoins</span></p>
          <div className={styles.btcContainer}>
            {/* <p className={styles.value}>{btcBalance.toFixed(5)}</p> */}
            <div className={styles.balanceValue}>
              <AnimatedNumber
                value={btcBalance}
                formatValue={v => BitcoinFormatter(v)}
                duration={200}
              />
            </div>
            <p className={styles.btcText}>BTC</p>
            <button
              data-tip="Copia o seu valor total em Bitcoin<br>para o campo de conversão abaixo!"
              className={styles.copyBtcBtn}
              onClick={() => setBtcAmountToConvert((btcBalance).toFixed(5))}
            >
              <TbCopy/>
            </button>
          </div>
        </div>
        <BalanceDisplay/>
      </div>
      <div className={styles.infosContainer}>
        <p className={styles.title}>Painel de <span>Informações</span></p>
        <div className={styles.infoMpc}>
          <p className={styles.title}>Mineração por <span>Clique</span></p>
          <div className={styles.btcContainer}>
            <p className={styles.value}>{specialMpcBoostStatus === 1 ? BitcoinFormatter(parseFloat((mpcValue * ((mpcBoost + specialMpcBoost) + mpcRebirthBoost)) * mpcMultiply)) : BitcoinFormatter(parseFloat((mpcValue * (mpcBoost + mpcRebirthBoost)) * mpcMultiply))}</p>
            <p className={styles.btcText}>BTC</p>
          </div>
        </div>
        <p className={styles.title}>Converta os seus <span>Bitcoins</span></p>
        <div className={styles.convertGeneralContainer}>
          <input id="inputValue" className={styles.inputValues} type="number" 
            value={btcAmountToConvert} 
            onCopy={(e) => e.preventDefault()}
            onCut={(e) => e.preventDefault()}
            onPaste={(e) => e.preventDefault()}
            onKeyDown={(e) => checkInsertValue(e)} 
            onChange={(e) => setBtcAmountToConvert(e.target.value)} 
            placeholder="Quantidade BTC"
          />
          <p className={styles.icon}><TbArrowsLeftRight/></p>
          <input className={`${styles.inputValues} ${styles.inputValueBorder}`} type="text" value={MoneyFormatter(amountToRecieve)} placeholder="Quantidade em BRL" disabled/>
        </div>

        <motion.button
          id="convertBtn"
          className={styles.convertBtn}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => tryConvert()}
        >
          CONVERTER
        </motion.button>
      </div>
      <progress className={styles.progressToMine} value={progress} max="100"></progress>
      <div className={styles.showProgress}>
        <p>{progress}</p>
        <p>%</p>
      </div>
      <motion.button
          className={styles.mineBtn}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => setRunning(!running)}
        >
          {!running ? 'MINERAR' : 'PAUSAR'}
        </motion.button>
    </div>
  );
}