import styles from './CustomizeBusiness.module.css';

import { motion } from 'framer-motion';

import { useContext, useState } from 'react';

import { AiFillEdit } from 'react-icons/ai';
import { GiPaintBucket, GiPaintRoller } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { BiChip } from 'react-icons/bi';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import ReactTooltip from 'react-tooltip';
import NomePagina from '../../components/NomePagina/NomePagina';
import NomeSessao from '../../components/NomeSessao/NomeSessao';
import DisplayCustomizar from '../../components/DisplayCustomizar/DisplayCustomizar';

/* upgradeSong */
import upgradeSong from '../../songs/Melhoria.mp3';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

export default function CustomizeBusiness() {
  const { unlocked, setUnlocked } = useContext(ValuesContext);
  const { balance, setBalance, setNotificationType } = useContext(ValuesContext);
  const { activeTheme, setActiveTheme, activeColor, setActiveColor } = useContext(ValuesContext);

  function buyThemesAndColors() {
    if(balance >= 250000) {
      let audio = new Audio(upgradeSong);
      audio.play();
      setBalance(v => v - 250000);
      setUnlocked(1);
    }else {
      setNotificationType(9);
    }
  }

  const buyThemes = <motion.button className={styles.changeNameBtn} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} onClick={() => buyThemesAndColors()}>COMPRAR</motion.button>

  return (
    <motion.div className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <AbrirMenuEfeito/>
      <NomePagina icon={<GiPaintBucket/>} name="CUSTOMIZAÇÃO DA LOJA"/>
      <DisplayDinheiroXP/>
      <NomeSessao icon={<AiFillEdit/>} marginTop={true} title="ALTERAR NOME DAS EMPRESAS" />
      <div className={styles.displayContainer}>
        <DisplayCustomizar dataTip="Nesse aqui você muda o nome da sua empresa<br>que produz dinheiro!" setMargin={true} icon={<FaHome/>} title="EMPRESA" value="R$ 50K" nameChange={1} />
        <DisplayCustomizar dataTip="E aqui você muda o nome da empresa<br>de produção de Bitcoin!" setMargin={false} icon={<BiChip/>} title="CENTRAL DE MINERAÇÃO" value="R$ 50K" nameChange={2} />
      </div>
      <NomeSessao icon={<GiPaintRoller/>} title="TEMAS CUSTOMIZADOS" />
      <div className={styles.containerTemas}>
        <div className={activeTheme === 1 ? styles.themeSelected : styles.theme} onClick={() => (unlocked === 1 ? setActiveTheme(1) : setNotificationType(10))}>
          <div className={styles.theme01Left}></div>
          <div className={styles.theme01Right}></div>
        </div>

        <div className={activeTheme === 2 ? styles.themeSelected : styles.theme} onClick={() => (unlocked === 1 ? setActiveTheme(2) : setNotificationType(10))}>
          <div className={styles.theme02Left}></div>
          <div className={styles.theme02Right}></div>
        </div>

        <div className={activeTheme === 3 ? styles.themeSelected : styles.theme} onClick={() => (unlocked === 1 ? setActiveTheme(3) : setNotificationType(10))}>
          <div className={styles.theme03Left}></div>
          <div className={styles.theme03Right}></div>
        </div>
      </div>
      <div className={`${styles.containerTemas} ${styles.marginTop}`}>
        <div className={activeTheme === 4 ? styles.themeSelected : styles.theme} onClick={() => (unlocked === 1 ? setActiveTheme(4) : setNotificationType(10))}>
          <div className={styles.theme04Left}></div>
          <div className={styles.theme04Right}></div>
        </div>

        <div className={activeTheme === 5 ? styles.themeSelected : styles.theme} onClick={() => (unlocked === 1 ? setActiveTheme(5) : setNotificationType(10))}>
          <div className={styles.theme05Left}></div>
          <div className={styles.theme05Right}></div>
        </div>

        <div className={activeTheme === 6 ? styles.themeSelected : styles.theme} onClick={() => (unlocked === 1 ? setActiveTheme(6) : setNotificationType(10))}>
          <div className={styles.theme06Left}></div>
          <div className={styles.theme06Right}></div>
        </div>
      </div>
      <NomeSessao icon={<GiPaintRoller/>} title="CORES CUSTOMIZADAS" />
      <div className={styles.containerCores}>
        <div className={activeColor === 1 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(1) : setNotificationType(10))}>
          <div className={styles.cor01}></div>
        </div>
        <div className={activeColor === 2 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(2) : setNotificationType(10))}>
          <div className={styles.cor02}></div>
        </div>
        <div className={activeColor === 3 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(3) : setNotificationType(10))}>
          <div className={styles.cor03}></div>
        </div>
        <div className={activeColor === 4 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(4) : setNotificationType(10))}>
          <div className={styles.cor04}></div>
        </div>
        <div className={activeColor === 5 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(5) : setNotificationType(10))}>
          <div className={styles.cor05}></div>
        </div>
        <div className={activeColor === 6 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(6) : setNotificationType(10))}>
          <div className={styles.cor06}></div>
        </div>
      </div>
      <div className={`${styles.containerCores} ${styles.marginTop}`}>
        <div className={activeColor === 7 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(7) : setNotificationType(10))}>
          <div className={styles.cor07}></div>
        </div>
        <div className={activeColor === 8 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(8) : setNotificationType(10))}>
          <div className={styles.cor08}></div>
        </div>
        <div className={activeColor === 9 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(9) : setNotificationType(10))}>
          <div className={styles.cor09}></div>
        </div>
        <div className={activeColor === 10 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(10) : setNotificationType(10))}>
          <div className={styles.cor10}></div>
        </div>
        <div className={activeColor === 11 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(11) : setNotificationType(10))}>
          <div className={styles.cor11}></div>
        </div>
        <div className={activeColor === 12 ? styles.corSelected : styles.cor} onClick={() => (unlocked === 1 ? setActiveColor(12) : setNotificationType(10))}>
          <div className={styles.cor12}></div>
        </div>
      </div>
      {unlocked === 0 ? 
        <>
          <div className={styles.valueContainer}>
            <p className={styles.value}>R$ 250K</p>
          </div>
          {buyThemes}
        </>
      : 
        <div className={styles.bottomSpace}></div>
      }
    </motion.div>
  );
}