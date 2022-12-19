import styles from './LojaBitcoin.module.css';

import { motion } from 'framer-motion';

import { useEffect, useContext } from 'react';

import { SiBitcoinsv } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';
import { GiIceCube } from 'react-icons/gi';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { AdvancedMiningContext } from '../../contexts/AdvancedMiningContext/AdvancedMiningContext';

import ContainerPlacaDeVideo from '../../components/BitcoinComponents/ContainerPlacaDeVideo/ContainerPlacaDeVideo';
import MelhoriaPlacaDeVideo from '../../components/BitcoinComponents/MelhoriaPlacaDeVideo/MelhoriaPlacaDeVideo';
import NomePagina from '../../components/NomePagina/NomePagina';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import ReactTooltip from 'react-tooltip';
import MelhoriaRefrigeracao from '../../components/BitcoinComponents/MelhoriaRefrigeracao/MelhoriaRefrigeracao';
import MelhoriaGerador from '../../components/BitcoinComponents/MelhoriaGerador/MelhoriaGerador';

/* Data Lists */
const GeradoresEnergiaData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/GeradoresEnergia/GeradoresEnergiaData');
const MaquinasRefrigeracaoData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/MaquinasRefrigeracao/MaquinasRefrigeracaoData');

export default function LojaBitcoin() {
  const { generalUpgrades } = useContext(ValuesContext);
  const { setEnergyPower, setEnergyPowerUsed, setMiningPower, setTemperature, setTemperatureDecrease } = useContext(AdvancedMiningContext);
  
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
  
  return (
    <motion.div className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <NomePagina icon={<SiBitcoinsv/>} name="LOJA DE MINERAÇÃO"/>
      <DisplayDinheiroXP/>
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
    </motion.div>
  );
}