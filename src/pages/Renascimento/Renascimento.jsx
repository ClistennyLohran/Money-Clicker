import styles from './Renascimento.module.css';

import { motion } from 'framer-motion';

import { GiDragonOrb, GiHeartWings, GiCurlyWing, GiTakeMyMoney, GiArrowCursor, GiDoubleRingedOrb } from 'react-icons/gi';
import { AiFillClockCircle } from 'react-icons/ai';

import ReactTooltip from 'react-tooltip';

import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import NomePagina from '../../components/NomePagina/NomePagina';
import DisplayBonus from '../../components/Renascimento/DisplayBonus/DisplayBonus';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

/* Renascer Song */
import renascimentoVideo from '../../videos/Renascimento.m4v';

const upgradesGps = require('../../UpgradeObjects/UpgradesGPS/UpgradesGPS');
const upgradesGpc = require('../../UpgradeObjects/UpgradesGPC/UpgradesGPC');
const specialUpgrades = require('../../UpgradeObjects/SpecialUpgrade/SpecialUpgrade');
const specialUpgradesRebirth = require('../../UpgradeObjects/SpecialUpgradeRebirth/SpecialUpgradeRebirth');
const PlacaDeVideo = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/PlacaDeVideo/PlacaDeVideo');
const GeradoresEnergia = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/GeradoresEnergia/GeradoresEnergia');
const MaquinasRefrigeracao = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/MaquinasRefrigeracao/MaquinasRefrigeracao');


export default function Renascimento() {
  
  const navigate = useNavigate();
  
  const { balance, setNotificationType, gpsRebirth, gpcRebirth, gpcRebirthBoost, gpsRebirthBoost, rebirthPoints, setVariables, levelRebirthBoost, levelRebirth, muted, setActiveTheme, setActiveColor } = useContext(ValuesContext);
  const { maxValueRebirth, specialGpsBoostStatus, specialGpcBoostStatus, specialLevelBoostStatus, disableEffect } = useContext(ValuesContext);
  const { generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);

  const [ checked, setChecked ] = useState(false);
  const [ playVideo, setPlayVideo ] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function rebirth() {
    const upgradesGroup = [ upgradesGps.gpsList, upgradesGpc.gpcList, specialUpgrades.specialUpgradesList, specialUpgradesRebirth.specialUpgradeRebirthList, PlacaDeVideo.PlacaDeVideoList, GeradoresEnergia.GeradoresEnergiaList, MaquinasRefrigeracao.MaquinasRefrigeracaoList ];
    
    if(checked && balance >= 20000000000) {
      setPlayVideo(true);
      setActiveTheme(1);
      setActiveColor(1);
      await sleep(100);
      let video = document.getElementById("video");
      video.play();
      await sleep(9000);
      var highestTimeoutId = setTimeout(";");
      for (var i = 0 ; i < highestTimeoutId ; i++) {
        clearTimeout(i);
      }
      await sleep(100);
      localStorage.clear();
      await sleep(100);
      localStorage.clear();
      await sleep(100);
      localStorage.clear();
      await sleep(100);
      setVariables(
        [
          { 
            currency: { 
              balance: 0.00,
              btcAmount: 0.00000000,
              dollarBalance: 800.00,
              dollarAmountConvert: 0.00,
              minedAmount: 0.00000000,
            },
            advancedMining: {
              miningPower: 0.00,
              miningPowerEnergyDecrease: 1.00,
              miningPowerTempDecrease: 1.00,
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
            },
            config: {
              muted: muted,
              disableEffect: disableEffect,
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
    <motion.div  className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <AbrirMenuEfeito/>
      {playVideo ? <div className={styles.videoContainer}><video id="video" width="100%" height="100%"><source src={renascimentoVideo} type="video/mp4"></source></video></div> : <><NomePagina icon={<GiDragonOrb/>} name="RENASCIMENTO"/>
        <DisplayDinheiroXP/>
        <div className={styles.displayContainer}>
          <div className={styles.topInfo}>
            <div className={styles.displayLeft}>
              <div data-tip="Este é o valor mínimo necessário para<br>o renascimento! Por enquanto é um valor fixo." className={styles.iconContainer}>
                <p className={styles.iconLeft}>{<GiCurlyWing/>}</p>
                <p className={styles.icon}>{<GiTakeMyMoney/>}</p>
                <p className={styles.iconRight}>{<GiCurlyWing/>}</p>
              </div>
              <div className={styles.textContainer}>
                <p className={styles.text}>VALOR PARA RENASCIMENTO</p>
              </div>
            </div>
            <div className={styles.displayRight}>
              <div data-tip="Com estes pontos de renascimento você pode<br>comprar melhorias únicas e permanentes que ajudam<br>a evoluir mais rápido ao renascer." className={styles.iconContainer}>
                <p className={styles.iconHeart}>{<GiHeartWings/>}</p>
              </div>
              <div className={styles.textContainer}>
                <p className={styles.text}>PONTOS DE RENASCIMENTO</p>
              </div>
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <div className={styles.dataContainer}>
              <p className={styles.textValue}>20 BILHÕES</p>
            </div>
            <div className={`${styles.dataContainer} ${styles.marginLeft}`}>
              <p className={styles.textValue}>{rebirthPoints + " RN"}</p>
            </div>
          </div>
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.innerText}><GiDragonOrb/>&nbsp;BÔNUS DE RENASCIMENTO&nbsp;<GiDragonOrb/></p>
        </div>
        <div className={styles.containerBonus}>
          <DisplayBonus dataTip="Este bônus será aplicado ao seu GPC quando renascer, caso<br> já tenha renascido uma vez, o bônus anteiror será<br>somado ao bônus atual. Este bônus também é permanente.<br><br>O valor máximo por renascimento é 300%" icon={<GiArrowCursor/>} title="BÔNUS DE GPC" middle={false} value={gpcRebirth.toFixed(2)} />
          <DisplayBonus dataTip="Este bônus será aplicado ao seu GPS quando renascer, caso<br> já tenha renascido uma vez, o bônus anteiror será<br>somado ao bônus atual. Este bônus também é permanente.<br><br>O valor máximo por renascimento é 300%" icon={<AiFillClockCircle/>} title="BÔNUS DE GPS" middle={true} value={gpsRebirth.toFixed(2)} />
          <DisplayBonus dataTip="Este bônus será aplicado ao seu XPC quando renascer, caso<br> já tenha renascido uma vez, o bônus anteiror será<br>somado ao bônus atual. Este bônus também é permanente.<br><br>O valor máximo por renascimento é 300%" icon={<GiDoubleRingedOrb/>} title="BÔNUS DE XPC" middle={false} value={levelRebirth.toFixed(2)} />
        </div>
        <motion.button
          data-tip="Ao clicar em renascer, todo o seu progresso atual será perdido, incluindo<br>melhorias especiais, dinheiro, melhorias comuns e bitcoins. <br>Em troca, você ganhará todos os bônus listados acima, caso você já tenha renascido antes, o <br>bônus atual será somado ao bônus anterior!"
          className={styles.rebirthButton}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => rebirth()}
        >
          RENASCER
        </motion.button>
        <div className={styles.generalCheckboxContainer}>
          <div className={styles.checkboxContainer}>
            <label className={styles.containerCb}>
              <input type="checkbox" name="translateRadio" onChange={() => setChecked(!checked)} />
              <span className={styles.checkmark}></span>
            </label>
            <p className={styles.checkBoxText}>LI E ESTOU CIENTE!</p>
          </div>
        </div>
        </>
      }
    </motion.div>
  );
}