import { useContext, useEffect } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import { motion } from 'framer-motion';

import styles from './DisplayConversaoReais.module.css';

import { TiArrowRepeat } from 'react-icons/ti';
import { SiConvertio } from 'react-icons/si';

import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';
import MoneyFormatter from '../../Formatter/MoneyFormatter';
import MoneyDollarFormatter from '../../Formatter/MoneyDollarFormatter';

export default function DisplayDinheiroReais() {
  const { dollarBalance, setDollarBalance, balance, setBalance, setNotificationType } = useContext(ValuesContext);
  
  const convertReal = () => {
    if((dollarBalance * 5.14) >= 100) {
      setBalance(balance => balance + (dollarBalance * 5.14));
      setDollarBalance(0);
    }
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let convertBtn = document.getElementById('convertBtn');
    let container = document.getElementById('container');

    convertBtn.onclick = async (e) => {
      if((dollarBalance * 5.14) >= 100) {
        let number = document.createElement('p');
        number.className = `${styles.number}`;
        number.innerText = `${MoneyDollarFormatter(dollarBalance * 5.14)}`;
        number.style.pointerEvents = "none";
        number.style.transition = "none";
        number.style.position = "absolute";
        number.style.left = `${e.pageX - 35}px`;
        number.style.top = `${e.pageY - 30}px`;
        container.appendChild(number);
        await sleep(2000);
        container.removeChild(number);
      }else {
        setNotificationType(12);
      }
    }
  }, [dollarBalance]);

  return (
    <div className={`${styles.infoContainer} ${styles.infoContainerMoney}`}>
      <div className={styles.iconContainer}>
        {<TiArrowRepeat/>}
      </div>
      <div className={styles.valuesContainer}>
        <p className={styles.valueName}>CONVERSÃO PARA REAIS</p>
        <p className={styles.valueDisplay}>
          <AnimatedNumber
            value={dollarBalance * 5.14}
            formatValue={v => MoneyFormatter(v)}
            duration={200}
          />
        </p>
        <motion.button 
          id="convertBtn"
          className={styles.convertBtn}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => convertReal()}
        >
          {<SiConvertio/>}
        </motion.button>
      </div>
    </div>
  );
}