import { useEffect } from 'react';
import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import styles from './TelaDaMelhoria.module.css';

import { motion } from 'framer-motion';

import { IoClose } from 'react-icons/io5';
import { BuyContext } from '../../contexts/BuyContext/BuyContext';

import MoneyFormatter from '../../Formatter/MoneyFormatter';

export default function ShowUpgradeInfo() {
  
  const { rebirthPoints, setRebirthPoints, showHide, setShowHide, balance, setBalance, gpcBoost, setGpcBoost, setGpcMultiply, setNotificationType, gpsBoost, setGpsBoost, setGpsMultiply, gpsMultiply, gpcMultiply, levelMultiply, setLevelMultiply, levelBoost, setLevelBoost } = useContext(ValuesContext);
  const { gpcRebirthBoost, setGpcRebirthBoost, gpsRebirthBoost, setGpsRebirthBoost, levelRebirthBoost, setLevelRebirthBoost } = useContext(ValuesContext);
  const { setSpecialGpsBoost, setSpecialGpcBoost, setSpecialLevelBoost, generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);
  const { setSpecialGpsBoostStatus, setSpecialGpcBoostStatus, setSpecialLevelBoostStatus } = useContext(ValuesContext);

  const { buyTitle, buyValue, buyDescription, buyIcon, buyId, upgradeType } = useContext(BuyContext);

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

  const disableUpgrade = (item) => {
    if(upgradeType === 0) {
      let newArr = [...generalUpgrades[2]];
      console.log(newArr[buyId]);
      newArr[buyId] = {
        id: buyId,
        status: 1,
        title: item.title,
        value: item.value,
        description: item.description,
        classId: item.classId,
      }
      setGeneralUpgrades({...generalUpgrades, 2: newArr});
    }else if(upgradeType === 1) {
      let newArr = [...generalUpgrades[3]];
      console.log(newArr[buyId]);
      newArr[buyId] = {
        id: buyId,
        status: 1,
        title: item.title,
        value: item.value,
        description: item.description,
        classId: item.classId,
      }
      setGeneralUpgrades({...generalUpgrades, 3: newArr});
    }
    
  }

  function buyUpgrade() {
    if(upgradeType === 0) { // Melhorias especiais normais --------------------<
      if(buyId === 0) {
        /* Upgrade que melhora em 3% o lucro do GPS */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          setGpcBoost(gpcBoost + 0.03);
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 1) {
        disableUpgrade(buyId);
        /* O GPS é multiplicado por 2 */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(gpsMultiply < 2) {
            setGpsMultiply(2);
          }else {
            setNotificationType(3);
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 2) {
        disableUpgrade(buyId);
        /* Orbs de XP aprimorados, multiplica os orbs ganhos por clique por 2 */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(levelMultiply < 2) {
            setLevelMultiply(2);
          } else {
            setNotificationType(3);
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 3) {
        disableUpgrade(buyId);
        /* Upgrade que aumenta +40% o lucro do GPS */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          setGpcBoost(gpcBoost + 0.40);
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 4) { // Esse q vou modificar
        /* Acrescenta um boost de 30% para o XP */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          setLevelBoost(levelBoost + 0.30);
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 5) {
        /* Upgrade que duplica a quantidade de ganho do GPS */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(gpcMultiply < 2) {
            setGpcMultiply(2);
          } else {
            setNotificationType(3);
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 6) {
        /* Acrescenta 20% na produção de GPS */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          setGpsBoost(gpsBoost + 0.20);
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 7) {
        /* Upgrade que aumenta +60% o lucro do GPC */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          setGpcBoost(gpcBoost + 0.60);
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 8) {
        /* Acrescenta +60% na produção de GPS */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          setGpsBoost(gpsBoost + 0.60);
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 9) {
        /* O XP ganho por clique será multiplicado por 4 */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(levelMultiply < 4) {
            setLevelMultiply(4);
          }else {
            setNotificationType(3);
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 10) {
        /* Multiverso, multiplica o GPS por 4 */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(gpsMultiply < 4) {
            setGpsMultiply(4);
          }else {
            setNotificationType(3);
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 11) {
        /* Mouse Quântico, agora o GPC é multiplicado por 4 */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(gpcMultiply < 4) {
            setGpcMultiply(4);
          }else {
            setNotificationType(3)
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 12) {
        /* Mouse Dourado, agora o GPS é multiplicado por 8 */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(gpsMultiply < 8) {
            setGpsMultiply(8);
          }else {
            setNotificationType(3);
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      } else if (buyId === 13) {
        /* Mouse Quântico, agora o GPC é multiplicado por 8 */
        if(balance >= buyValue) {
          setBalance(balance => balance - buyValue);
          if(gpcMultiply < 8) {
            setGpcMultiply(8);
          }else {
            setNotificationType(3);
          }
          disableUpgrade(generalUpgrades[2][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(1);
        }
      }
    }else if(upgradeType === 1) { // Melhorias especiais do Rebirth --------------------<
      if(buyId === 0) {
        /* Bônus permanente que aumenta em 150% o lucro de GPC */
        if(rebirthPoints >= buyValue) {
          setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
          setGpsRebirthBoost(gpsRebirthBoost + 1.50);
          disableUpgrade(generalUpgrades[3][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(8);
        }
      }else if(buyId === 1) {
        /* Bônus permanente que aumenta em 150% o lucro de GPS */
        if(rebirthPoints >= buyValue) {
          setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
          setGpcRebirthBoost(gpcRebirthBoost + 1.50);
          disableUpgrade(generalUpgrades[3][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(8);
        }
      }else if(buyId === 2) {
        /* Bônus permanente que aumenta em 5% o GPS por cada Upgrade de GPS comprado */
        if(rebirthPoints >= buyValue) {
          setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
          
          let gpsLevelCounter = 0;
  
          generalUpgrades[0].forEach(item => {
            gpsLevelCounter += (item.level - 1);
          });
  
          setSpecialGpsBoostStatus(1);
          setSpecialGpsBoost(gpsLevelCounter * 0.005);
  
          disableUpgrade(generalUpgrades[3][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(8);
        }
      }else if(buyId === 3) {
        /* Bônus permanente que aumenta em 3% o GPC por cada Upgrade de GPC comprado */
        if(rebirthPoints >= buyValue) {
          setRebirthPoints(rebirthPoints => rebirthPoints - buyValue);
          
          let gpcLevelCounter = 0;
  
          generalUpgrades[1].forEach(item => {
            gpcLevelCounter += (item.level - 1);
          });
  
          setSpecialGpcBoostStatus(1);
          setSpecialGpcBoost(gpcLevelCounter * 0.003);
  
          disableUpgrade(generalUpgrades[3][buyId]);
          setShowHide(!showHide);
        } else {
          setNotificationType(8);
        }
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