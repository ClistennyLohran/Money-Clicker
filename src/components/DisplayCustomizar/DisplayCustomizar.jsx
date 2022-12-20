import styles from './DisplayCustomizar.module.css';

import { useContext, useState } from 'react';

import { AdvancedMiningContext } from '../../contexts/AdvancedMiningContext/AdvancedMiningContext';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import { motion } from 'framer-motion';

export default function DisplayCustomizar({ icon, title, value, nameChange, setMargin }) {
  const { setMiningBusinessName } = useContext(AdvancedMiningContext);
  const { balance, setBalance, setBusinessName, setNotificationType } = useContext(ValuesContext);
  
  const [ newName, setNewName ] = useState('');
  const [ newBitcoinName, setNewBitcoinName ] = useState('');

  function changeName(option) {
    if(option === 1) {
      console.log("I'm here 1");
      if(balance >= 250000 && newName.trim(' ') !== '') {
        setBalance(v => v - 250000);
        setBusinessName(newName.toUpperCase());
        setNewName('');
      }else {
        setNotificationType(5);
      }
    } else if(option === 2) {
      console.log("I'm here 2");
      if(balance >= 250000 && newBitcoinName.trim(' ') !== '') {
        setBalance(v => v - 250000);
        setMiningBusinessName(newBitcoinName.toUpperCase());
        setNewBitcoinName('');
      }else {
        setNotificationType(5);
      }
    }
  }

  const changeStyle = () => {
    switch(setMargin) {
      case true:
        return styles.containerMargin;
      case false:
        return styles.container;
      default:
        return styles.container;
    }
  }

  const inputComum = <input className={styles.inputName} placeholder="Digite o novo nome aqui" type="text" onChange={(e) => setNewName(e.target.value)} value={newName}/>
  const inputBitcoin = <input className={styles.inputName} placeholder="Digite o novo nome aqui" type="text" onChange={(e) => setNewBitcoinName(e.target.value)} value={newBitcoinName}/>

  return (
    <div className={changeStyle()}>
      <div className={styles.display}>
        <div data-tip="" className={styles.iconContainer}>
          <p className={styles.icon}>{icon}</p>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>{title}</p>
        </div>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.textValue}>{value}</p>
      </div>
      <div className={styles.inputsContainer}>
        {nameChange === 1 ? inputComum : inputBitcoin}
      </div>
      <motion.button className={styles.alterarButton} onClick={() => changeName(nameChange)} transition={{ type: "spring", stiffness: 700, damping: 30 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.0, transition: {duration: 0.1}}}>ALTERAR</motion.button>
    </div>
  );
}