import styles from './Upgrade.module.css';

import { motion } from 'framer-motion';

import BalanceDisplay from "../../components/DisplayDinheiroReais/DisplayDinheiroReais";
import UpgradeContainer from '../../components/UpgradeContainer/UpgradeContainer';
import EarnPerClick from '../../components/CompUpgrades/GanhoPorClique/GanhoPorClique';
import EarnPerSecond from '../../components/CompUpgrades/GanhoPorSegundo/GanhoPorSegundo';
import SpecialUpgrades from '../../components/SpecialUpgrades/SpecialUpgrades';
import SpecialUpgradeItem from '../../components/CompUpgrades/ItemMelhoriaEspecial/ItemMelhoriaEspecial';

import { useContext } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { UpgradeContext } from '../../contexts/UpgradeContext/UpgradeContext';

import { GiUpgrade } from 'react-icons/gi';
import { IoMdClock } from 'react-icons/io';
import { IoStorefront } from 'react-icons/io5';
import { HiCursorClick } from 'react-icons/hi';
import Nivel from '../../components/Nivel/Nivel';

const SpecialUpgradesData = require('../../UpgradeObjects/SpecialUpgrade/SpecialUpgradesData');
const SpecialUpgradesRebirthData = require('../../UpgradeObjects/SpecialUpgradeRebirth/SpecialUpgradesRebirthData');

export default function Upgrade() {

  const { generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);

  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <UpgradeContext.Provider value={{ generalUpgrades, setGeneralUpgrades }}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>{<IoStorefront/>}&nbsp;<span>LOJA DE MELHORIAS</span>&nbsp;{<IoStorefront/>}</p>
          </div>
          <Nivel/>
          <BalanceDisplay/>
          <div className={styles.specialGridContainer}>
            <SpecialUpgrades title="MELHORIAS ESPECIAIS" icon={<GiUpgrade/>}>
              {generalUpgrades[2].map(item => {
                return (
                  <SpecialUpgradeItem type={0} classId={item.classId} tooltip={item.tooltip} key={item.id} id={item.id} title={SpecialUpgradesData} active={item.status} description={SpecialUpgradesData} icon={SpecialUpgradesData} value={item.value} upgradeType={0} />
                );
              })}
            </SpecialUpgrades>
            <SpecialUpgrades title="MELHORIAS DO RENASCIMENTO" icon={<GiUpgrade/>}>
              {generalUpgrades[3].map(item => {
                return (
                  <SpecialUpgradeItem type={1} classId={item.classId} tooltip={item.tooltip} key={item.id} id={item.id} title={SpecialUpgradesRebirthData} active={item.status} description={SpecialUpgradesRebirthData} icon={SpecialUpgradesRebirthData} value={item.value} upgradeType={1} />
                );
              })}
            </SpecialUpgrades>
          </div>
          <div className={styles.gridContainer}>
            <UpgradeContainer title="GANHO POR SEGUNDO" icon={<IoMdClock/>} >
              {generalUpgrades[0].map(item => {
                return (
                  <EarnPerSecond key={item.id} list={0} item={item} maxLevel={300} />
                );
              })}
            </UpgradeContainer>
            <UpgradeContainer title="GANHO POR CLIQUE" icon={<HiCursorClick/>} >
              {generalUpgrades[1].map(item => {
                return (
                  <EarnPerClick key={item.id} list={1} item={item} maxLevel={300} />
                );
              })}
            </UpgradeContainer>
          </div>
        </div>
      </UpgradeContext.Provider>
    </motion.div>
  );
}