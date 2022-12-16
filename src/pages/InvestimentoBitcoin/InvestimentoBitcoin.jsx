import styles from './InvestimentoBitcoin.module.css';

import { motion } from 'framer-motion';

import { useContext, useEffect } from 'react';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { AdvancedMiningContext } from '../../contexts/AdvancedMiningContext/AdvancedMiningContext';

import AnimatedNumber from '../../AnimatedNumber/AnimatedNumber';

/* Importação de Ícones */
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { GiGoldMine, GiBatteries, GiMiner, GiMoneyStack, GiIceCube, GiMineWagon, GiGreenPower, GiMiningHelmet, GiEnergise, GiWarPick } from 'react-icons/gi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { TiArrowRepeat } from 'react-icons/ti';
import { HiLightningBolt } from 'react-icons/hi';
import { FaTemperatureHigh, FaQuestion, FaArrowUp } from 'react-icons/fa';
import { SiBitcoinsv, SiConvertio } from 'react-icons/si';
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';

/* Formatadores de Dinheiro */
import MoneyDollarFormatter from '../../Formatter/MoneyDollarFormatter';
import ValueFormatter from '../../Formatter/ValueFormatter';
import PoderMineracaoFormatter from '../../Formatter/PoderMineracaoFormatter';

/* Components */
import ContainerPlacaDeVideo from '../../components/BitcoinComponents/ContainerPlacaDeVideo/ContainerPlacaDeVideo';
import MelhoriaPlacaDeVideo from '../../components/BitcoinComponents/MelhoriaPlacaDeVideo/MelhoriaPlacaDeVideo';

import MelhoriaGerador from '../../components/BitcoinComponents/MelhoriaGerador/MelhoriaGerador';
import MelhoriaRefrigeracao from '../../components/BitcoinComponents/MelhoriaRefrigeracao/MelhoriaRefrigeracao';
import { useState } from 'react';
import Nivel from '../../components/Nivel/Nivel';

/* Tooltip */
import ReactTooltip from 'react-tooltip';
import InfoDisplayBitcoin from '../../components/BitcoinComponents/InfoDisplayBitcoin/InfoDisplayBitcoin';

/* Data Lists */
const GeradoresEnergiaData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/GeradoresEnergia/GeradoresEnergiaData');
const MaquinasRefrigeracaoData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/MaquinasRefrigeracao/MaquinasRefrigeracaoData');

