import styles from './GanhoPorClique.module.css';

import { FaPlus } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';

import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';

import MoneyFormatter from '../../../Formatter/MoneyFormatter';
import ValueFormatter from '../../../Formatter/ValueFormatter';

import ReactTooltip from 'react-tooltip';

import { React } from 'react';
import { UpgradeContext } from '../../../contexts/UpgradeContext/UpgradeContext';

export default function EarnPerClick({ item, list, maxLevel }) {
  
  const { level, balance, setBalance, gpcValue, setGpcValue, setNotificationType, gpcBoost, gpcMultiply, gpcRebirthBoost } = useContext(ValuesContext);
  const { specialGpcBoostStatus, specialGpcBoost, setSpecialGpcBoost } = useContext(ValuesContext);
  const { generalUpgrades, setGeneralUpgrades } = useContext(UpgradeContext);

  function buyUpgrade(recievedId) {
    if(balance >= item.upgradeValue) {
      if(item.level <= (maxLevel - 1)) {
        setBalance(balance => balance - item.upgradeValue);
        setGpcValue(gpcValue + item.gpcAmount);
        if(specialGpcBoostStatus === 1) {
          setSpecialGpcBoost(specialGpcBoost + 0.003);
        }
        const newState = generalUpgrades[list].map(item => {
          if(item.id === recievedId) {
            return {...item, upgradeValue: parseFloat((item.upgradeValue * 1.09).toFixed(2)), level: item.level + 1}
          }

          return item;
        });

        if(list === 0) {
          setGeneralUpgrades({...generalUpgrades, 0: newState});
        } else if(list === 1) {
          setGeneralUpgrades({...generalUpgrades, 1: newState});
        }
      } else {
        setNotificationType(0);
      }
    } else {
      setNotificationType(1);
    }
  }

  return (
    <div className={level >= item.minLevelUnlock ? styles.container : styles.containerLocked}>
      <ReactTooltip 
        place="top"
        multiline={true}
      />
      <div className={styles.lockedContainer}>
        <p className={styles.lockedText}>{<BsFillShieldLockFill/>}&nbsp;BLOQUEADO&nbsp;{<BsFillShieldLockFill/>}</p>
        <p className={styles.lockedLevel}><span>NÍVEL NECESSÁRIO:</span> {item.minLevelUnlock}</p>
      </div>
      <p className={styles.title}>{item.name} {specialGpcBoostStatus === 1 ? ValueFormatter(((item.gpcAmount * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply)) : ValueFormatter(((item.gpcAmount * (gpcBoost + gpcRebirthBoost)) * gpcMultiply))} {item.suffix}</p>
      <p className={styles.value}>{MoneyFormatter(item.upgradeValue)}</p>
      <div className={styles.levelContainer}>
        <p className={styles.levelText}>NÍVEL</p>
        <div className={item.level < maxLevel ? styles.levelBox : styles.levelBoxMax}>
          <p>{item.level === maxLevel ? 'MAX' : item.level}</p>
        </div>
      </div>
      <button 
        data-tip={`Acrescenta ${ValueFormatter(parseFloat((((item.gpcAmount * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply))))} de GPC<br>(Ganho por Clique)`}
        className={styles.btnUpgrade}
        onClick={() => buyUpgrade(item.id)}
      >
        <FaPlus/>
      </button>
    </div>
  );
}