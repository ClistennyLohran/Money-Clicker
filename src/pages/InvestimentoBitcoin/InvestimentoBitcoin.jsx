import styles from './InvestimentoBitcoin.module.css';

import { motion } from 'framer-motion';

import { useContext, useEffect } from 'react';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { AdvancedMiningContext } from '../../contexts/AdvancedMiningContext/AdvancedMiningContext';

/* Importação de Ícones */
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { GiMiner, GiMoneyStack, GiIceCube } from 'react-icons/gi';
import { AiFillThunderbolt } from 'react-icons/ai';
import { TiArrowRepeat } from 'react-icons/ti';
import { HiLightningBolt } from 'react-icons/hi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { SiBitcoinsv } from 'react-icons/si';

/* Formatadores de Dinheiro */
import MoneyDollarFormatter from '../../Formatter/MoneyDollarFormatter';
import ValueFormatter from '../../Formatter/ValueFormatter';
import PoderMineracaoFormatter from '../../Formatter/PoderMineracaoFormatter';

/* Components */
import ContainerPlacaDeVideo from '../../components/BitcoinComponents/ContainerPlacaDeVideo/ContainerPlacaDeVideo';
import MelhoriaPlacaDeVideo from '../../components/BitcoinComponents/MelhoriaPlacaDeVideo/MelhoriaPlacaDeVideo';

/* Animated Number */
import AnimatedNumber from 'animated-number-react';
import MelhoriaGerador from '../../components/BitcoinComponents/MelhoriaGerador/MelhoriaGerador';
import MelhoriaRefrigeracao from '../../components/BitcoinComponents/MelhoriaRefrigeracao/MelhoriaRefrigeracao';
import { useState } from 'react';
import Nivel from '../../components/Nivel/Nivel';

/* Data Lists */
const GeradoresEnergiaData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/GeradoresEnergia/GeradoresEnergiaData');
const MaquinasRefrigeracaoData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/MaquinasRefrigeracao/MaquinasRefrigeracaoData');

export default function AdvancedMining() {
  
  const { dollarAmountConvert, btcAmount, dollarBalance } = useContext(ValuesContext);
  const { generalUpgrades } = useContext(ValuesContext);
  const { miningPower, setMiningPower, energyPower, setEnergyPower, energyPowerUsed, setEnergyPowerUsed, temperature, setTemperature, temperatureDecrease, setTemperatureDecrease, miningBusinessName, miningPowerDecrease, setMiningPowerDecrease } = useContext(AdvancedMiningContext);
  
  const [ temperatureAlert, setTemperatureAlert ] = useState('Temperatura agradável!');
  const [ sendAlert, setSendAlert ] = useState(0);

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
    } else if(energyPowerUsed > energyPower && energyPowerUsed <= (energyPower + 200)) {
      setTemperatureAlert('Alerta de Energia: Você está gerando uma leve sobrecarga na energia, seu poder de mineração foi reduzido em 50%!');
      setMiningPowerDecrease(0.50);
      setSendAlert(1);
    } else if(energyPowerUsed > (energyPower + 200)) {
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
      totalEnergyUsage += Number((item.totalAtivo * item.usoEnergia) + ((item.overclockAtual * 0.01950) * item.totalAtivo));
      totalMiningPower += Number((item.totalAtivo * item.poderMineracao) + ((item.overclockAtual * 0.00288) * item.totalAtivo));
      totalTemperature += Number((item.totalAtivo * item.aumentoTemperatura) + ((item.overclockAtual * 0.00118) * item.totalAtivo));
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

  return (
    <motion.div
      className={styles.center}
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
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
              <p className={styles.valueName}><span className={styles.bold}>DINHEIRO EM DÓLARES</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber
                  value={dollarBalance}
                  formatValue={v => MoneyDollarFormatter(v)}
                  duration={200}
                />
              </p>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.infoContainerBitcoin}`}>
            <div className={styles.iconContainer}>
              {<BsCurrencyBitcoin/>}
            </div>
            <div className={styles.valuesContainer}>
              <p className={styles.valueName}><span className={styles.bold}>BITCOINS</span></p>
              <p className={styles.valueDisplay}>{"BTC " + btcAmount.toFixed(8)}</p>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.infoContainerMiningPower}`}>
            <div className={styles.iconContainer}>
              {<GiMiner/>}
            </div> 
            <div className={styles.valuesContainer}>
              <p className={styles.valueName}><span className={styles.bold}>PODER DE MINERAÇÃO</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber
                  value={miningPower * miningPowerDecrease}
                  formatValue={v => PoderMineracaoFormatter(v) + " MP/s"}
                  duration={200}
                />
              </p>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.infoContainerEnergy}`}>
            <div className={styles.iconContainer}>
              {<AiFillThunderbolt/>}
            </div>
            <div className={styles.valuesContainer}>
              <p className={styles.valueName}><span className={styles.bold}>TOTAL GERANDO/UTILIZANDO</span></p>
              <p className={styles.valueDisplay}>
                <AnimatedNumber value={energyPower} formatValue={v => ValueFormatter(v) + " W"} duration={300}/>
                /
                <AnimatedNumber value={energyPowerUsed} formatValue={v => ValueFormatter(v) + " W"} duration={300}/>
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
              <p className={styles.valueName}><span className={styles.bold}>CONVERSÃO EM DÓLARES</span></p>
              <p className={styles.valueDisplay}>{MoneyDollarFormatter(dollarAmountConvert)}</p>
            </div>
          </div>
        </div>

        <div className={styles.showTemperatureContainer}>
          <p className={styles.temperatureTitle}>{<FaTemperatureHigh/>}&nbsp;TEMPERATURA&nbsp;{<FaTemperatureHigh/>}</p>
          <div className={styles.progressContainer}>
            <p className={styles.progressValue}><AnimatedNumber value={(temperature + 26) - temperatureDecrease} formatValue={v => v.toFixed(1) + " C°"} duration={300}/></p>
            <progress className={((temperature + 26) - temperatureDecrease) > 50 ? styles.temperatureCritical : styles.temperatureProgress} value={(temperature + 26) - temperatureDecrease} max={50}></progress>
          </div>
          <div className={styles.showTemperatureAlert}>
            <p className={sendAlert ? styles.temperatureAlertProblem : styles.temperatureAlert}>{temperatureAlert}</p>
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