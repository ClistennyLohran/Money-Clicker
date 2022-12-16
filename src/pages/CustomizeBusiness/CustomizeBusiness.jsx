import styles from './CustomizeBusiness.module.css';

import { motion } from 'framer-motion';

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiFillAlert } from 'react-icons/ai';
import { GiSave, GiPaintBucket, GiMoneyStack, GiPaintRoller, GiPaintBrush } from 'react-icons/gi';
import { BiRename } from 'react-icons/bi';
import { RiRestartFill } from 'react-icons/ri';
import { MdBackup, MdCloudDownload } from 'react-icons/md';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import DisplayDinheiroReais from '../../components/DisplayDinheiroReais/DisplayDinheiroReais';

export default function CustomizeBusiness() {
  
  const navigate = useNavigate();

  const { balance, setBalance, setBusinessName, businessName, setNotificationType } = useContext(ValuesContext);
  const { activeTheme, setActiveTheme, activeColor, setActiveColor } = useContext(ValuesContext);
  const { unlocked, setUnlocked } = useContext(ValuesContext);

  const [ newName, setNewName ] = useState('');
  const [ checked, setChecked ] = useState(false);

  function changeName() {
    if(balance >= 2500 && newName.trim(' ') !== '') {
      setBalance(balance - 2500);
      setBusinessName(newName);
      setNewName('');
    }else {
      setNotificationType(5);
    }
  }

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

  function buyThemesAndColors() {
    if(balance >= 250000) {
      setBalance(balance => balance - 250000);
      setUnlocked(1);
    }else {
      setNotificationType(9);
    }
  }

  const generateSave = (e) => {
    let saveCode = document.getElementById('saveCode');

    let moneyClickerSave = localStorage.getItem('MoneyClickerSave');
    let moneyClickerData = localStorage.getItem('MoneyClickerData');

    saveCode.value = moneyClickerSave + "|" + moneyClickerData;
  }

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    <motion.div
        className={styles.container}
        animate={{ opacity: [0, 1], x: [-600, 0] }}
    >
      <div className={styles.titleContainer}>
        <p className={styles.title}>{<GiPaintBucket/>}&nbsp;<span className={styles.titleBold}>CUSTOMIZAÇÃO DA LOJA</span>&nbsp;{<GiPaintBucket/>}</p>
      </div>
      <div className={styles.center}>
        <DisplayDinheiroReais/>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.textContainer}>
        <p className={styles.text}>{<BiRename/>}&nbsp;<span className={styles.textBold}>MUDAR O NOME</span>&nbsp;{<BiRename/>}</p>
        <p className={styles.actualName}><span className={styles.bold}>NOME ATUAL:</span> {businessName}</p>
        <p className={styles.newName}><span className={styles.bold}>NOVO NOME:</span> {newName === '' ? 'Qual será em?' : newName}</p>
      </div>
      <div className={styles.containerName}>
        <input className={styles.inputName} placeholder="Digite o novo nome aqui" onChange={(e) => setNewName(e.target.value)} value={newName} type="text" />
        <motion.button
          className={styles.changeNameBtn}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => changeName()}
        >
          ALTERAR
        </motion.button>
        <p className={styles.buyText}>{<GiMoneyStack/>}&nbsp;<span className={styles.bold}>VALOR DA ALTERAÇÃO:</span>&nbsp;<span className={styles.titleBold}>R$2.5K</span></p>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.textContainer}>
        <p className={styles.text}>{<GiPaintRoller/>}&nbsp;<span className={styles.textBold}>TEMAS</span>&nbsp;{<GiPaintRoller/>}</p>
      </div>
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
      <div className={styles.textContainer}>
        <p className={styles.text}>{<GiPaintBrush/>}&nbsp;<span className={styles.textBold}>CORES</span>&nbsp;{<GiPaintBrush/>}</p>
      </div>

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

      <div className={unlocked === 0 ? styles.buyThemesAndColorsContainer : styles.buyThemesAndColorsContainerUnlocked }>
        <motion.button
          className={styles.changeNameBtn}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0, transition: {duration: 0.1}}}
          onClick={() => buyThemesAndColors()}
        >
          COMPRAR
        </motion.button>

        <div className={styles.textContainer}>
          <p className={styles.buyText}>{<GiMoneyStack/>}&nbsp;<span className={styles.textBold}>VALOR DAS CORES E TEMAS: R$250K</span></p>
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.resetContainer}>
        <div className={styles.textContainerReset}>
          <p className={styles.text}>{<RiRestartFill/>}&nbsp;<span className={styles.textBold}>REINICIAR TODO O PROGRESSO</span>&nbsp;{<RiRestartFill/>}</p>
          <p className={styles.resetText}>{<AiFillAlert/>}&nbsp;<span className={styles.bold}>ATENÇÃO:</span> este reset de progresso irá reiniciar todo o seu progresso do jogo sem nenhuma recompensa em troca!</p>
        </div>
        <motion.button
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
          <p className={styles.checkBoxText}>Li e estou ciente!</p>
        </div>
      </div>

      <div className={styles.separator}></div>

      <div className={styles.saveGameContainer}>
        <div className={styles.textContainerSave}>
          <p className={styles.text}>{<GiSave/>}&nbsp;<span className={styles.textBold}>SAVE GAME</span>&nbsp;{<GiSave/>}</p>
          <p className={styles.resetText}>Escolha se quer carregar um save existente ou fazer um backup do seu save atual!</p>
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
              <input type="text" id="saveLoad" className={styles.saveCode} autoComplete={'off'} placeholder="Cole o seu save aqui!" />
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
    </motion.div>
  );
}