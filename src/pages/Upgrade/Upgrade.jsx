import styles from './Upgrade.module.css';

import { motion } from 'framer-motion';

import UpgradeContainer from '../../components/UpgradeContainer/UpgradeContainer';
import EarnPerClick from '../../components/CompUpgrades/GanhoPorClique/GanhoPorClique';
import EarnPerSecond from '../../components/CompUpgrades/GanhoPorSegundo/GanhoPorSegundo';
import SpecialUpgrades from '../../components/SpecialUpgrades/SpecialUpgrades';
import SpecialUpgradeItem from '../../components/CompUpgrades/ItemMelhoriaEspecial/ItemMelhoriaEspecial';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';

import { useContext, useState, useEffect } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { UpgradeContext } from '../../contexts/UpgradeContext/UpgradeContext';

import { FaShoppingCart } from 'react-icons/fa';
import { GiUpgrade } from 'react-icons/gi';
import { IoMdClock } from 'react-icons/io';
import { IoStorefront } from 'react-icons/io5';
import { HiCursorClick } from 'react-icons/hi';

import ReactTooltip from 'react-tooltip';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

const SpecialUpgradesData = require('../../UpgradeObjects/SpecialUpgrade/SpecialUpgradesData');
const SpecialUpgradesRebirthData = require('../../UpgradeObjects/SpecialUpgradeRebirth/SpecialUpgradesRebirthData');

export default function Upgrade() {

  const { generalUpgrades, setGeneralUpgrades } = useContext(ValuesContext);

  const [ previewGps, setPreviewGps ] = useState(1);
  const [ previewGpc, setPreviewGpc ] = useState(1);

  /* Função que define qual opção está ativa no Preview de GPS */
  function setActiveGps(number) {
    let amountGps1 = document.getElementById('amountGps1');
    let amountGps2 = document.getElementById('amountGps2');
    let amountGps3 = document.getElementById('amountGps3');

    switch(number) {
      case 1:
        amountGps1.style.background = 'var(--corPrimaria)';
        amountGps2.style.background = 'var(--corFundo)';
        amountGps3.style.background = 'var(--corFundo)';
        return;
      case 2:
        amountGps1.style.background = 'var(--corFundo)';
        amountGps2.style.background = 'var(--corPrimaria)';
        amountGps3.style.background = 'var(--corFundo)';
        return;
      case 3:
        amountGps1.style.background = 'var(--corFundo)';
        amountGps2.style.background = 'var(--corFundo)';
        amountGps3.style.background = 'var(--corPrimaria)';
        return;
      default:
        amountGps1.style.background = 'var(--corPrimaria)';
        amountGps2.style.background = 'var(--corFundo)';
        amountGps3.style.background = 'var(--corFundo)';
        return;
    }
  }

  /* Função que define qual opção está ativa no Preview de GPC */
  function setActiveGpc(number) {
    let amountGpc1 = document.getElementById('amountGpc1');
    let amountGpc2 = document.getElementById('amountGpc2');
    let amountGpc3 = document.getElementById('amountGpc3');

    switch(number) {
      case 1:
        amountGpc1.style.background = 'var(--corPrimaria)';
        amountGpc2.style.background = 'var(--corFundo)';
        amountGpc3.style.background = 'var(--corFundo)';
        return;
      case 2:
        amountGpc1.style.background = 'var(--corFundo)';
        amountGpc2.style.background = 'var(--corPrimaria)';
        amountGpc3.style.background = 'var(--corFundo)';
        return;
      case 3:
        amountGpc1.style.background = 'var(--corFundo)';
        amountGpc2.style.background = 'var(--corFundo)';
        amountGpc3.style.background = 'var(--corPrimaria)';
        return;
      default:
        amountGpc1.style.background = 'var(--corPrimaria)';
        amountGpc2.style.background = 'var(--corFundo)';
        amountGpc3.style.background = 'var(--corFundo)';
        return;
    }
  }

  useEffect(() => {
    setActiveGps(1);
    setActiveGpc(1);
  }, []);

  return (
    <motion.div
      animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <AbrirMenuEfeito/>
      <ReactTooltip 
        place="top"
        multiline={true}
        effect="solid"
      />
      <UpgradeContext.Provider value={{ generalUpgrades, setGeneralUpgrades }}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>{<IoStorefront/>}&nbsp;<span>LOJA DE MELHORIAS</span>&nbsp;{<IoStorefront/>}</p>
          </div>
          <DisplayDinheiroXP/>
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
            <div className={styles.amountContainer}>
              <div className={styles.amountTitleContainer}>
                <p className={styles.amountTitle}><FaShoppingCart/>&nbsp;QUANTIDADE DESEJADA GPS&nbsp;<FaShoppingCart/></p>
              </div>
              <div className={styles.amountButtonContainer}>
                <motion.button
                  id="amountGps1"
                  className={styles.amountButton}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                  onClick={() => (setPreviewGps('1'), setActiveGps(1))}
                >
                  1
                </motion.button>
                <motion.button
                  id="amountGps2"
                  className={styles.amountButton}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                  onClick={() => (setPreviewGps('10'), setActiveGps(2))}
                >
                  10
                </motion.button>
                <motion.button
                  id="amountGps3"
                  className={styles.amountButton}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                  onClick={() => (setPreviewGps('100'), setActiveGps(3))}
                >
                  100
                </motion.button>
              </div>
            </div>
            <div className={styles.amountContainer}>
              <div className={styles.amountTitleContainer}>
                <p className={styles.amountTitle}><FaShoppingCart/>&nbsp;QUANTIDADE DESEJADA GPC&nbsp;<FaShoppingCart/></p>
              </div>
              <div className={styles.amountButtonContainer}>
                <motion.button
                  id="amountGpc1"
                  className={styles.amountButton}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                  onClick={() => (setPreviewGpc('1'), setActiveGpc(1))}
                >
                  1
                </motion.button>
                <motion.button
                  id="amountGpc2"
                  className={styles.amountButton}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                  onClick={() => (setPreviewGpc('10'), setActiveGpc(2))}
                >
                  10
                </motion.button>
                <motion.button
                  id="amountGpc3"
                  className={styles.amountButton}
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
                  onClick={() => (setPreviewGpc('100'), setActiveGpc(3))}
                >
                  100
                </motion.button>
              </div>
            </div>
            <UpgradeContainer title="GANHO POR SEGUNDO" icon={<IoMdClock/>} >
              {generalUpgrades[0].map(item => {
                return (
                  <EarnPerSecond key={item.id} list={0} item={item} maxLevel={300} preview={previewGps} />
                );
              })}
            </UpgradeContainer>
            <UpgradeContainer title="GANHO POR CLIQUE" icon={<HiCursorClick/>} >
              {generalUpgrades[1].map(item => {
                return (
                  <EarnPerClick key={item.id} list={1} item={item} maxLevel={300} preview={previewGpc} />
                );
              })}
            </UpgradeContainer>
          </div>
        </div>
      </UpgradeContext.Provider>
    </motion.div>
  );
}