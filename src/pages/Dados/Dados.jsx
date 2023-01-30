import styles from './Dados.module.css';

import { motion } from 'framer-motion';

import ReactTooltip from 'react-tooltip';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import NomeSessao from '../../components/NomeSessao/NomeSessao';
import NomePagina from '../../components/NomePagina/NomePagina';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AiFillSave } from 'react-icons/ai';
import { RiRestartFill } from 'react-icons/ri';
import { IoCopy } from 'react-icons/io5';
import { GiSpeedometer } from 'react-icons/gi';

import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';
import CheckMenu from '../../components/CheckMenu/CheckMenu';

export default function Dados() {
  const navigate = useNavigate();
  
  const { setNotificationType, disableEffect, setDisableEffect } = useContext(ValuesContext);

  const [ checked, setChecked ] = useState(false);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function tryResetProgress() {
    if(checked) {
      var highestTimeoutId = setTimeout(";");
      for (var i = 0 ; i < highestTimeoutId ; i++) {
          clearTimeout(i); 
      }
      await sleep(50);
      localStorage.clear();
      await sleep(50);
      navigate('/');
      await sleep(50);
      document.location.reload(true);
    }else {
      setNotificationType(4);
    }
  }
  
  const generateSave = (e) => {
    let saveCode = document.getElementById('saveCode');

    let moneyClickerSave = localStorage.getItem('MoneyClickerSave');
    let moneyClickerData = localStorage.getItem('MoneyClickerData');

    saveCode.value = moneyClickerSave + "|" + moneyClickerData;
  }
  
  const loadSave = async (e) => {
    let saveLoad = document.getElementById('saveLoad');
    
    if(saveLoad.value.length >= 0 && saveLoad.value !== "" && saveLoad.value !== null) {

      let moneyClickerSave = saveLoad.value.slice(0, saveLoad.value.indexOf("|"));
      let moneyClickerData = saveLoad.value.slice(saveLoad.value.indexOf("|") + 1, saveLoad.value.length);

      var highestTimeoutId = setTimeout(";");
      for (var i = 0 ; i < highestTimeoutId ; i++) {
          clearTimeout(i); 
      }
      localStorage.clear();

      await sleep(100);

      localStorage.setItem('MoneyClickerSave', moneyClickerSave);
      localStorage.setItem('MoneyClickerData', moneyClickerData);

      await sleep(100);
      navigate('/');
      document.location.reload(true);
    } else {
      setNotificationType(14);
    }
  }

  /* Copy and Paste Content */

  const copyContent = () => {
    let saveCode = document.getElementById('saveCode');

    saveCode.select();
    document.execCommand('copy');

    setNotificationType(13);
  }
  
  return (
    <motion.div className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <AbrirMenuEfeito/>
      <NomePagina icon={<AiFillSave/>} name="DADOS"/>
      <DisplayDinheiroXP/>
      {/* <NomeSessao icon={<BsVolumeDownFill/>} marginTop={true} title="SOM DO JOGO"/>
      <div className={styles.volumeContainer}>
        <motion.button id="btnAudioController" className={styles.audioBtn} onClick={() => audioController()} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} >ATIVADO</motion.button>
      </div> */}
      <NomeSessao icon={<AiFillSave/>} marginTop={true} title="GERAR E CARREGAR DADOS"/>
      <div className={styles.saveGameContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.displayIconNameContainer}>
            <div data-tip="Aqui você vai gerar o seu save, você pode compartilhar<br>com outros amigos ou entre navegadores, basta<br>colar no campo ao lado." className={styles.iconContainer}>
              <p className={styles.icon}>{<AiFillSave/>}</p>
            </div>
            <div className={styles.titleContainer}>
              <p className={styles.title}>GERAR DADOS</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" id="saveCode" className={styles.input} autoComplete={'off'} placeholder="O seu save será gerado aqui!" ></input>
            <button data-tip="Copia todo o seu save automaticamente, disponha S2" onClick={() => copyContent()} className={styles.copyBtn}><IoCopy/></button>
          </div>
          <motion.button className={styles.button} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} onClick={(e) => generateSave(e)}>GERAR SAVE</motion.button>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.displayIconNameContainer}>
            <div data-tip="Aqui você cola o código gerado no campo a direita<br>caso vá carregar o save de algum amigo<br>não esqueça de salvar o seu em um bloco de notas antes." className={styles.iconContainer}>
              <p className={styles.icon}>{<AiFillSave/>}</p>
            </div>
            <div className={styles.titleContainer}>
              <p className={styles.title}>CARREGAR DADOS</p>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <input type="text" id="saveLoad" className={styles.input} autoComplete={'off'} placeholder="Cole o seu save aqui!" />
          </div>
          <motion.button className={styles.button} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}} onClick={(e) => loadSave(e)}>CARREGAR SAVE</motion.button>
        </div>
      </div>
      <NomeSessao icon={<GiSpeedometer/>} title="OPÇÕES VISUAIS"/>
      <div className={styles.effectContainer}>
        <CheckMenu itemId={1} controller={disableEffect} tipText={"O valor que sobe ao clicar botão Investir"} title={"Efeito Clique"} />
      </div>
      <NomeSessao icon={<RiRestartFill/>} title="RESETAR PROGRESSO"/>
      <div className={styles.resetContainer}>
        <motion.button
          data-tip="Atenção! Este reset de progresso irá reiniciar todo o seu progresso do jogo sem nenhuma recompensa em troca!"
          className={styles.resetProgressBtn}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => tryResetProgress()}
        >
          RESETAR PROGRESSO
        </motion.button>
        <div className={styles.customCheckboxContainer}>
          <label className={styles.containerCb}>
            <input id="checkboxTerm" type="checkbox" name="translateRadio" onChange={() => setChecked(!checked)} />
            <span className={styles.checkmark}></span>
          </label>
          <p className={styles.checkBoxText}>LI E ESTOU CIENTE!</p>
        </div>
      </div>
    </motion.div>
  );
}