import styles from './Rebirth.module.css';

import { motion } from 'framer-motion';

import { FaQuestion, FaMousePointer, FaClock, FaBtc } from 'react-icons/fa';

import ReactTooltip from 'react-tooltip';

import BalanceDisplay from '../../components/BalanceDisplay/BalanceDisplay';
import InfoDisplayBonus from '../../components/InfoDisplay/InfoDisplayBonus';

import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { RebirthUpgradeContext } from '../../contexts/RebirthUpgradeContext/RebirthUpgradeContext';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Rebirth() {
  
  const navigate = useNavigate();
  
  const { balance, setNotificationType, gpsRebirth, gpcRebirth, mpcRebirth, gpcRebirthBoost, gpsRebirthBoost, mpcRebirthBoost, rebirthPoints, variables, setVariables, specialGpsBoost, specialGpcBoost, specialMpcBoost } = useContext(ValuesContext);
  const { 
    rebirthUpgrade1,
    rebirthUpgrade2,
    rebirthUpgrade3,
    rebirthUpgrade4,
    rebirthUpgrade5,
    rebirthUpgrade6,
  } = useContext(RebirthUpgradeContext);
  const { specialGpsBoostStatus, specialGpcBoostStatus, specialMpcBoostStatus } = useContext(ValuesContext);
  const { activeTheme, activeColor } = useContext(ValuesContext);

  const [ checked, setChecked ] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function rebirth() {
    if(checked && balance >= 20000000000) {
      var highestTimeoutId = setTimeout(";");
      for (var i = 0 ; i < highestTimeoutId ; i++) {
          clearTimeout(i);
      }
      await sleep(200);
      localStorage.clear();
      await sleep(200);
      setVariables(
        [
          { 
            currency: { 
              balance: 0, 
              btcBalance: 0,
            },
            earnValues: {
              gpcValue: 1,
              gpsValue: 0,
              mpcValue: 0.00750,
            },
            businessData: {
              businessName: 'MoneyClicker Invest',
            },
            specialsUpgrade: {
              upgrade01: 0,
              upgrade02: 0,
              upgrade03: 0,
              upgrade04: 0,
              upgrade05: 0,
              upgrade06: 0,
              upgrade07: 0,
              upgrade08: 0,
              upgrade09: 0,
              upgrade10: 0,
              upgrade11: 0,
              upgrade12: 0,
              upgrade13: 0,
              upgrade14: 0,
              upgrade15: 0,
              upgrade16: 0,
            },
            rebirthSpecialUpgrade: {
              rebirthUpgrade1: rebirthUpgrade1,
              rebirthUpgrade2: rebirthUpgrade2,
              rebirthUpgrade3: rebirthUpgrade3,
              rebirthUpgrade4: rebirthUpgrade4,
              rebirthUpgrade5: rebirthUpgrade5,
              rebirthUpgrade6: rebirthUpgrade6,
            },
            boosts: {
              gpcBoost: 1.0,
              gpsBoost: 1.0,
              mpcBoost: 1.0,
            },
            multipliers: {
              gpcMultiply: 1.0,
              gpsMultiply: 1.0,
              mpcMultiply: 1.0,
            },
            rebirthBoostsToApply: {
              gpcRebirthBoost: (gpcRebirthBoost + (gpcRebirth / 100)).toFixed(14),
              gpsRebirthBoost: (gpsRebirthBoost + (gpsRebirth / 100)).toFixed(14),
              mpcRebirthBoost: (mpcRebirthBoost + (mpcRebirth / 100)).toFixed(14),
            },
            miningData: {
              miningTime: 1.0,
            },
            rebirthBoosts: {
              gpcRebirth: 0,
              gpsRebirth: 0,
              mpcRebirth: 0,
            },
            rebirthData: {
              rebirthPoints: rebirthPoints + 1,
            },
            specialRebirthBoosts: {
              specialGpsBoost: 0.0,
              specialGpcBoost: 0.0,
              specialMpcBoost: 0.0,
            },
            specialRebirthStatus: {
              specialGpsBoostStatus: specialGpsBoostStatus,
              specialGpcBoostStatus: specialGpcBoostStatus,
              specialMpcBoostStatus: specialMpcBoostStatus,
            },
            themes: {
              activeTheme: 0,
              activeColor: 0,
              unlocked: 0,
            }
          }
        ]
      )
      await sleep(200);
      navigate('/');
      document.location.reload(true);
    }else {
      setNotificationType(7);
    }
  }

  return (
    <motion.div 
      className={styles.container}
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <ReactTooltip 
        place="top"
        multiline={true}
      />
      <div className={styles.titleContainer}>
        <p className={styles.text}>Bônus de <span className={styles.textBold}>Renascimento</span></p>
      </div>
      <BalanceDisplay/>
      <div className={styles.minValContainer}>
        <p className={styles.valMinText}>Valor Mínimo para<br></br>Renascimento: <span className={styles.valMinBold}>R$20 Bilhões</span></p>
      </div>
      <div className={styles.rebirthPointsContainer}>
        <p className={styles.rebirthPointsTitle}>Pontos de Renascimento</p>
        <p className={styles.rebirthPointsText}>{rebirthPoints + " RN"}</p>
      </div>
      <div className={styles.infoPanel}>
        <p className={styles.infoPanelText}>Painel de <span>Informações</span></p>
        <InfoDisplayBonus icon={<FaMousePointer/>} datatip="Bônus GPC - Bônus de Ganho por Clique<br><br>Este bônus será aplicado<br>ao seu GPC quando você renascer!" tooltipIcon={<FaQuestion/>} title="Bônus de " titleBold="GPC" value={gpcRebirth.toFixed(2) + "%"} />
        <InfoDisplayBonus icon={<FaClock/>} datatip="Bônus GPS - Bônus de Ganho por Segundo<br><br>Este bônus será aplicado<br>ao seu GPS quando você renascer!" tooltipIcon={<FaQuestion/>} title="Bônus de " titleBold="GPS" value={gpsRebirth.toFixed(2) + "%"} />
        <InfoDisplayBonus icon={<FaBtc/>} datatip="Bônus MPC - Bônus de Mineração por Clique<br><br>Este bônus será aplicado<br>ao seu MPC quando você renascer!" tooltipIcon={<FaQuestion/>} title="Bônus de " titleBold="MPC" value={mpcRebirth.toFixed(2) + "%"} />
        <p className={styles.limitInfo}>Limite de 300% de bônus por renascimento!</p>
      </div>
      <div className={styles.termsContainer}>
        <p className={styles.alert}><span className={styles.alertBold}>Antes de clicar em renascer leia:</span> ao clicar em renascer todo o seu progresso atual será perdido incluindo melhorias especiais, dinheiro, melhorias comuns, bitcoins, em troca você ganhará os bônus acima, caso você já tenha renascido antes o bônus atual será somado ao bônus anterior!</p>
      </div>
      <motion.button
        className={styles.rebirthButton}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
        onClick={() => rebirth()}
      >
        RENASCER
      </motion.button>
      <div className={styles.customCheckboxContainer}>
        <label className={styles.containerCb}>
          <input type="checkbox" name="translateRadio" onChange={() => setChecked(!checked)} />
          <span className={styles.checkmark}></span>
        </label>
        <p className={styles.checkBoxText}>Li e estou ciente!</p>
      </div>
    </motion.div>
  );
}