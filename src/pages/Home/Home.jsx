import styles from './Home.module.css';
import { motion } from 'framer-motion';

import MoneyFormatter from '../../Formatter/MoneyFormatter';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { useContext, useState } from 'react';

import { useEffect } from 'react';

import ReactTooltip from 'react-tooltip';

import { GiCash, GiDoubleRingedOrb, GiArrowCursor, GiHeartWings, GiStarFormation, GiUpgrade } from 'react-icons/gi';
import { AiFillBulb, AiFillClockCircle } from 'react-icons/ai';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { FaCashRegister } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';

import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import NomePagina from '../../components/NomePagina/NomePagina';
import HomeInfoDisplay from '../../components/HomeInfoDisplay/HomeInfoDisplay';
import HomeInfoPorcentagem from '../../components/HomeInfoPorcentagem/HomeInfoPorcentagem';
import HomeInfoPorcentagemRenascimento from '../../components/HomeInfoPorcentagemRenascimento/HomeInfoPorcentagemRenascimento';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

/* Song Import */
import Click01 from '../../songs/Click01.mp3';
import Click02 from '../../songs/Click02.mp3';
import Click03 from '../../songs/Click03.mp3';
import Click04 from '../../songs/Click04.mp3';
import Click05 from '../../songs/Click05.mp3';
import Click06 from '../../songs/Click06.mp3';
import Click07 from '../../songs/Click07.mp3';
import Click08 from '../../songs/Click08.mp3';

import { Link } from 'react-router-dom';

import MenuSwitchEffect from '../../songs/MenuSwitchClick.mp3';
import Theme from '../../songs/MainMusic.mp3';
import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';

import SpecialUpgrades from '../../components/SpecialUpgrades/SpecialUpgrades';
import SpecialUpgradeItem from '../../components/CompUpgrades/ItemMelhoriaEspecial/ItemMelhoriaEspecial';

const SpecialUpgradesData = require('../../UpgradeObjects/SpecialUpgrade/SpecialUpgradesData');
const SpecialUpgradesRebirthData = require('../../UpgradeObjects/SpecialUpgradeRebirth/SpecialUpgradesRebirthData');

