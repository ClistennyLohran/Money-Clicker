import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';

import { FaPlus } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';

import MoneyFormatter from '../../../Formatter/MoneyFormatter';
import ValueFormatter from '../../../Formatter/ValueFormatter';

import styles from './GanhoPorSegundo.module.css';
import { UpgradeContext } from '../../../contexts/UpgradeContext/UpgradeContext';

export default function EarnPerSecond({ item, list, maxLevel, preview }) {

  const { balance, setBalance, gpsValue, setGpsValue, setNotificationType, gpsBoost, gpsMultiply, gpsRebirthBoost } = useContext(ValuesContext);
  const { level, specialGpsBoostStatus, specialGpsBoost, setSpecialGpsBoost, setSpecialLevelBoost, specialLevelBoost, specialLevelBoostStatus  } = useContext(ValuesContext);
  const { generalUpgrades, setGeneralUpgrades } = useContext(UpgradeContext);

  function buyUpgrade(recievedId) {
    if((item.level + Number(preview)) <= maxLevel) {
      if(balance >= item.upgradeValue && balance >= calcPreviewPrice(item.upgradeValue)) {
        if(item.level <= (maxLevel - 1)) {
          setBalance(balance => balance - calcPreviewPrice(item.upgradeValue));
          setGpsValue(gpsValue + (item.gpsAmount * Number(preview)));
          if(specialGpsBoostStatus === 1) {
            setSpecialGpsBoost(specialGpsBoost + (0.010 * Number(preview)));
          }
          if(specialLevelBoostStatus === 1) {
            setSpecialLevelBoost(specialLevelBoost => specialLevelBoost + (0.003 * Number(preview)));
          }
          const newState = generalUpgrades[list].map(item => {
            if(item.id === recievedId) {
              return {...item, upgradeValue: parseFloat((calcPreview(item.upgradeValue)).toFixed(2)), level: item.level + Number(preview)}
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
    } else {
      setNotificationType(17);
    }
  }

  function calcPreview(value) {
    let prevVal = value;

    if(Number(preview) === 1) {
      return prevVal * 1.09;
    }
    for(let start = 1; start <= Number(preview); start ++) {
      prevVal *= 1.09;
    }
    return prevVal;
  }

  function calcPreviewPrice(value) {
    let prevVal = value;
    let total = value;

    if(Number(preview) === 1) {
      return prevVal;
    }
    for(let start = 1; start <= Number(preview); start ++) {
      prevVal *= 1.09;
      total += prevVal;
    }
    return total;
  }

  return (
    <div className={level >= item.minLevelUnlock ? styles.container : styles.containerLocked}>
      <div className={styles.lockedContainer}>
        <p className={styles.lockedText}>{<BsFillShieldLockFill/>}&nbsp;BLOQUEADO&nbsp;{<BsFillShieldLockFill/>}</p>
        <p className={styles.lockedLevel}><span>NÍVEL NECESSÁRIO:</span> {item.minLevelUnlock}</p>
      </div>
      <p className={styles.title}>{item.name} {specialGpsBoostStatus === 1 ? ValueFormatter(((item.gpsAmount * ((gpsBoost + specialGpsBoost) + gpsRebirthBoost)) * gpsMultiply)) : ValueFormatter(((item.gpsAmount * (gpsBoost + gpsRebirthBoost)) * gpsMultiply))} {item.suffix}</p>
      <p className={balance >= item.upgradeValue && balance >= calcPreviewPrice(item.upgradeValue) ? styles.value : styles.noValue}>{Number(preview) === 1 ? MoneyFormatter(item.upgradeValue) : MoneyFormatter(calcPreviewPrice(item.upgradeValue))}</p>
      <div className={styles.levelContainer}>
        <p className={styles.levelText}>NÍVEL</p>
        <div className={item.level < maxLevel ? styles.levelBox : styles.levelBoxMax}>
          <p>{item.level === maxLevel ? 'MAX' : item.level}</p>
        </div>
      </div>
      <button 
        data-tip={`Acrescenta ${ValueFormatter(parseFloat((item.gpsAmount * ((gpsBoost + specialGpsBoost) + gpsRebirthBoost)) * gpsMultiply))} de GPS<br>(Ganho por Segundo)`}
        className={styles.btnUpgrade}
        onClick={() => buyUpgrade(item.id)}
      >
        <FaPlus/>
      </button>
    </div>
  );
}