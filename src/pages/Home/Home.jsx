import styles from './Home.module.css';
import { motion } from 'framer-motion';

import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';
import InfoDisplayBonus from '../../components/InfoDisplay/InfoDisplayBonus';

import MoneyFormatter from '../../Formatter/MoneyFormatter';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { useContext } from 'react';
import BalanceDisplay from '../../components/DisplayDinheiroReais/DisplayDinheiroReais';
import { useEffect } from 'react';

import ReactTooltip from 'react-tooltip';

import { FaMousePointer, FaMouse, FaClock, FaQuestion, FaTimes, FaLightbulb } from 'react-icons/fa';
import { GiJusticeStar, GiCash, GiConcentrationOrb, GiTriorb } from 'react-icons/gi';

import Nivel from '../../components/Nivel/Nivel';

export default function Home() {
  const { levelRebirth, setLevelRebirth, setClickAmount, setTotalClickAmount, balance, setBalance, gpcValue, businessName, gpsValue, gpcMultiply, gpcBoost, gpsBoost, gpsMultiply, setGpsRebirth, setGpcRebirth, gpsRebirth, gpcRebirth, gpcRebirthBoost, gpsRebirthBoost, levelRebirthBoost } = useContext(ValuesContext);
  const { specialGpcBoost, specialGpsBoost, specialLevelBoost } = useContext(ValuesContext);
  const { specialGpcBoostStatus, specialGpsBoostStatus, specialLevelBoostStatus } = useContext(ValuesContext);
  const { maxValueRebirth, xpAmountPerClick, levelMultiply, levelBoost } = useContext(ValuesContext);

  function clickEvent() {
    setBalance(prevBalance => prevBalance + ((gpcValue * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply)); // PARA O DINHEIRO
    setClickAmount(clickAmount => clickAmount + ((xpAmountPerClick * ((levelBoost + specialLevelBoost) + levelRebirthBoost)) * levelMultiply)); // PARA O XP
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
      await sleep(2000);
      container.removeChild(number);
    }
  }, []);

  return (
    <div id="container" className={styles.container}>
      <ReactTooltip 
        place="top"
        multiline={true}
      />
      <motion.div
        className={styles.center}
        animate={{ opacity: [0, 1], x: [-600, 0] }}
      >
        <div className={styles.titleContainer}>
          <p className={styles.topTitle}>{<GiCash/>}&nbsp;{businessName}&nbsp;{<GiCash/>}</p>
        </div>
        <Nivel/>
        <BalanceDisplay/>
        <div className={styles.infoPanelGrid}>
          <div className={styles.hideShow}>
            <div className={styles.infoPanel}>
              <p className={styles.infoPanelText}>{<GiJusticeStar/>}&nbsp;<span>PAINEL DE BÔNUS</span>&nbsp;{<GiJusticeStar/>}</p>
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados ao GPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Bônus de " titleBold="GPC" value={specialGpcBoostStatus === 1 ? parseFloat(((gpcBoost + specialGpcBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpcBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%"} />
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados ao GPS<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaClock/>} title="Bônus de " titleBold="GPS" value={specialGpsBoostStatus === 1 ? parseFloat(((gpsBoost + specialGpsBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpsBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%"} />
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados ao XPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<GiConcentrationOrb/>} title="Bônus de " titleBold="XPC" value={specialLevelBoostStatus === 1 ? parseFloat(((levelBoost + specialLevelBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(levelRebirthBoost * 100).toFixed(2) + "%" : parseFloat((levelBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(levelRebirthBoost * 100).toFixed(2) + "%"} />
            </div>
          </div>
          <div className={styles.infoPanel}>
            <p className={styles.infoPanelText}>{<FaLightbulb/>}&nbsp;<span>PAINEL DE INFORMAÇÕES</span>&nbsp;{<FaLightbulb/>}</p>
            <InfoDisplay datatip="GPC - Ganho por Clique<br><br>Este é o valor que você vai ganhar a cada clique.<br>Os bônus acima estão aplicados." tooltipIcon={<FaQuestion/>} title="Ganho por" titleBold="Clique - GPC" value={MoneyFormatter(((gpcValue * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply))} />
            <InfoDisplay datatip="GPS - Ganho por Segundo<br><br>Este é o valor que você ganha por segundo!<br>Os bônus acima estão aplicados." tooltipIcon={<FaQuestion/>} title="Ganho por" titleBold="Segundo - GPS" value={MoneyFormatter(((gpsValue * ((gpsBoost + specialGpsBoost) + gpsRebirthBoost)) * gpsMultiply))} />
            <InfoDisplay datatip="XPC - XP por Clique<br><br>Este é o valor de XP que você ganha por clique!<br>Os bônus acima estão aplicados." tooltipIcon={<FaQuestion/>} title="XP por" titleBold="Clique - XPC" value={"XP " +((xpAmountPerClick * ((levelBoost + specialLevelBoost) + levelRebirthBoost)) * levelMultiply).toFixed(2)} />
          </div>
          <div className={styles.hideShow}>
            <div className={styles.infoPanel}>
            <p className={styles.infoPanelText}>{<FaTimes/>}&nbsp;<span>PAINEL DE MULTIPLICADORES</span>&nbsp;{<FaTimes/>}</p>
              <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados ao GPC" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Mutiplicador de " titleBold="GPC" value={parseFloat(gpcMultiply).toFixed(2) + "x"} />
              <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados ao GPS" tooltipIcon={<FaQuestion/>} icon={<FaMouse/>} title="Multiplicador de " titleBold="GPS" value={parseFloat(gpsMultiply).toFixed(2) + "x"} />
              <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados ao XPC" tooltipIcon={<FaQuestion/>} icon={<GiTriorb/>} title="Multiplicador de " titleBold="XPC" value={parseFloat(levelMultiply).toFixed(2) + "x"} />
            </div>
          </div>
        </div>
        <motion.button
          id="btnInvest"
          className={styles.btnInvest}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => clickEvent()}
        >
          INVESTIR
        </motion.button>
        <div className={styles.gridContainer}>
          <div className={styles.infoPanel}>
            <p className={styles.infoPanelText}>{<GiJusticeStar/>}&nbsp;<span>PAINEL DE BÔNUS</span>&nbsp;{<GiJusticeStar/>}</p>
            <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados ao GPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Bônus de " titleBold="GPC" value={specialGpcBoostStatus === 1 ? parseFloat(((gpcBoost + specialGpcBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpcBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%"} />
            <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados ao GPS<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaClock/>} title="Bônus de " titleBold="GPS" value={specialGpsBoostStatus === 1 ? parseFloat(((gpsBoost + specialGpsBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpsBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%"} />
            <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados ao XPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<GiConcentrationOrb/>} title="Bônus de " titleBold="XPC" value={specialLevelBoostStatus === 1 ? parseFloat(((levelBoost + specialLevelBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(levelRebirthBoost * 100).toFixed(2) + "%" : parseFloat((levelBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(levelRebirthBoost * 100).toFixed(2) + "%"} />
          </div>

          <div className={styles.infoPanel}>
            <p className={styles.infoPanelText}>{<FaTimes/>}&nbsp;<span>PAINEL DE MULTIPLICADORES</span>&nbsp;{<FaTimes/>}</p>
            <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a GPC" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Mutiplicador de " titleBold="GPC" value={parseFloat(gpcMultiply).toFixed(2) + "x"} />
            <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a GPS" tooltipIcon={<FaQuestion/>} icon={<FaMouse/>} title="Multiplicador de " titleBold="GPS" value={parseFloat(gpsMultiply).toFixed(2) + "x"} />
            <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados ao XPC" tooltipIcon={<FaQuestion/>} icon={<GiTriorb/>} title="Multiplicador de " titleBold="XPC" value={parseFloat(levelMultiply).toFixed(2) + "x"} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}