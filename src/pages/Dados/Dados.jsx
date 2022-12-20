import styles from './Dados.module.css';

import { motion } from 'framer-motion';

import ReactTooltip from 'react-tooltip';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';

import { useContext, useState } from 'react';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { useNavigate } from 'react-router-dom';
import NomePagina from '../../components/NomePagina/NomePagina';
import { AiFillSave } from 'react-icons/ai';
import NomeSessao from '../../components/NomeSessao/NomeSessao';
import { MdBackup, MdCloudDownload } from 'react-icons/md';
import { GiSave } from 'react-icons/gi';
import { RiRestartFill } from 'react-icons/ri';

export default function Dados() {
  const navigate = useNavigate();
  
  const { balance, setBalance, setBusinessName, businessName, setNotificationType } = useContext(ValuesContext);

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
      <NomePagina icon={<AiFillSave/>} name="DADOS"/>
      <DisplayDinheiroXP/>
      <NomeSessao icon={<AiFillSave/>} marginTop={true} title="GERAR E CARREGAR DADOS"/>
      <div className={styles.saveGameContainer}>
        <div className={styles.textContainerSave}>
          <div className={styles.backupContainer}>
            <p className={styles.saveText}>{<MdBackup/>}&nbsp;FAZER BACKUP&nbsp;{<MdBackup/>}</p>
            <p className={styles.alertText}>Clique no botão gerar save para gerar o seu código, guarde o código em um bloco de notas.</p>
            <div className={styles.saveValueContainer}>
              <input type="text" id="saveCode" className={styles.saveCode} autoComplete={'off'} placeholder="O seu save será gerado aqui!" ></input>
              <button onClick={() => copyContent()} className={styles.copyBtn}>COPIAR</button>
            </div>
            <motion.button 
              className={styles.dataBtn}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
              onClick={(e) => generateSave(e)}
            >
              GERAR SAVE
            </motion.button>
          </div>
          <div className={styles.loadContainer}>
            <p className={styles.saveText}>{<MdCloudDownload/>}&nbsp;CARREGAR SAVE&nbsp;{<MdCloudDownload/>}</p>
            <p className={styles.alertText}>Cole o seu save no campo abaixo, é sempre recomendado fazer um backup do save atual no campo acima.</p>
            <div className={styles.saveValueContainer}>
              <input type="text" id="saveLoad" className={styles.removePadding} autoComplete={'off'} placeholder="Cole o seu save aqui!" />
            </div>
            <motion.button 
              className={styles.dataBtn}
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
              onClick={(e) => loadSave(e)}
            >
              CARREGAR SAVE
            </motion.button>
          </div>
        </div>
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