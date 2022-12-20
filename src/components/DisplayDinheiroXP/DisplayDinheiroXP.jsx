/* Design */
import styles from './DisplayDinheiroXP.module.css';

/* Hooks */
import { useContext, useEffect } from 'react';

/* Contextos */
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

/* Icones */
import { GiMoneyStack } from 'react-icons/gi';
import { SiConvertio } from 'react-icons/si';

/* Customizados */
import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';

/* Animações */
import { motion } from 'framer-motion';

/* Componentes */
import MoneyFormatter from '../../Formatter/MoneyFormatter';
import MoneyDollarFormatter from '../../Formatter/MoneyDollarFormatter';

export default function DisplayDinheiroXP() {
  const { xp, setXp, levelProgressValue, setLevelProgressValue, clickAmount, setClickAmount, level, setLevel, setNotificationType, balance, setBalance, dollarBalance, setDollarBalance } = useContext(ValuesContext);
  
  useEffect(() => {
    updateProgress();
  }, [levelProgressValue]);

  useEffect(() => {
    if(clickAmount === Infinity) {
      setLevel('MAX');
      return;
    }else {
      setLevelProgressValue((clickAmount * 100) / xp);
      if(clickAmount >= xp) {
        setClickAmount(0);
        setLevel(level => level + 1);
        setXp(xp => Number((xp * 1.4688).toFixed(0)));
        setNotificationType(2);
        return;
      }
    }
  }, [clickAmount]);

  const updateProgress = () => {
    let circularProgress = document.getElementById('circularProgress');

    circularProgress.style.background = `conic-gradient(var(--corPrimaria) ${levelProgressValue * 3.6}deg, var(--corFundoNav) ${levelProgressValue * 3.6}deg)`;
  }

  const convertDolar = () => {
    setBalance(v => v + Number((dollarBalance * 5.14).toFixed(2)));
    setDollarBalance(0);
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.infosContainer}>
        <div className={styles.reaisContainer}>
          <div data-tip="Este é o seu dinheiro em reais, ele pode ser<br>utilizado para comprar melhorias na loja comum." className={styles.circleIcon}>
            <GiMoneyStack/>
          </div>
          <div className={styles.textInfosContainerLeft}>
            <div className={styles.textGroupLeft}>
              <p className={styles.infoTitle}>DINHEIRO EM REAIS</p>
              <p className={styles.infoValue}><AnimatedNumber value={balance} formatValue={v => MoneyFormatter(v)}/></p>
            </div>
          </div>
        </div>
        <div className={styles.innerContainer}>
          <div data-tip="Este é o seu nível atual, suba de nível<br>para comprar novas melhorias!" id="circularProgress" className={styles.circularProgress}>
            <div className={styles.levelDisplay}>{level}</div>
          </div>
        </div>
        <div className={styles.dolaresContainer}>
          <motion.button data-tip="Ao clicar você converterá todos os seus dólares<br>em reais, caso tenha acabado de começar a jogar<br>não esqueça de verificar primeiro a sua mineração de Bitcoin<br><br>Existem melhorias que só podem ser compradas com dólares!!!" className={styles.convertToReais} onClick={() => convertDolar()} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} ><SiConvertio/></motion.button>
          <div data-tip={`Este é o seu dinheiro em dólares, ele pode ser<br>convertido a qualquer momento para reais.<br><br>${MoneyDollarFormatter(dollarBalance)} dólares equivalem a ${MoneyFormatter(dollarBalance * 5.14)} reais.`} className={styles.circleIcon}>
            <GiMoneyStack/>
          </div>
          <div className={styles.textInfosContainerRight}>
            <div className={styles.textGroupRight}>
              <p className={styles.infoTitle}>DINHEIRO EM DOLARES</p>
              <p className={styles.infoValue}><AnimatedNumber value={dollarBalance} formatValue={v => MoneyDollarFormatter(v)}/></p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.progressContainer}>
        <div className={styles.xpGroup}>
          <p className={styles.progressValue}><AnimatedNumber value={clickAmount} formatValue={v => v.toFixed(0)} duration={300}/></p>
          <p>/</p>
          <p className={styles.progressValue}><AnimatedNumber value={xp} formatValue={v => v.toFixed(0)} duration={300}/></p>
        </div>
        <progress className={styles.levelProgress} value={clickAmount} max={xp}></progress>
      </div>
    </div>
  )
}