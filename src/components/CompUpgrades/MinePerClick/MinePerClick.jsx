import { useContext } from 'react';

import { FaPlus } from 'react-icons/fa';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';

import MoneyFormatter from '../../../Formatter/MoneyFormatter';
import BitcoinFormatter from '../../../Formatter/BitcoinFormatter';

import ReactTooltip from 'react-tooltip';

import styles from './MinePerClick.module.css';
import { UpgradeContext } from '../../../contexts/UpgradeContext/UpgradeContext';

export default function EarnPerSecond({ item, list, maxLevel }) {
  
  const { balance, setBalance, mpcValue, setMpcValue, setNotificationType, mpcBoost, mpcMultiply, mpcRebirthBoost } = useContext(ValuesContext);
  const { specialMpcBoostStatus, specialMpcBoost, setSpecialMpcBoost } = useContext(ValuesContext);
  const { generalUpgrades, setGeneralUpgrades } = useContext(UpgradeContext);

  function buyUpgrade(recievedId) {
    if(balance >= item.upgradeValue) {
      if(item.level <= (maxLevel - 1)) {
        setBalance(balance => balance - item.upgradeValue);
        setMpcValue(mpcValue + item.mpcAmount);
        if(specialMpcBoostStatus === 1) {
          setSpecialMpcBoost(specialMpcBoost + 0.007);
        }
        const newState = generalUpgrades[list].map(item => {
          if(item.id === recievedId) {
            return {...item, upgradeValue: parseFloat((item.upgradeValue * 1.07).toFixed(2)), level: item.level + 1}
          }

          return item;
        });

        if(list === 0) {
          setGeneralUpgrades({...generalUpgrades, 0: newState});
        } else if(list === 1) {
          setGeneralUpgrades({...generalUpgrades, 1: newState});
        } else if(list === 2) {
          setGeneralUpgrades({...generalUpgrades, 2: newState});
        }
      } else {
        setNotificationType(0);
      }
    } else {
      setNotificationType(1);
    }
  }

  return (
    <div className={styles.container}>
      <ReactTooltip 
        place="top"
        multiline={true}
      />
      <p className={styles.title}>{item.name} {specialMpcBoostStatus === 1 ? BitcoinFormatter(((item.mpcAmount * ((mpcBoost + specialMpcBoost) + mpcRebirthBoost)) * mpcMultiply)) : BitcoinFormatter(((item.mpcAmount * (mpcBoost + mpcRebirthBoost)) * mpcMultiply))} {item.suffix}</p>
      <p className={styles.value}>{MoneyFormatter(item.upgradeValue)}</p>
      <div className={styles.levelContainer}>
        <p className={styles.levelText}>NÍVEL</p>
        <div className={item.level < maxLevel ? styles.levelBox : styles.levelBoxMax}>
          <p>{item.level === maxLevel ? 'MAX' : item.level}</p>
        </div>
      </div>
      <button 
        data-tip={`Acrescenta ${BitcoinFormatter(parseFloat((item.mpcAmount * (mpcBoost + mpcRebirthBoost)) * mpcMultiply))} de MPC<br>(Mineração por Ciclo)`}
        className={styles.btnUpgrade}
        onClick={() => buyUpgrade(item.id)}
      >
        <FaPlus/>
      </button>
    </div>
  );
}