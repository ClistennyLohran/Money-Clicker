import { useEffect } from 'react';
import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import styles from './ShowUpgradeInfo.module.css';

import { motion } from 'framer-motion';

import { IoClose } from 'react-icons/io5';
import { BuyContext } from '../../contexts/BuyContext/BuyContext';

import MoneyFormatter from '../../Formatter/MoneyFormatter';
import { RebirthUpgradeContext } from '../../contexts/RebirthUpgradeContext/RebirthUpgradeContext';

export default function ShowUpgradeInfo() {
  
  const { rebirthPoints, setRebirthPoints, showHide, setShowHide, balance, setBalance, gpcBoost, setGpcBoost, gpcMultiply, setGpcMultiply, setNotificationType, miningTime, setMiningTime, setMpcMultiply, mpcMultiply, gpsBoost, setGpsBoost, gpsMultiply, setGpsMultiply, mpcBoost, setMpcBoost } = useContext(ValuesContext);
  const { gpcRebirthBoost, setGpcRebirthBoost, gpsRebirthBoost, setGpsRebirthBoost, mpcRebirthBoost, setMpcRebirthBoost } = useContext(ValuesContext);
  const { specialGpsBoost, setSpecialGpsBoost, specialGpcBoost, setSpecialGpcBoost, specialMpcBoost, setSpecialMpcBoost, generalUpgrades } = useContext(ValuesContext);
  const { specialGpsBoostStatus, setSpecialGpsBoostStatus, specialGpcBoostStatus, setSpecialGpcBoostStatus, specialMpcBoostStatus, setSpecialMpcBoostStatus } = useContext(ValuesContext);

  const { buyTitle, buyValue, buyDescription, buyIcon, buyId } = useContext(BuyContext);
  
  const { 
    setUpgrade01, 
    setUpgrade02, 
    setUpgrade03, 
    setUpgrade04, 
    setUpgrade05, 
    setUpgrade06, 
    setUpgrade07, 
    setUpgrade08, 
    setUpgrade09, 
    setUpgrade10, 
    setUpgrade11, 
    setUpgrade12,
    setUpgrade13,
    setUpgrade14,
    setUpgrade15,
    setUpgrade16,
  } = useContext(BuyContext);

  const { 
    setRebirthUpgrade1,
    setRebirthUpgrade2,
    setRebirthUpgrade3,
    setRebirthUpgrade4,
    setRebirthUpgrade5,
    setRebirthUpgrade6,
  } = useContext(RebirthUpgradeContext);

  useEffect(() => {
    let containerBlur = document.getElementById('containerBlur');

    if(!showHide) {
      containerBlur.style.opacity = 0;
      containerBlur.style.pointerEvents = "none";
    }else {
      containerBlur.style.opacity = 1;
      containerBlur.style.pointerEvents = "all";
    }
  }, [showHide]);

  function buyUpgrade() {
    if(buyId === '1') {
      /* Upgrade que melhora em 3% o lucro do GPS */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpcBoost(gpcBoost + 0.03);
        setUpgrade01(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '2') {
      /* Reduz o tempo de mineração em 30% */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setMiningTime(miningTime - 0.30);
        setUpgrade02(1);
        setShowHide(!showHide);
      }else {
        setNotificationType(1);
      }
    } else if (buyId === '3') {
      /* Upgrade que aumenta +10% o lucro do GPS */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpcBoost(gpcBoost + 0.10);
        setUpgrade03(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '4') {
      /* Upgrade que duplica a quantidade de ganho do GPS */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpcMultiply(2);
        setUpgrade04(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '5') {
      /* Upgrade que duplica a quantidade de ganho ao converter a mineração */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setMpcMultiply(2);
        setUpgrade05(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '6') {
      /* Acrescenta 5% na produção de GPS */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpsBoost(gpsBoost + 0.05);
        setUpgrade06(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '7') {
      /* Upgrade que aumenta +20% o lucro do GPC */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpcBoost(gpcBoost + 0.20);
        setUpgrade07(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '8') {
      /* Acrescenta +30% na produção de GPS */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpsBoost(gpsBoost + 0.30);
        setUpgrade08(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '9') {
      /* Tempo de mineração reduzido para -60% */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setMiningTime(miningTime - 0.30);
        setUpgrade09(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '10') {
      /* Multiverso, multiplica o GPS por 2 */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpsMultiply(2);
        setUpgrade10(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '11') {
      /* RTX 3090TI aumenta em 60% o Boost do MPC */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setMpcBoost(mpcBoost + 0.60);
        setUpgrade11(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '12') {
      /* Mouse Quântico, agora o GPC é multiplicado por 4 */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpcMultiply(4);
        setUpgrade12(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '13') {
      /* Mouse Dourado, agora o GPS é multiplicado por 8 */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpsMultiply(8);
        setUpgrade13(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '14') {
      /* Mouse Quântico, agora o GPC é multiplicado por 8 */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setGpcMultiply(8);
        setUpgrade14(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '15') {
      /* Mouse Quântico, agora o MPC é multiplicado por 8 */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setMpcMultiply(8);
        setUpgrade15(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    } else if (buyId === '16') {
      /* O tempo de mineração é reduzido para -90% */
      if(balance >= buyValue) {
        setBalance(balance => balance - buyValue);
        setMiningTime(miningTime - 0.30);
        setUpgrade16(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(1);
      }
    }

    /* Rebirth Upgrades */

    if(buyId === '1000') {
      /* Bônus permanente que aumenta em 150% o lucro de GPC */
      if(rebirthPoints >= buyValue) {
        setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
        setGpsRebirthBoost(gpsRebirthBoost + 1.50);
        setRebirthUpgrade1(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(8);
      }
    }else if(buyId === '1001') {
      /* Bônus permanente que aumenta em 150% o lucro de GPS */
      if(rebirthPoints >= buyValue) {
        setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
        setGpcRebirthBoost(gpcRebirthBoost + 1.50);
        setRebirthUpgrade2(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(8);
      }
    }else if(buyId === '1002') {
      /* Bônus permanente que aumenta em 150% o lucro de MPC */
      if(rebirthPoints >= buyValue) {
        setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
        setMpcRebirthBoost(mpcRebirthBoost + 1.50);
        setRebirthUpgrade3(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(8);
      }
    }else if(buyId === '1003') {
      /* Bônus permanente que aumenta em 5% o GPS por cada Upgrade de GPS comprado */
      if(rebirthPoints >= buyValue) {
        setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
        
        let gpsLevelCounter = 0;

        generalUpgrades[0].forEach(item => {
          gpsLevelCounter += (item.level - 1);
        });

        setSpecialGpsBoostStatus(1);
        setSpecialGpsBoost(gpsLevelCounter * 0.005);

        setRebirthUpgrade4(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(8);
      }
    }else if(buyId === '1004') {
      /* Bônus permanente que aumenta em 3% o GPC por cada Upgrade de GPC comprado */
      if(rebirthPoints >= buyValue) {
        setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
        
        let gpcLevelCounter = 0;

        generalUpgrades[1].forEach(item => {
          gpcLevelCounter += (item.level - 1);
        });

        setSpecialGpcBoostStatus(1);
        setSpecialGpcBoost(gpcLevelCounter * 0.003);

        setRebirthUpgrade5(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(8);
      }
    }else if(buyId === '1005') {
      /* Bônus permanente que aumenta em 7% o MPC por cada Upgrade de MPC comprado */
      if(rebirthPoints >= buyValue) {
        setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
        
        let mpcLevelCounter = 0;

        generalUpgrades[2].forEach(item => {
          mpcLevelCounter += (item.level - 1);
        });

        setSpecialMpcBoostStatus(1);
        setSpecialMpcBoost(mpcLevelCounter * 0.007);

        setRebirthUpgrade6(1);
        setShowHide(!showHide);
      } else {
        setNotificationType(8);
      }
    }
  }

  function infoRebirthPoints() {
    return (
      <div className={styles.showRebirthPoints}>
        <p>Pontos de Renascimento: {rebirthPoints} RN</p>
      </div>
    );
  }

  return (
    <div id="containerBlur" className={styles.containerBlur}>
      <div className={styles.upgradeContainer}>
        <div className={styles.close} onClick={() => setShowHide(false)}>
          {<IoClose/>}
        </div>
        {buyValue < 10000 ? infoRebirthPoints() : null}
        <div className={styles.containerGeral}>
          <div className={styles.infosContainer}>
            <div className={styles.iconBox}>
              {buyIcon}
            </div>
            <div className={styles.textContainer}>
              <p className={styles.title}>{buyTitle}</p>
              <p className={styles.value}>{buyValue < 10000 ? buyValue + " RN" : MoneyFormatter(buyValue)}</p>
            </div>
          </div>
        </div>
        <div className={styles.descriptionContainer}>
          <p>{buyDescription}</p>
        </div>
        <motion.button 
          className={styles.buyUpgrade}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => buyUpgrade()}
        >
          COMPRAR
        </motion.button>
      </div>
    </div>
  );
}