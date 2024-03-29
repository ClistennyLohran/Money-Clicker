import styles from './LojaBitcoin.module.css';

import { motion } from 'framer-motion';

import { useEffect, useContext } from 'react';

import { SiBitcoinsv } from 'react-icons/si';
import { HiLightningBolt } from 'react-icons/hi';
import { GiIceCube, GiMiner } from 'react-icons/gi';
import { FaTemperatureHigh } from 'react-icons/fa';
import { AiFillThunderbolt } from 'react-icons/ai';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { AdvancedMiningContext } from '../../contexts/AdvancedMiningContext/AdvancedMiningContext';

import ContainerPlacaDeVideo from '../../components/BitcoinComponents/ContainerPlacaDeVideo/ContainerPlacaDeVideo';
import MelhoriaPlacaDeVideo from '../../components/BitcoinComponents/MelhoriaPlacaDeVideo/MelhoriaPlacaDeVideo';
import NomePagina from '../../components/NomePagina/NomePagina';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import ReactTooltip from 'react-tooltip';
import MelhoriaRefrigeracao from '../../components/BitcoinComponents/MelhoriaRefrigeracao/MelhoriaRefrigeracao';
import MelhoriaGerador from '../../components/BitcoinComponents/MelhoriaGerador/MelhoriaGerador';
import DisplayInfo from '../../components/LojaBitcoin/DisplayInfo/DisplayInfo';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

/* Data Lists */
const GeradoresEnergiaData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/GeradoresEnergia/GeradoresEnergiaData');
const MaquinasRefrigeracaoData = require('../../UpgradeObjects/ObjetosMelhoriaBitcoin/MaquinasRefrigeracao/MaquinasRefrigeracaoData');

export default function LojaBitcoin() {
  const { generalUpgrades, energyAlert, tempAlert } = useContext(ValuesContext);
  const { miningPower, setMiningPower, energyPower, setEnergyPower, energyPowerUsed, setEnergyPowerUsed, temperature, setTemperature, temperatureDecrease, setTemperatureDecrease, miningPowerEnergyDecrease, miningPowerTempDecrease } = useContext(AdvancedMiningContext);
  const { energyEconomy, miningPowerBoost, miningPowerMultiply, energyPowerBoost, energyPowerMultiply } = useContext(AdvancedMiningContext);
  
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
      <AbrirMenuEfeito/>
      <NomePagina icon={<SiBitcoinsv/>} name="LOJA DE MINERAÇÃO"/>
      <DisplayDinheiroXP/>
      <div className={styles.displayInfoContainer}>
        <DisplayInfo energyAlert={energyAlert} dataTip="Energia gerada e energia utilizada<br>respectivamente pelas placas de vídeo.<br><br>Para evitar sobrecarga tente manter a energia gerada sempre acima da energia usada!<br>A cor amarela representa que você está utilizando a sua energia<br>reserva, ela reduz o poder de mineração em 50%, porém evita que as placas sejam desligadas." twoValues={true} middle={false} icon={<AiFillThunderbolt/>} title="ENERGIA GERADA / UTILIZADA" value={(energyPower * energyPowerBoost) * energyPowerMultiply} value2={energyPowerUsed * energyEconomy} formatter={1} />
        <DisplayInfo dataTip="O poder de mineração de todas as suas<br>placas de vídeo somadas." twoValues={false} middle={true} icon={<GiMiner/>} title="PODER DE MINERAÇÃO" value={(((miningPower * miningPowerBoost) * miningPowerMultiply) * miningPowerEnergyDecrease) * miningPowerTempDecrease} formatter={2} />
        <DisplayInfo tempAlert={tempAlert} tempAlertStatus={true} dataTip="A temperatura do ambiente<br><br>Se a temperatura estiver entre 50C° e 90C° o poder de mineração será reduzido em 50%.<br>Se a temperatura for maior do que 90C° todas as placas de vídeo serão desligadas.<br>Se a temperatura estiver abaixo de -20C° as placas de vídeo serão desligadas." twoValues={false} middle={false} icon={<FaTemperatureHigh/>} title="TEMPERATURA DO AMBIENTE" value={(temperature + 26) - temperatureDecrease} formatter={3} />
      </div>
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
        <ContainerPlacaDeVideo>
          {generalUpgrades[4].map(item => {
            return (
              <MelhoriaPlacaDeVideo key={item.id} id={item.id} item={item} />
            );
          })}
        </ContainerPlacaDeVideo>
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