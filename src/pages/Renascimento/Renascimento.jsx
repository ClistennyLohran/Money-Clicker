import styles from './Renascimento.module.css';

import { motion } from 'framer-motion';

import { FaQuestion, FaMousePointer, FaClock, FaLightbulb } from 'react-icons/fa';
import { GiDragonOrb, GiDoubleRingedOrb, GiMoneyStack } from 'react-icons/gi';

import ReactTooltip from 'react-tooltip';

import DisplayDinheiroReais from '../../components/DisplayDinheiroReais/DisplayDinheiroReais';
import InfoDisplayBonus from '../../components/InfoDisplay/InfoDisplayBonus';

import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const upgradesGps = require('../../UpgradeObjects/UpgradesGPS/UpgradesGPS');
const upgradesGpc = require('../../UpgradeObjects/UpgradesGPC/UpgradesGPC');
const specialUpgrades = require('../../UpgradeObjects/SpecialUpgrade/SpecialUpgrade');
const specialUpgradesRebirth = require('../../UpgradeObjects/SpecialUpgradeRebirth/SpecialUpgradeRebirth');
const PlacaDeVideo = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/PlacaDeVideo/PlacaDeVideo');
const GeradoresEnergia = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/GeradoresEnergia/GeradoresEnergia');
const MaquinasRefrigeracao = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/MaquinasRefrigeracao/MaquinasRefrigeracao');

export default function Renascimento() {
  
  const navigate = useNavigate();
  
  const { balance, setNotificationType, gpsRebirth, gpcRebirth, gpcRebirthBoost, gpsRebirthBoost, rebirthPoints, setVariables, levelRebirthBoost, levelRebirth } = useContext(ValuesContext);
  const { maxValueRebirth, specialGpsBoostStatus, specialGpcBoostStatus, specialLevelBoostStatus } = useContext(ValuesContext);
  const { generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);

  const [ checked, setChecked ] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function rebirth() {
    const upgradesGroup = [ upgradesGps.gpsList, upgradesGpc.gpcList, specialUpgrades.specialUpgradesList, specialUpgradesRebirth.specialUpgradeRebirthList, PlacaDeVideo.PlacaDeVideoList, GeradoresEnergia.GeradoresEnergiaList, MaquinasRefrigeracao.MaquinasRefrigeracaoList ];
    
    if(checked && balance >= 20000000000) {
      var highestTimeoutId = setTimeout(";");
      for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i);
      }
      await sleep(100);
      localStorage.clear();
      await sleep(100);
      setVariables(
        [
          { 
            currency: { 
              balance: 0.00,
              btcAmount: 0.00000000,
              dollarBalance: 0.00,
              dollarAmountConvert: 0.00,
              minedAmount: 0.00000000,
            },
            advancedMining: {
              miningPower: 0.00,
              miningPowerDecrease: 1.00,
              energyPower: 0.00,
              energyPowerUsed: 0.00,
              temperature: 0.00,
              temperatureDecrease: 0.00,
              miningPowerBoost: 1.0,
              miningPowerMultiply: 1.0,
              energyPowerBoost: 1.0,
              energyPowerMultiply: 1.0,
              energyEconomy: 1.0,
              miningBusinessName: 'Bitcoin Mine',
              graphicsCardAmount: 0,
              energyGeneratorAmount: 0,
              cardLevel: 1,
            },
            earnValues: {
              gpcValue: 1,
              gpsValue: 0,
            },
            businessData: {
              businessName: 'MoneyClicker Invest',
              level: 1,
              xp: 100,
              xpAmountPerClick: 1,
              clickAmount: 0,
              clickAmountMultiply: 1,
              levelProgressValue: 0,
              totalClickAmount: 0,
            },
            boosts: {
              gpcBoost: 1.0,
              gpsBoost: 1.0,
              levelBoost: 1.0,
            },
            multipliers: {
              gpcMultiply: 1.0,
              gpsMultiply: 1.0,
              levelMultiply: 1.0,
            },
            rebirthBoostsToApply: {
              gpcRebirthBoost: (gpcRebirthBoost + (gpcRebirth / 100)).toFixed(14),
              gpsRebirthBoost: (gpsRebirthBoost + (gpsRebirth / 100)).toFixed(14),
              levelRebirthBoost: (levelRebirthBoost + (levelRebirth / 100)).toFixed(14),
            },
            rebirthBoosts: {
              gpcRebirth: 0,
              gpsRebirth: 0,
              levelRebirth: 0,
            },
            rebirthData: {
              rebirthPoints: rebirthPoints + 1,
              maxValueRebirth: 300,
            },
            specialRebirthBoosts: {
              specialGpsBoost: 0.0,
              specialGpcBoost: 0.0,
              specialLevelBoost: 0.0,
            },
            specialRebirthStatus: {
              specialGpsBoostStatus: specialGpsBoostStatus,
              specialGpcBoostStatus: specialGpcBoostStatus,
              specialLevelBoostStatus: specialLevelBoostStatus,
            },
            themes: {
              activeTheme: 0,
              activeColor: 0,
              unlocked: 0,
            }
          }
        ]
      )
      let pickUpgradesArr = [...generalUpgrades[3]];
      setGeneralUpgrades({...upgradesGroup, 3: pickUpgradesArr});
      navigate('/');
      await sleep(100);
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
        <p className={styles.text}>{<GiDragonOrb/>}&nbsp;<span className={styles.textBold}>BÔNUS DE RENASCIMENTO</span>&nbsp;{<GiDragonOrb/>}</p>
      </div>
      <DisplayDinheiroReais/>
      <div className={styles.minValContainer}>
        <p className={styles.valMinText}>{<GiMoneyStack/>}&nbsp;Valor mínimo para renascimento!</p>
        <p className={styles.valMinBold}>R$20 Bilhões</p>
      </div>
      <div className={styles.rebirthPointsContainer}>
        <p className={styles.rebirthPointsTitle}>Pontos de Renascimento</p>
        <p className={styles.rebirthPointsText}>{rebirthPoints + " RN"}</p>
      </div>
      <div className={styles.infoPanel}>
        <p className={styles.infoPanelText}>{<FaLightbulb/>}&nbsp;<span>PAINEL DE INFORMAÇÕES</span>&nbsp;{<FaLightbulb/>}</p>
        <InfoDisplayBonus icon={<FaMousePointer/>} datatip="Bônus GPC - Bônus de Ganho por Clique<br><br>Este bônus será aplicado<br>ao seu GPC quando você renascer!" tooltipIcon={<FaQuestion/>} title="Bônus de " titleBold="GPC" value={gpcRebirth.toFixed(2) + "%"} />
        <InfoDisplayBonus icon={<FaClock/>} datatip="Bônus GPS - Bônus de Ganho por Segundo<br><br>Este bônus será aplicado<br>ao seu GPS quando você renascer!" tooltipIcon={<FaQuestion/>} title="Bônus de " titleBold="GPS" value={gpsRebirth.toFixed(2) + "%"} />
        <InfoDisplayBonus icon={<GiDoubleRingedOrb/>} datatip="Bônus NPC - Bônus de Nível por Clique<br><br>Este bônus será aplicado<br>ao seu NPC quando você renascer!" tooltipIcon={<FaQuestion/>} title="Bônus de " titleBold="NPC" value={levelRebirth.toFixed(2) + "%"} />
        <p className={styles.limitInfo}>Limite de {maxValueRebirth}% de bônus por renascimento!</p>
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