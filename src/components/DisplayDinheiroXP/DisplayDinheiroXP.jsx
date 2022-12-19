/* Design */
import styles from './DisplayDinheiroXP.module.css';

/* Hooks */
import { useContext, useEffect } from 'react';

/* Contextos */
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

/* Icones */
import { GiMoneyStack } from 'react-icons/gi';

/* Customizados */
import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';

/* Componentes */
import MoneyFormatter from '../../Formatter/MoneyFormatter';
import MoneyDollarFormatter from '../../Formatter/MoneyDollarFormatter';

export default function DisplayDinheiroXP() {
  const { xp, setXp, levelProgressValue, setLevelProgressValue, clickAmount, setClickAmount, level, setLevel, setNotificationType, balance, dollarBalance } = useContext(ValuesContext);
  
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
  
  return (
    <div className={styles.container}>
      <div className={styles.infosContainer}>
        <div className={styles.reaisContainer}>
          <div className={styles.circleIcon}>
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
          <div className={styles.circleIcon}>
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