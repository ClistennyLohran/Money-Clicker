import { useEffect, useContext } from 'react';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import { GiCurlyWing } from 'react-icons/gi';
import { TiArrowUpThick } from 'react-icons/ti';

import AnimatedNumber from 'animated-number-react';

import styles from './Nivel.module.css';

export default function Nivel() {
  
  const { xp, setXp, levelProgressValue, setLevelProgressValue, clickAmount, setClickAmount, level, setLevel, setNotificationType } = useContext(ValuesContext);
  
  useEffect(() => {
    updateProgress();
  }, [levelProgressValue]);

  useEffect(() => {
    if(clickAmount === Infinity) {
      setLevel('MAX');
    }else {
      setLevelProgressValue((clickAmount * 100) / xp);
      if(clickAmount >= xp) {
        setClickAmount(0);
        setLevel(level => level + 1);
        setXp(xp => Number((xp * 1.3369).toFixed(0)));
        setNotificationType(2);
      }
    }
  }, [clickAmount]);

  function updateProgress() {
    let circularProgress = document.getElementById('circularProgress');

    circularProgress.style.background = `conic-gradient(var(--corPrimaria) ${levelProgressValue * 3.6}deg, var(--corFundoNav) ${levelProgressValue * 3.6}deg)`;
  }

  return (
    <div className={styles.container}>
      <p className={styles.levelText}>{<TiArrowUpThick/>}&nbsp;NÍVEL&nbsp;{<TiArrowUpThick/>}</p>
      <div className={styles.innerContainer}>
        <p className={styles.leftWing}>{<GiCurlyWing/>}</p>
        <div id="circularProgress" className={styles.circularProgress}>
          <div className={styles.levelDisplay}>{level}</div>
        </div>
        <p className={styles.rightWing}>{<GiCurlyWing/>}</p>
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
  );
}