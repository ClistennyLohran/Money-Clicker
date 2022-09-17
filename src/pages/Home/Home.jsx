import styles from './Home.module.css';
import { motion } from 'framer-motion';

import InfoDisplay from '../../components/InfoDisplay/InfoDisplay';
import InfoDisplayBonus from '../../components/InfoDisplay/InfoDisplayBonus';

import MoneyFormatter from '../../Formatter/MoneyFormatter';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { useContext } from 'react';
import BalanceDisplay from '../../components/BalanceDisplay/BalanceDisplay';
import { useEffect } from 'react';

import ReactTooltip from 'react-tooltip';

import { FaMousePointer, FaMouse, FaClock, FaQuestion, FaBtc } from 'react-icons/fa';

export default function Home() {
  const { balance, setBalance, gpcValue, mpcValue, businessName, gpsValue, gpcMultiply, gpcBoost, gpsBoost, gpsMultiply, setGpsRebirth, setGpcRebirth, setMpcRebirth, gpsRebirth, gpcRebirth, mpcRebirth, mpcBoost, mpcMultiply, gpcRebirthBoost, gpsRebirthBoost, mpcRebirthBoost, rebirthPoints, setRebirthPoints } = useContext(ValuesContext);
  const { specialGpcBoost, specialGpsBoost, specialMpcBoost } = useContext(ValuesContext);
  const { specialGpcBoostStatus, specialGpsBoostStatus, specialMpcBoostStatus } = useContext(ValuesContext);
  
  function clickEvent() {
    setBalance(parseFloat((balance + ((gpcValue * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply)).toFixed(2)));
    if(gpcRebirth >= 300) {
      setGpcRebirth(300);
    }else {
      setGpcRebirth(gpcRebirth + (balance * 0.000000000000001));
    }

    if(gpsRebirth >= 300) {
      setGpsRebirth(300);
    }else {
      setGpsRebirth(gpsRebirth + (balance * 0.000000000000001));
    }

    if(mpcRebirth >= 300) {
      setMpcRebirth(300);
    }else {
      setMpcRebirth(mpcRebirth + (balance * 0.000000000000001));
    }
  }

  useEffect(() => {
    if(gpcRebirth >= 300) {
      setGpcRebirth(300);
    }
    if(gpsRebirth >= 300) {
      setGpsRebirth(300);
    }
    if(mpcRebirth >= 300) {
      setMpcRebirth(300);
    }
  }, [gpcRebirth, gpsRebirth, mpcRebirth]);

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
        <div className={styles.title}>
          <p className={styles.topTitle}>{businessName}</p>
          <p className={styles.subtitle}>Sinta-se livre para Arriscar</p>
        </div>
        <BalanceDisplay/>
        <div className={styles.infoPanelGrid}>
          <div className={styles.hideShow}>
            <div className={styles.infoPanel}>
              <p className={styles.infoPanelText}>Painel de <span>Bônus</span></p>
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados a GPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Bônus de " titleBold="GPC" value={specialGpcBoostStatus === 1 ? parseFloat(((gpcBoost + specialGpcBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpcBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%"} />
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados a GPS<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaClock/>} title="Bônus de " titleBold="GPS" value={specialGpsBoostStatus === 1 ? parseFloat(((gpsBoost + specialGpsBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpsBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%"} />
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados a MPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaBtc/>} title="Bônus de " titleBold="MPC" value={specialMpcBoostStatus === 1 ? parseFloat(((mpcBoost + specialMpcBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(mpcRebirthBoost * 100).toFixed(2) + "%" : parseFloat((mpcBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(mpcRebirthBoost * 100).toFixed(2) + "%"} />
            </div>
          </div>
          <div className={styles.infoPanel}>
            <p className={styles.infoPanelText}>Painel de <span>Informações</span></p>
            <InfoDisplay datatip="GPC - Ganho por Clique<br><br>Este é o valor que você vai ganhar a cada clique.<br>Os bônus acima estão aplicados." tooltipIcon={<FaQuestion/>} title="Ganho por" titleBold="Clique - GPC" value={MoneyFormatter(((gpcValue * ((gpcBoost + specialGpcBoost) + gpcRebirthBoost)) * gpcMultiply))} />
            <InfoDisplay datatip="GPS - Ganho por Segundo<br><br>Este é o valor que você ganha por segundo!<br>Os bônus acima estão aplicados." tooltipIcon={<FaQuestion/>} title="Ganho por" titleBold="Segundo - GPS" value={MoneyFormatter(((gpsValue * ((gpsBoost + specialGpsBoost) + gpsRebirthBoost)) * gpsMultiply))} />
            <InfoDisplay datatip="MPC - Mineração por Ciclo<br><br>Este é o valor que você vai<br>ganhar a cada ciclo de mineração." tooltipIcon={<FaQuestion/>} title="Mineração por" titleBold="Ciclo - MPC" value={parseFloat((mpcValue * ((mpcBoost + specialMpcBoost) + mpcRebirthBoost)) * mpcMultiply).toFixed(5) + " BTC"} />
          </div>
          <div className={styles.hideShow}>
            <div className={styles.infoPanel}>
              <p className={styles.infoPanelText}>Painel de <span>Multiplicadores</span></p>
              <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a GPC" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Mutiplicador de " titleBold="GPC" value={parseFloat(gpcMultiply).toFixed(2) + "x"} />
              <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a GPS" tooltipIcon={<FaQuestion/>} icon={<FaMouse/>} title="Multiplicador de " titleBold="GPS" value={parseFloat(gpsMultiply).toFixed(2) + "x"} />
              <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a MPC" tooltipIcon={<FaQuestion/>} icon={<FaBtc/>} title="Mutiplicador de " titleBold="MPC" value={parseFloat(mpcMultiply).toFixed(2) + "x"} />
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
            <p className={styles.infoPanelText}>Painel de <span>Bônus</span></p>
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados a GPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Bônus de " titleBold="GPC" value={specialGpcBoostStatus === 1 ? parseFloat(((gpcBoost + specialGpcBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpcBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpcRebirthBoost * 100).toFixed(2) + "%"} />
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados a GPS<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaClock/>} title="Bônus de " titleBold="GPS" value={specialGpsBoostStatus === 1 ? parseFloat(((gpsBoost + specialGpsBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%" : parseFloat((gpsBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(gpsRebirthBoost * 100).toFixed(2) + "%"} />
              <InfoDisplayBonus datatip="Este bônus será aplicado a todos os seus<br>upgrades relacionados a MPC<br><br>O valor após o + é o Bônus do Rebirth" tooltipIcon={<FaQuestion/>} icon={<FaBtc/>} title="Bônus de " titleBold="MPC" value={specialMpcBoostStatus === 1 ? parseFloat(((mpcBoost + specialMpcBoost) * 100) - 100).toFixed(2) + "% + " + parseFloat(mpcRebirthBoost * 100).toFixed(2) + "%" : parseFloat((mpcBoost * 100) - 100).toFixed(2) + "% + " + parseFloat(mpcRebirthBoost * 100).toFixed(2) + "%"} />
          </div>

          <div className={styles.infoPanel}>
            <p className={styles.infoPanelText}>Painel de <span>Multiplicadores</span></p>
            <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a GPC" tooltipIcon={<FaQuestion/>} icon={<FaMousePointer/>} title="Mutiplicador de " titleBold="GPC" value={parseFloat(gpcMultiply).toFixed(2) + "x"} />
            <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a GPS" tooltipIcon={<FaQuestion/>} icon={<FaMouse/>} title="Multiplicador de " titleBold="GPS" value={parseFloat(gpsMultiply).toFixed(2) + "x"} />
            <InfoDisplayBonus datatip="Este multiplicador será aplicado a todos os seus<br>upgrades relacionados a MPC" tooltipIcon={<FaQuestion/>} icon={<FaBtc/>} title="Mutiplicador de " titleBold="MPC" value={parseFloat(mpcMultiply).toFixed(2) + "x"} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}