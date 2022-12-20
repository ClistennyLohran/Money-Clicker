import styles from './InvestimentoBitcoin.module.css';

import { motion } from 'framer-motion';

import { useContext, useEffect, useState } from 'react';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { AdvancedMiningContext } from '../../contexts/AdvancedMiningContext/AdvancedMiningContext';

/* Importação de Ícones */
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { GiBatteries, GiMineWagon, GiGreenPower, GiMiningHelmet, GiEnergise, GiWarPick, GiMiner } from 'react-icons/gi';
import { SiBitcoinsv, SiConvertio } from 'react-icons/si';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { AiFillThunderbolt } from 'react-icons/ai';
import { TiArrowRepeat } from 'react-icons/ti';
import { FaArrowUp, FaTemperatureHigh, FaCashRegister } from 'react-icons/fa';

/* Tooltip */
import ReactTooltip from 'react-tooltip';
import InfoDisplayBitcoin from '../../components/BitcoinComponents/InfoDisplayBitcoin/InfoDisplayBitcoin';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import NomePagina from '../../components/NomePagina/NomePagina';
import DisplayLeft from '../../components/BitcoinComponents/DisplayLeft/DisplayLeft';
import DisplayRight from '../../components/BitcoinComponents/DisplayRight/DisplayRight';
import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';

/* Rotas */
import { Link } from 'react-router-dom';