export default function Home() {
  const { comboDisplayTime, setComboDisplayTime, setClickingStatus, comboValue, setComboValue, comboMultiplier, setComboMultiplier, tipMessage, audioCounter, setAudioCounter, playState, setPlayState, levelRebirth, setLevelRebirth, setClickAmount, setTotalClickAmount, balance, gpcValue, businessName, gpsValue, gpcMultiply, gpcBoost, gpsBoost, gpsMultiply, setGpsRebirth, setGpcRebirth, gpsRebirth, gpcRebirth, gpcRebirthBoost, gpsRebirthBoost, levelRebirthBoost, generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);
  const { specialGpcBoost, specialGpsBoost, specialLevelBoost, openCloseLeftState, setOpenCloseLeftState, openCloseRightState, setOpenCloseRightState } = useContext(ValuesContext);
  const { specialGpcBoostStatus, specialGpsBoostStatus, specialLevelBoostStatus } = useContext(ValuesContext);
  const { maxValueRebirth, xpAmountPerClick, levelMultiply, levelBoost, disableEffect } = useContext(ValuesContext);

  const playSong = () => {
    let MenuSwitch = new Audio(MenuSwitchEffect);

    MenuSwitch.play();
  }

  useEffect(() => {
    if(playState) {
      if(audioCounter === 0) {
        let ThemeSong = new Audio(Theme);

        ThemeSong.play();
        ThemeSong.loop = "true";

        setAudioCounter(1);
      }
    }
  }, [playState, audioCounter]);

  const soundEvent = () => {
    /* Audio Play */
    switch(Math.floor(Math.random() * 7)) {
      case 0:
        let click01 = new Audio(Click01);
        click01.play();
        return;
      case 1:
        let click02 = new Audio(Click02);
        click02.play();
        return;
      case 2:
        let click03 = new Audio(Click03);
        click03.play();
        return;
      case 3:
        let click04 = new Audio(Click04);
        click04.play();
        return;
      case 4:
        let click05 = new Audio(Click05);
        click05.play();
        return;
      case 5:
        let click06 = new Audio(Click06);
        click06.play();
        return;
      case 6:
        let click07 = new Audio(Click07);
        click07.play();
        return;
      case 7:
        let click08 = new Audio(Click08);
        click08.play();
        return;
    }
  }

  function clickEvent() {
    setComboDisplayTime(3);
    setClickingStatus(1);

    if(specialGpcBoostStatus === 1) {
      setComboValue(v => v + ((gpcValue * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply)); // PARA O DINHEIRO COM REBIRTH BOOST
    }else {
      setComboValue(v => v + ((gpcValue * (gpcBoost + gpcRebirthBoost)) * gpcMultiply)); // PARA O DINHEIRO
    }

    if(specialLevelBoostStatus === 1) {
      setClickAmount(clickAmount => clickAmount + ((xpAmountPerClick * ((levelBoost + specialLevelBoost) + levelRebirthBoost)) * levelMultiply)); // PARA O XP COM REBIRTH BOOST
    }else {
      setClickAmount(clickAmount => clickAmount + ((xpAmountPerClick * (levelBoost + levelRebirthBoost)) * levelMultiply)); // PARA O XP
    }
    
    setTotalClickAmount(totalClickAmount => totalClickAmount + 1);
    if(gpcRebirth >= maxValueRebirth) {
      setGpcRebirth(maxValueRebirth);
    }else {
      setGpcRebirth(prevGpcRebirth => prevGpcRebirth + (balance * 0.000000000000001));
    }

    if(gpsRebirth >= maxValueRebirth) {
      setGpsRebirth(maxValueRebirth);
    }else {
      setGpsRebirth(prevGpsRebirth => prevGpsRebirth + (balance * 0.000000000000002));
    }

    if(levelRebirth >= maxValueRebirth) {
      setLevelRebirth(maxValueRebirth);
    }else {
      setLevelRebirth(prevGpsRebirth => prevGpsRebirth + (balance * 0.000000000000001));
    }
  }

  useEffect(() => {
    if(gpcRebirth >= maxValueRebirth) {
      setGpcRebirth(maxValueRebirth);
    }
    if(gpsRebirth >= maxValueRebirth) {
      setGpsRebirth(maxValueRebirth);
    }
    if(levelRebirth >= maxValueRebirth) {
      setLevelRebirth(maxValueRebirth);
    }
  }, [gpcRebirth, gpsRebirth, levelRebirth]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if(disableEffect) {
      let btnInvest = document.getElementById('btnInvest');
      let container = document.getElementById('container');
  
      btnInvest.onclick = async (e) => {
        let number = document.createElement('p');
        number.className = `${styles.number}`;
        if(specialGpcBoostStatus === 1) {
          number.innerText = `${MoneyFormatter(((gpcValue * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply))}`;
        }else {
          number.innerText = `${MoneyFormatter(((gpcValue * (gpcBoost + gpcRebirthBoost)) * gpcMultiply))}`;
        }
        number.style.pointerEvents = "none";
        number.style.transition = "none";
        number.style.position = "absolute";
        number.style.left = `${e.pageX - 35}px`;
        number.style.top = `${e.pageY - 30}px`;
        container.appendChild(number);
        await sleep(1500);
        container.removeChild(number);
      }
    }
  }, []);

  const openCloseL = () => {
    setOpenCloseLeftState(!openCloseLeftState);
  }

  const openCloseR = () => {
    setOpenCloseRightState(!openCloseRightState);
  }

  useEffect(() => {
    let leftPanel = document.getElementById('leftPanel');
    let rotateLeft = document.getElementById('rotateLeft');

    if(!openCloseLeftState) {
      leftPanel.style.right = "0px";
      rotateLeft.style.transform = "rotate(180deg)";
      return;
    }
    leftPanel.style.right = "-320px";
    rotateLeft.style.transform = "rotate(0deg)";
    return;
  }, [openCloseLeftState]);

  useEffect(() => {
    let rightPanel = document.getElementById('rightPanel');
    let rotateRight = document.getElementById('rotateRight');

    if(!openCloseRightState) {
      rightPanel.style.left = "0px";
      rotateRight.style.transform = "rotate(180deg)";
      return;
    }
    rightPanel.style.left = "-320px";
    rotateRight.style.transform = "rotate(0deg)";
    return;
  }, [openCloseRightState]);

  useEffect(() => {
    let awakeBtn = document.getElementById('awakeBtn');

    const awakeStore = async () => {
      await sleep(1000);
      awakeBtn.style.opacity = "1";
    }
    awakeStore();
  }, []);

  const [ openCloseState, setOpenCloseState ] = useState(false);

  const openCloseStoreFunc = () => {
    let storeContainer = document.getElementById('storeContainer');
    let rotateArrow = document.getElementById('rotateArrow');
    let itensListGrid = document.getElementById('itensListGrid');

    if(!openCloseState) {
      storeContainer.style.width = "460px";
      rotateArrow.style.transform = "rotate(180deg)";
      itensListGrid.style.opacity = "1";
      setOpenCloseState(v => !v);
      return;
    }
    storeContainer.style.width = "0px";
    rotateArrow.style.transform = "rotate(0deg)";
    itensListGrid.style.opacity = "0";
    setOpenCloseState(v => !v);
  }

  return (
    <motion.div id="container" className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <AbrirMenuEfeito/>
      <div id="storeContainer" className={styles.storeContainer}>
        <motion.button id="openCloseStore" onClick={() => openCloseStoreFunc()} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} className={styles.openCloseSide}><p id="rotateArrow" className={styles.arrowIcon}><IoIosArrowBack/></p></motion.button>
        <div className={styles.rightIcons}>
          <Link onClick={() => playSong()} to="/melhorias"><button id="awakeBtn" data-tip="Acesso rápido para loja de melhorias comuns!" className={styles.storeBtn} ><FaCashRegister/></button></Link>
        </div>
        <div id="itensListGrid" className={styles.itensListGrid}>
          <div className={styles.normalItens}>
            <SpecialUpgrades title="MELHORIAS ESPECIAIS" icon={<GiUpgrade/>}>
              {generalUpgrades[2].map(item => {
                return (
                  <SpecialUpgradeItem type={0} classId={item.classId} tooltip={item.tooltip} key={item.id} id={item.id} title={SpecialUpgradesData} active={item.status} description={SpecialUpgradesData} icon={SpecialUpgradesData} value={item.value} upgradeType={0} />
                );
              })}
            </SpecialUpgrades>
          </div>
          <div className={styles.specialItens}>
            <SpecialUpgrades title="MELHORIAS DO RENASCIMENTO" icon={<GiUpgrade/>}>
              {generalUpgrades[3].map(item => {
                return (
                  <SpecialUpgradeItem type={1} classId={item.classId} tooltip={item.tooltip} key={item.id} id={item.id} title={SpecialUpgradesRebirthData} active={item.status} description={SpecialUpgradesRebirthData} icon={SpecialUpgradesRebirthData} value={item.value} upgradeType={1} />
                );
              })}
            </SpecialUpgrades>
          </div>
        </div>
      </div>
      <NomePagina icon={<GiCash/>} name={businessName}/>
      <DisplayDinheiroXP/>
      <div className={styles.infoPanelContainer}>
        <div id="leftPanel" className={styles.leftPanel}>
          <div className={styles.innerTitle}>
            <p><GiStarFormation/>&nbsp;PAINEL DE BÔNUS&nbsp;<GiStarFormation/></p>
          </div>
          <HomeInfoPorcentagem dataTip="Este bônus pode ser comprado na loja comum!" icon={<GiArrowCursor/>} title="BÔNUS DE GPC" value={specialGpcBoostStatus === 1 ? parseFloat(((gpcBoost + specialGpcBoost) * 100) - 100).toFixed(2) + "%" : parseFloat((gpcBoost * 100) - 100).toFixed(2) + "%"} />
          <HomeInfoPorcentagem dataTip="Este bônus pode ser comprado na loja comum!" icon={<AiFillClockCircle/>} title="BÔNUS DE GPS" value={specialGpsBoostStatus === 1 ? parseFloat(((gpsBoost + specialGpsBoost) * 100) - 100).toFixed(2) + "%" : parseFloat((gpsBoost * 100) - 100).toFixed(2) + "%"} />
          <HomeInfoPorcentagem dataTip="Este bônus pode ser comprado na loja comum!" icon={<GiDoubleRingedOrb/>} title="BÔNUS DE XPC" value={specialLevelBoostStatus === 1 ? parseFloat(((levelBoost + specialLevelBoost) * 100) - 100).toFixed(2) + "%" : parseFloat((levelBoost * 100) - 100).toFixed(2) + "%"} />
          <button id="openCloseLeft" className={`${styles.openCloseLeft} ${styles.openCloseButton}`} onClick={() => openCloseL()} ><span id="rotateLeft"><RiArrowLeftSLine/></span></button>
        </div>
        <div id="middle" className={styles.middle}>
          <div className={styles.innerTitle}>
            <p><AiFillBulb/>&nbsp;PAINEL DE INFORMAÇÕES&nbsp;<AiFillBulb/></p>
          </div>
          <div className={styles.innerInfosContainer}>
            <HomeInfoDisplay dataTip="Ganho por clique é o valor que você vai ganhar a<br>cada clique que der no botão de investir, o GPC será multiplicado<br>pelo Multiplicador sendo GPC x Multiplicador de GPC." icon={<GiArrowCursor/>} titleLeft="GANHO POR CLIQUE - GPC" formatter={1} valueLeft={((gpcValue * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply)} titleRight="MULTIPLICADOR DE GPC" valueRight={parseFloat(gpcMultiply).toFixed(2)} />
            <HomeInfoDisplay dataTip="Ganho por segundo é o valor que você vai ganhar a<br>cada segundo, o GPS será multiplicado<br>pelo Multiplicador sendo GPS x Multiplicador de GPS." icon={<AiFillClockCircle/>} titleLeft="GANHO POR SEGUNDO - GPS" formatter={1} valueLeft={((gpsValue * ((gpsBoost + specialGpsBoost) + gpsRebirthBoost)) * gpsMultiply)} titleRight="MULTIPLICADOR DE GPS" valueRight={parseFloat(gpsMultiply).toFixed(2)} />
            <HomeInfoDisplay dataTip="XP por clique é o valor que você vai ganhar em XP<br>cada clique que der no botão de investir, o XPC será multiplicado<br>pelo Multiplicador sendo XPC x Multiplicador de XPC." icon={<GiDoubleRingedOrb/>} titleLeft="XP POR CLIQUE - XPC" formatter={2} valueLeft={((xpAmountPerClick * ((levelBoost + specialLevelBoost) + levelRebirthBoost)) * levelMultiply).toFixed(2)} titleRight="MULTIPLICADOR DE XPC" valueRight={parseFloat(levelMultiply).toFixed(2)} />
          </div>
        </div>
        <div id="rightPanel" className={styles.rightPanel}>
          <div className={styles.innerTitle}>
            <p><GiHeartWings/>&nbsp;PAINEL DE BÔNUS RENASCIMENTO&nbsp;<GiHeartWings/></p>
          </div>
          <HomeInfoPorcentagemRenascimento dataTip="Este bônus só pode ser adquirido através do<br>renascimento, o mesmo é permanente e não é perdido ao renascer." icon={<GiArrowCursor/>} title="BÔNUS DE GPC DO RENASCIMENTO" value={specialGpcBoostStatus === 1 ? parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%" : parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%"} />
          <HomeInfoPorcentagemRenascimento dataTip="Este bônus só pode ser adquirido através do<br>renascimento, o mesmo é permanente e não é perdido ao renascer." icon={<AiFillClockCircle/>} title="BÔNUS DE GPS DO RENASCIMENTO" value={specialGpsBoostStatus === 1 ? parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%" : parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%"} />
          <HomeInfoPorcentagemRenascimento dataTip="Este bônus só pode ser adquirido através do<br>renascimento, o mesmo é permanente e não é perdido ao renascer." icon={<GiDoubleRingedOrb/>} title="BÔNUS DE XPC DO RENASCIMENTO" value={specialLevelBoostStatus === 1 ? parseFloat(levelRebirthBoost * 100).toFixed(2) + "%" : parseFloat(levelRebirthBoost * 100).toFixed(2) + "%"} />
          <button id="openCloseRight" className={`${styles.openCloseRight} ${styles.openCloseButton}`} onClick={() => openCloseR()} ><span id="rotateRight"><RiArrowRightSLine/></span></button>
        </div>
      </div>
      <div className={styles.tipsContainer}>
        <p className={styles.tipText}>{tipMessage}</p>
      </div>
      <div className={styles.comboDisplay}>
        <div data-tip="Se este valor chegar a zero, você perde o combo!<br>O valor adquirido será depositado na sua conta automaticamente." className={styles.timerDisplay}>
          <p className={styles.textTimer}>{comboDisplayTime}s</p>
        </div>
        <div data-tip="Este é o valor total, o seu combo já é aplicado no valor abaixo!" className={styles.valueDisplay}>
          <p className={styles.textValueDisplay}>COMBO TOTAL</p>
          <p className={styles.comboText}><AnimatedNumber value={comboValue * comboMultiplier} formatValue={v => MoneyFormatter(v)} duration={300} /></p>
        </div>
        <div data-tip="Aqui você pode ver o seu combo atual!<br><br>1.00x - Tempo menor que 30 segundos<br>1.25x - Tempo entre 30 e 60 segundos<br>1.50x - Tempo entre 1min a 2min<br>1.75x - Tempo entre 2min a 4min<br>2.00x - Tempo entre 4min a 10min<br>5.00x - Tempo entre 10min a 30min<br>10.00x - Tempo maior que 30min" className={styles.comboTextDisplay}>
          <p className={styles.textTimer}>{comboMultiplier.toFixed(2)}x</p>
        </div>
      </div>
      <motion.button id="btnInvest" className={styles.btnInvest} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} onClick={() => (clickEvent(), soundEvent(), setPlayState(true))}>INVESTIR</motion.button>
    </motion.div>
  );
}