export default function AdvancedMining() {
  
  const { minedAmount, setMinedAmount, dollarAmountConvert, setDollarAmountConvert, btcAmount, setBtcAmount, dollarBalance, setDollarBalance, setNotificationType } = useContext(ValuesContext);
  const { generalUpgrades, specialLevelBoostStatus, setClickAmount, clickAmount, xpAmountPerClick, levelBoost, specialLevelBoost, levelRebirthBoost, levelMultiply } = useContext(ValuesContext);
  const { miningPower, setMiningPower, energyPower, setEnergyPower, energyPowerUsed, setEnergyPowerUsed, temperature, setTemperature, temperatureDecrease, setTemperatureDecrease, miningBusinessName, miningPowerDecrease, setMiningPowerDecrease } = useContext(AdvancedMiningContext);
  const { energyEconomy, setEnergyEconomy, miningPowerBoost, setMiningPowerBoost, miningPowerMultiply, setMiningPowerMultiply, energyPowerBoost, setEnergyPowerBoost, energyPowerMultiply, setEnergyPowerMultiply, manualMiningBoost } = useContext(AdvancedMiningContext);

  const [ temperatureAlert, setTemperatureAlert ] = useState('Temperatura agradável!');
  const [ sendAlert, setSendAlert ] = useState(0);

  const [ arrowIcon, setArrowIcon ] = useState(<RiArrowDownSFill/>);
  const [ infoStatus, setInfoStatus ] = useState(0);
  const [ windowSize, setWindowSize ] = useState(window.innerWidth);

  useEffect(() => {
    let checkSize = setInterval(() => {
      setWindowSize(window.innerWidth);
    }, 200);

    return () => {
      clearInterval(checkSize);
    }
  }, [windowSize]);

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
      if(window.innerWidth > 880) {
        infoDisplayContainer.style.height = "340px";
        infoDisplayContainer.style.width = "810px";
        showInfoGrid.style.opacity = "1";
        showInfoGrid.style.pointerEvents = "all";
        showInfoGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
        showInfoGrid.style.height = "240px";
        showInfoGrid.style.left = "0";
      } else if(window.innerWidth > 480 && window.innerWidth <= 880) {
        infoDisplayContainer.style.height = "600px";
        infoDisplayContainer.style.width = "400px";
        showInfoGrid.style.opacity = "1";
        showInfoGrid.style.pointerEvents = "all";
        showInfoGrid.style.gridTemplateColumns = "repeat(1, 1fr)";
        showInfoGrid.style.height = "500px";
        showInfoGrid.style.left = "0";
      } else {
        infoDisplayContainer.style.height = "520px";
        infoDisplayContainer.style.width = "260px";
        showInfoGrid.style.opacity = "1";
        showInfoGrid.style.pointerEvents = "all";
        showInfoGrid.style.gridTemplateColumns = "repeat(1, 1fr)";
        showInfoGrid.style.height = "420px";
        showInfoGrid.style.left = "0";
      }
      return;
    } else {
      setArrowIcon(<RiArrowDownSFill/>);
      if(window.innerWidth > 880) {
        infoDisplayContainer.style.height = "80px";
        infoDisplayContainer.style.width = "810px";
        showInfoGrid.style.opacity = "0";
        showInfoGrid.style.pointerEvents = "none";
        showInfoGrid.style.left = "-1600px";
      } else if(window.innerWidth > 480 && window.innerWidth <= 880) {
        infoDisplayContainer.style.height = "80px";
        infoDisplayContainer.style.width = "400px";
        showInfoGrid.style.opacity = "0";
        showInfoGrid.style.pointerEvents = "none";
        showInfoGrid.style.left = "-1600px";
      } else {
        infoDisplayContainer.style.height = "80px";
        infoDisplayContainer.style.width = "260px";
        showInfoGrid.style.opacity = "0";
        showInfoGrid.style.pointerEvents = "none";
        showInfoGrid.style.left = "-1600px";
      }
    }
    
  }, [infoStatus, windowSize]);

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

  useEffect(() => {
    let totalEnergyUsage = 0, totalMiningPower = 0, totalTemperature = 0;
    generalUpgrades[4].forEach(item => {
      totalEnergyUsage += Number((item.totalAtivo * item.usoEnergia) + ((item.overclockAtual * 0.03950) * item.totalAtivo));
      totalMiningPower += Number((item.totalAtivo * item.poderMineracao) + ((item.overclockAtual * 0.00288) * item.totalAtivo));
      totalTemperature += Number((item.totalAtivo * item.aumentoTemperatura) + ((item.overclockAtual * 0.00108) * item.totalAtivo));
    });
    setEnergyPowerUsed(totalEnergyUsage);
    setTemperature(totalTemperature);
    setMiningPower(totalMiningPower);
  }, [generalUpgrades[4]]);

  useEffect(() => {
    let totalEnergyGenerated = 0;
    generalUpgrades[5].forEach(item => {
      totalEnergyGenerated += Number(item.quantidadeAtiva * item.quantidadeGerada);
    });
    setEnergyPower(totalEnergyGenerated);
  }, [generalUpgrades[5]]);

  useEffect(() => {
    let totalTemperatureDecrease = 0;
    generalUpgrades[6].forEach(item => {
      totalTemperatureDecrease += Number(item.quantidadeAtiva * item.reducaoTemperatura);
    });
    setTemperatureDecrease(totalTemperatureDecrease);
  }, [generalUpgrades[6]]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    let convertBtn = document.getElementById('convertBtn');
    let container = document.getElementById('container');

    convertBtn.onclick = async (e) => {
      if(dollarAmountConvert >= 10) {
        let number = document.createElement('p');
        number.className = `${styles.number}`;
        number.innerText = `${MoneyDollarFormatter(dollarAmountConvert)}`;
        number.style.pointerEvents = "none";
        number.style.transition = "none";
        number.style.position = "absolute";
        number.style.left = `${e.pageX - 35}px`;
        number.style.top = `${e.pageY - 30}px`;
        container.appendChild(number);
        await sleep(2000);
        container.removeChild(number);
      }else {
        setNotificationType(11);
      }
    }
  }, [dollarAmountConvert]);

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

  return (
    <motion.div
      id="container"
      className={styles.center}
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <ReactTooltip 
        place="top"
        multiline={true}
      />
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{<SiBitcoinsv/>}&nbsp;{miningBusinessName}&nbsp;{<SiBitcoinsv/>}</p>
        </div>
        <Nivel/>
        <div className={styles.displaysContainer}>
          <div className={`${styles.infoContainer} ${styles.infoContainerMoney}`}>
            <div className={styles.iconContainer}>
              {<GiMoneyStack/>}
            </div>
            <div className={styles.valuesContainer}>
              <div data-tip="Este é o seu valor total em dólares<br>você pode comprar melhorias ou<br>converter para reais." className={styles.tooltip}>
                <p>{<FaQuestion/>}</p>
              </div>
              <p className={styles.valueName}><span className={styles.bold}>DINHEIRO EM DÓLARES</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber 
                  value={dollarBalance}
                  formatValue={v => MoneyDollarFormatter(v)}
                  duration={300}
                />
              </p>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.infoContainerBitcoin}`}>
            <div className={styles.iconContainer}>
              {<BsCurrencyBitcoin/>}
            </div>
            <div className={styles.valuesContainer}>
              <div data-tip="Esta é a sua quantia total em<br>bitcoins, você pode converter para dólares<br>e comprar novas melhorias." className={styles.tooltip}>
                <p>{<FaQuestion/>}</p>
              </div>
              <p className={styles.valueName}><span className={styles.bold}>BITCOINS</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber 
                  value={btcAmount}
                  formatValue={v => v.toFixed(8) + " BTC"}
                  duration={300}
                />
              </p>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.infoContainerMiningPower}`}>
            <div className={styles.iconContainer}>
              {<GiMiner/>}
            </div> 
            <div className={styles.valuesContainer}>
              <div data-tip="Este é o seu poder de mineração<br>quanto maior mais rápido você irá minerar<br>bitcoins, bônus e multiplicadores estão aplicados." className={styles.tooltip}>
                <p>{<FaQuestion/>}</p>
              </div>
              <p className={styles.valueName}><span className={styles.bold}>PODER DE MINERAÇÃO</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber 
                  value={((miningPower * miningPowerBoost) * miningPowerMultiply) * miningPowerDecrease}
                  formatValue={v => PoderMineracaoFormatter(v) + " MP/s"}
                  duration={300}
                />
              </p>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.infoContainerEnergy}`}>
            <div className={styles.iconContainer}>
              {<AiFillThunderbolt/>}
            </div>
            <div className={styles.valuesContainer}>
              <div data-tip="Energia total gerada e energia total<br>utilizada respectivamente, os bônus e<br>multiplicadores estão aplicados." className={styles.tooltip}>
                <p>{<FaQuestion/>}</p>
              </div>
              <p className={styles.valueName}><span className={styles.bold}>TOTAL GERANDO/UTILIZANDO</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber 
                  value={(energyPower * energyPowerBoost) * energyPowerMultiply}
                  formatValue={v => ValueFormatter(v) + " W"}
                  duration={300}
                /> 
                / 
                <AnimatedNumber 
                  value={energyPowerUsed * energyEconomy}
                  formatValue={v => ValueFormatter(v) + " W"}
                  duration={300}
                />
              </p>
            </div>
          </div>
        </div>

        <div className={styles.convertContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.iconContainer}>
              {<TiArrowRepeat/>}
            </div>
            <div className={styles.valuesContainer}>
              <p className={styles.valueName}><span className={styles.bold}>CONVERSÃO PARA DÓLARES</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber 
                  value={dollarAmountConvert}
                  formatValue={v => MoneyDollarFormatter(v)}
                  duration={300}
                />
              </p>
              <motion.button 
                id="convertBtn"
                className={styles.convertBtn}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                onClick={() => convertDolar()}
              >
                {<SiConvertio/>}
              </motion.button>
            </div>
          </div>

          <div className={styles.infoContainer}>
            <div className={styles.iconContainer}>
              {<GiGoldMine/>}
            </div>
            <div className={styles.valuesContainer}>
              <p className={styles.valueName}><span className={styles.bold}>MINERAÇÃO MANUAL</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber 
                  value={minedAmount}
                  formatValue={v => v.toFixed(8) + " BTC"}
                  duration={300}
                />
              </p>
              <motion.button 
                id="convertBtn"
                className={styles.convertBtn}
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                onClick={() => sendMinedValue()}
              >
                {<FaArrowUp/>}
              </motion.button>
            </div>
          </div>
        </div>

        <div className={styles.manualMiningBtnContainer}>
          <motion.button
            className={styles.boostMining}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
            onClick={() => minerar()}
          >
            <p className={styles.manualMiningText}>{<GiMineWagon/>}&nbsp;MINERAÇÃO MANUAL&nbsp;{<GiMineWagon/>}</p>
            <p className={styles.manualMiningValue}>+{(0.00000005 * (miningPower == 0 ? 1 : ((miningPower / 35) * manualMiningBoost) * miningPowerMultiply)).toFixed(8)} BTC</p>
          </motion.button>
        </div>

        <div className={styles.showTemperatureContainer}>
          <p className={styles.temperatureTitle}>{<FaTemperatureHigh/>}&nbsp;TEMPERATURA&nbsp;{<FaTemperatureHigh/>}</p>
          <div className={styles.progressContainer}>
            <p className={styles.progressValue}>
              <AnimatedNumber 
                value={(temperature + 26) - temperatureDecrease} 
                formatValue={v => v.toFixed(1) + " C°"} 
                duration={300}
              />
            </p>
            <progress className={((temperature + 26) - temperatureDecrease) > 50 ? styles.temperatureCritical : styles.temperatureProgress} value={(temperature + 26) - temperatureDecrease} max={50}></progress>
          </div>
          <div className={styles.showTemperatureAlert}>
            <p className={sendAlert ? styles.temperatureAlertProblem : styles.temperatureAlert}>{temperatureAlert}</p>
          </div>
        </div>

        <div id="infoDisplayContainer" className={styles.infoDisplayContainer}>
          <motion.button 
            className={styles.infoDisplayBtn}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
            onClick={() => changeInfoStatus()}
          >
            <p className={styles.arrowBtnIcon}>{arrowIcon}</p>&nbsp;PAINEL DE INFORMAÇÕES&nbsp;<p className={styles.arrowBtnIcon}>{arrowIcon}</p>
          </motion.button>
          <div id="showInfoGrid" className={styles.showInfoGrid}>
            <InfoDisplayBitcoin dataTip="Multiplica a quantidade<br>gerada de energia." title="MULTIPLICADOR DE ENERGIA" value={energyPowerMultiply.toFixed(2) + "x"} icon={<GiBatteries/>} />
            <InfoDisplayBitcoin dataTip="Acrescenta um bônus em<br>porcentagem na energia gerada." title="BÔNUS DE ENERGIA" value={((energyPowerBoost - 1) * 100).toFixed(2) + "%"} icon={<GiEnergise/>} />
            <InfoDisplayBitcoin dataTip="Multiplica o seu poder<br>de mineração." title="MULTIPLICADOR DE MP/s" value={miningPowerMultiply.toFixed(2) + "x"} icon={<GiMineWagon/>} />
            <InfoDisplayBitcoin dataTip="Acrescenta um bônus em<br>porcentagem no seu poder<br>de mineração." title="BÔNUS DE MP/s" value={((miningPowerBoost - 1) * 100).toFixed(2) + "%"} icon={<GiWarPick/>} />
            <InfoDisplayBitcoin dataTip="Desconta um valor em<br>porcentagem na sua energia<br>usada." title="ECONOMIA DE ENERGIA" value={(((energyEconomy - 1) * -1) * 100).toFixed(2) + "%"} icon={<GiGreenPower/>} />
            <InfoDisplayBitcoin dataTip="Acrescenta um bônus em<br>porcentagem na sua<br>mineração manual." title="BÔNUS MINERAÇÃO MANUAL" value={((manualMiningBoost - 1) * 100).toFixed(2) + "%"} icon={<GiMiningHelmet/>} />
          </div>
        </div>

        <ContainerPlacaDeVideo>
          {generalUpgrades[4].map(item => {
            return (
              <MelhoriaPlacaDeVideo key={item.id} id={item.id} item={item} />
            );
          })}
        </ContainerPlacaDeVideo>

        <div className={styles.gridContainer}>
          <div className={styles.containerEnergia}>
            <div className={styles.titleContainer}>
              <p className={styles.text}>{<HiLightningBolt/>}&nbsp;GERADORES DE ENERGIA&nbsp;{<HiLightningBolt/>}</p>
            </div>
            <div className={styles.innerContainer}>
              {generalUpgrades[5].map(item => {
                return (
                  <MelhoriaGerador key={item.id} id={item.id} item={item} nome={GeradoresEnergiaData} />
                );
              })}
            </div>
          </div>
          <div className={styles.containerRefrigeracao}>
            <div className={styles.titleContainer}>
              <p className={styles.text}>{<GiIceCube/>}&nbsp;REFRIGERAÇÃO DO AMBIENTE&nbsp;{<GiIceCube/>}</p>
            </div>
            <div className={styles.innerContainer}>
              {generalUpgrades[6].map(item => {
                return (
                  <MelhoriaRefrigeracao key={item.id} id={item.id} item={item} nome={MaquinasRefrigeracaoData} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}