export default function AdvancedMining() {
  
  const { minedAmount, setMinedAmount, dollarAmountConvert, setDollarAmountConvert, btcAmount, setBtcAmount, dollarBalance, setDollarBalance, setNotificationType } = useContext(ValuesContext);
  const { generalUpgrades, specialLevelBoostStatus, setClickAmount, clickAmount, xpAmountPerClick, levelBoost, specialLevelBoost, levelRebirthBoost, levelMultiply } = useContext(ValuesContext);
  const { miningPower, setMiningPower, energyPower, setEnergyPower, energyPowerUsed, setEnergyPowerUsed, temperature, setTemperature, temperatureDecrease, setTemperatureDecrease, miningBusinessName, miningPowerDecrease, setMiningPowerDecrease } = useContext(AdvancedMiningContext);
  const { energyEconomy, setEnergyEconomy, miningPowerBoost, setMiningPowerBoost, miningPowerMultiply, setMiningPowerMultiply, energyPowerBoost, setEnergyPowerBoost, energyPowerMultiply, setEnergyPowerMultiply, manualMiningBoost } = useContext(AdvancedMiningContext);

  const [ temperatureAlert, setTemperatureAlert ] = useState('Temperatura agradável!');
  const [ sendAlert, setSendAlert ] = useState(0);

  const [ arrowIcon, setArrowIcon ] = useState(<RiArrowDownSFill/>);
  const [ infoStatus, setInfoStatus ] = useState(0);

  const changeInfoStatus = () => {
    if(infoStatus === 0) {
      setInfoStatus(1);
      return;
    }
    setInfoStatus(0);
  }

  useEffect(() => {
    let infoDisplayContainer = document.getElementById('infoDisplayContainer');
    let showInfoGrid = document.getElementById('showInfoGrid');

    if(infoStatus === 1) {
      setArrowIcon(<RiArrowUpSFill/>);
      infoDisplayContainer.style.height = "320px";
      infoDisplayContainer.style.width = "560px";
      showInfoGrid.style.opacity = "1";
      showInfoGrid.style.pointerEvents = "all";
      showInfoGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
      showInfoGrid.style.height = "220px";
      showInfoGrid.style.left = "0";
      showInfoGrid.style.top = "80px";
      return;
    } else {
      setArrowIcon(<RiArrowDownSFill/>);
      infoDisplayContainer.style.height = "80px";
      infoDisplayContainer.style.width = "560px";
      showInfoGrid.style.opacity = "0";
      showInfoGrid.style.pointerEvents = "none";
      showInfoGrid.style.left = "-1600px";
      showInfoGrid.style.top = "-220px";
    }
    
  }, [infoStatus]);

  useEffect(() => {
    if(((temperature + 26) - temperatureDecrease) >= 50 && ((temperature + 26) - temperatureDecrease) < 90) {
      setTemperatureAlert('Alerta de Temperatura: Esta temperatura é prejudicial, compre mais melhorias de refrigeramento, seu poder de mineração foi reduzido em 50%!');
      setMiningPowerDecrease(0.50);
      setSendAlert(1);
    } else if(((temperature + 26) - temperatureDecrease) >= 90) {
      setTemperatureAlert('Alerta de Temperatura: Temperatura extremamente prejudicial, toda as placas foram desligadas por segurança.');
      setMiningPowerDecrease(0);
      setSendAlert(1);
    } else if(((temperature + 26) - temperatureDecrease) <= -20) {
      setTemperatureAlert('Alerta de Temperatura: Está frio demais, as placas de vídeo não conseguem mais trabalhar, todas as placas foram desligadas por segurança.');
      setMiningPowerDecrease(0);
      setSendAlert(1);
    } else if(energyPower === 0) {
      setTemperatureAlert('Alerta de Energia: Você não está gerando energia, compre um gerador para começar a minerar Bitcoins.');
      setMiningPowerDecrease(0);
      setSendAlert(1);
    } else if((energyPowerUsed * energyEconomy) > ((energyPower * energyPowerBoost) * energyPowerMultiply) && (energyPowerUsed * energyEconomy) <= (((energyPower * energyPowerBoost) * energyPowerMultiply) + 200)) {
      setTemperatureAlert('Alerta de Energia: Você está gerando uma leve sobrecarga na energia, seu poder de mineração foi reduzido em 50%!');
      setMiningPowerDecrease(0.50);
      setSendAlert(1);
    } else if((energyPowerUsed * energyEconomy) > (((energyPower * energyPowerBoost) * energyPowerMultiply) + 200)) {
      setTemperatureAlert('Alerta de Energia: Você está gerando uma sobrecarga grave de energia, toda a sua produção foi desligada por segurança.');
      setMiningPowerDecrease(0);
      setSendAlert(1);
    } else {
      setTemperatureAlert('Temperatura agradável!');
      setMiningPowerDecrease(1);
      setSendAlert(0);
    }
  }, [temperatureDecrease, temperature, miningPowerDecrease, energyPowerUsed, energyPower]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let awakeBtn = document.getElementById('awakeBtn');

    const awakeStore = async () => {
      await sleep(1000);
      awakeBtn.style.opacity = "1";
    }

    awakeStore();
  }, []);

  const convertDolar = () => {
    if(dollarAmountConvert >= 10) {
      setDollarBalance(dollarBalance => dollarBalance + dollarAmountConvert);
      setBtcAmount(0.00000000);
      setDollarAmountConvert(0);
    }
  }

  function minerar() {
    if(specialLevelBoostStatus === 1) {
      setClickAmount(clickAmount => clickAmount + ((xpAmountPerClick * ((levelBoost + specialLevelBoost) + levelRebirthBoost)) * levelMultiply)); // PARA O XP COM REBIRTH BOOST
    }else {
      setClickAmount(clickAmount => clickAmount + ((xpAmountPerClick * (levelBoost + levelRebirthBoost)) * levelMultiply)); // PARA O XP
    }
    setMinedAmount(v => v + (0.00000005 * (miningPower == 0 ? 1 : 0.00000005 + ((miningPower / 35) * manualMiningBoost) * miningPowerMultiply)));
  }

  function sendMinedValue() {
    if(minedAmount >= 0.00000500) {
      setBtcAmount(v => v + minedAmount);
      setMinedAmount(0);
    }else {
      setNotificationType(16);
    }
  }

  const mineracaoManualButton = <motion.button className={styles.manualMiningButton} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} onClick={() => minerar()}>{<GiMineWagon/>}&nbsp;MINERAÇÃO MANUAL&nbsp;{<GiMineWagon/>}</motion.button>
  const infoDisplayButton = <motion.button  className={styles.infoDisplayBtn} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} onClick={() => changeInfoStatus()}> <p className={styles.arrowBtnIcon}>{arrowIcon}</p>&nbsp;PAINEL DE INFORMAÇÕES&nbsp;<p className={styles.arrowBtnIcon}>{arrowIcon}</p></motion.button>

  return (
    <motion.div id="container" className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <Link to="/lojabitcoin"><button id="awakeBtn" data-tip="Acesso rápido para loja de melhorias Bitcoin!" className={styles.storeBtn} ><FaCashRegister/></button></Link>
      <NomePagina icon={<SiBitcoinsv/>} name={miningBusinessName}/>
      <DisplayDinheiroXP/>
      <div className={styles.middleInfosContainer}>
        <div className={styles.leftItems}>
          <DisplayLeft dataTip="Seu valor total em Bitcoins." converterStatus={false} icon={<BsCurrencyBitcoin/>} title="BITCOIN" value={btcAmount} formatter={1} position={1} />
          <DisplayLeft dataTip="A quantidade de energia sendo gerada atualmente." converterStatus={false} icon={<AiFillThunderbolt/>} title="ENERGIA GERADA" value={(energyPower * energyPowerBoost) * energyPowerMultiply} formatter={2} position={2} />
          <DisplayLeft dataTip="Quanto seus bitcoins valem em dólares." converterStatus={true} buttonFunction={convertDolar} convertIcon={<SiConvertio/>} icon={<TiArrowRepeat/>} title="BITCOIN EM DÓLARES" value={dollarAmountConvert} formatter={3} position={1} />
        </div>
        <div className={styles.giantBitcoin}>
          <p className={styles.icon}><BsCurrencyBitcoin/></p>
        </div>
        <div className={styles.leftItems}>
          <DisplayRight dataTip="Poder de mineração total de todas as placas<br>de vídeo somadas." converterStatus={false} icon={<GiMiner/>} title="PODER DE MINERAÇÃO" value={((miningPower * miningPowerBoost) * miningPowerMultiply) * miningPowerDecrease} formatter={1} position={1} />
          <DisplayRight dataTip="Quanta energia suas placas estão utilizando no total." converterStatus={false} icon={<AiFillThunderbolt/>} title="ENERGIA UTILIZADA" value={energyPowerUsed * energyEconomy} formatter={2} position={2} />
          <DisplayRight dataTip="Seus Bitcoins minerados manualmente." converterStatus={true} buttonFunction={sendMinedValue} convertIcon={<FaArrowUp/>} icon={<GiMineWagon/>} title="MINERAÇÃO MANUAL" value={minedAmount} formatter={3} position={1} />
        </div>
      </div>
      <div className={styles.temperatureContainer}>
        <p className={styles.title}><FaTemperatureHigh/>&nbsp;TEMPERATURA DO AMBIENTE&nbsp;<FaTemperatureHigh/></p>
        <div className={styles.progressContainer}>
          <p className={styles.progressValue}><AnimatedNumber value={(temperature + 26) - temperatureDecrease} formatValue={v => v.toFixed(1) + " C°"} duration={300}/></p>
          <progress className={((temperature + 26) - temperatureDecrease) > 50 ? styles.temperatureCritical : styles.temperatureProgress} value={(temperature + 26) - temperatureDecrease} max={50}></progress>
        </div>
      </div>
      <div className={styles.mineracaoManualContainer}>
        {mineracaoManualButton}
        <div className={styles.minedAmountDisplay}>
          <p className={styles.minedAmount}>{(0.00000005 * (miningPower == 0 ? 1 : ((miningPower / 35) * manualMiningBoost) * miningPowerMultiply)).toFixed(8)} BTC</p>
        </div>
      </div>
      <div id="infoDisplayContainer" className={styles.infoDisplayContainer}>
        {infoDisplayButton}
        <div id="showInfoGrid" className={styles.showInfoGrid}>
          <InfoDisplayBitcoin dataTip="Multiplica a quantidade<br>gerada de energia." title="MULTIPLICADOR DE ENERGIA" value={energyPowerMultiply.toFixed(2) + "x"} icon={<GiBatteries/>} />
          <InfoDisplayBitcoin dataTip="Acrescenta um bônus em<br>porcentagem na energia gerada." title="BÔNUS DE ENERGIA" value={((energyPowerBoost - 1) * 100).toFixed(2) + "%"} icon={<GiEnergise/>} />
          <InfoDisplayBitcoin dataTip="Multiplica o seu poder<br>de mineração." title="MULTIPLICADOR DE MP/s" value={miningPowerMultiply.toFixed(2) + "x"} icon={<GiMineWagon/>} />
          <InfoDisplayBitcoin dataTip="Acrescenta um bônus em<br>porcentagem no seu poder<br>de mineração." title="BÔNUS DE MP/s" value={((miningPowerBoost - 1) * 100).toFixed(2) + "%"} icon={<GiWarPick/>} />
          <InfoDisplayBitcoin dataTip="Desconta um valor em<br>porcentagem na sua energia<br>usada." title="ECONOMIA DE ENERGIA" value={(((energyEconomy - 1) * -1) * 100).toFixed(2) + "%"} icon={<GiGreenPower/>} />
          <InfoDisplayBitcoin dataTip="Acrescenta um bônus em<br>porcentagem na sua<br>mineração manual." title="BÔNUS MINERAÇÃO MANUAL" value={((manualMiningBoost - 1) * 100).toFixed(2) + "%"} icon={<GiMiningHelmet/>} />
        </div>
      </div>
    </motion.div>
  );
}