import styles from './NavBar.module.css';

import { FaHome, FaBtc, FaShoppingCart, FaPencilAlt, FaBars, FaQuestionCircle, FaEdit } from 'react-icons/fa';
import { BsLightbulbFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { GiHeartWings } from 'react-icons/gi';
import { BiCodeAlt } from 'react-icons/bi';

import { motion } from 'framer-motion';

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function NavBar() {
  const router = useLocation();

  const [ optionsState, setOptionsState ] = useState(false);

  function animateOpenMenu() {
    let optionsContainer = document.getElementById('optionsContainer');
    
    if(!optionsState) {
      optionsContainer.style.opacity = '1';
      optionsContainer.style.pointerEvents = 'all';
      optionsContainer.style.right = '0';
      setOptionsState(!optionsState);
      return;
    }
    optionsContainer.style.opacity = '0';
    optionsContainer.style.pointerEvents = 'none';
    optionsContainer.style.right = '-400px';
    setOptionsState(!optionsState);
  }

  return (
    <div className={styles.navbar}>
      <motion.div 
        id="optionsContainer"
        className={styles.optionsContainer}
      >
        <button 
          className={styles.closeBtn}
          onClick={() => animateOpenMenu()}
        >
          {<IoClose/>}
        </button>
        <div className={styles.optionsTextContainer}>
          <p className={styles.textOptions}>Menu de <span className={styles.textBoldOptions}>Opções</span></p>
        </div>
        <div className={styles.menuItems}>
          <ul className={styles.listItemsContainer} onClick={() => animateOpenMenu()}>
            <li className={styles.itemContainer}>
              <Link to="/" className={router.pathname === "/" ? styles.optionsItemSelected : styles.optionsItem}>
                <FaHome className={styles.optionsIcon}/>
                <p>Início</p>
              </Link>
            </li>
            <li className={styles.itemContainer}>
              <Link to="/upgrade" className={router.pathname === "/upgrade" ? styles.optionsItemSelected : styles.optionsItem}>
                <FaShoppingCart className={styles.optionsIcon}/>
                <p>Loja de Melhorias</p>
              </Link>
            </li>
            <li className={styles.itemContainer}>
              <Link to="/criptos" className={router.pathname === "/criptos" ? styles.optionsItemSelected : styles.optionsItem}>
                <FaBtc className={styles.optionsIcon}/>
                <p>Mineração de Bitcoin</p>
              </Link>
            </li>
            <li className={styles.itemContainer}>
              <Link to="/rebirth" className={router.pathname === "/rebirth" ? styles.optionsItemSelected : styles.optionsItem}>
                <GiHeartWings className={styles.optionsIcon}/>
                <p>Renascimento</p>
              </Link>
            </li>
            <li className={styles.itemContainer}>
              <Link to="/customize" className={router.pathname === "/customize" ? styles.optionsItemSelected : styles.optionsItem}>
                <FaEdit className={styles.optionsIcon}/>
                <p>Customização</p>
              </Link>
            </li>
            <li className={styles.itemContainer}>
              <Link to="/updates" className={router.pathname === "/updates" ? styles.optionsItemSelected : styles.optionsItem}>
                <BsLightbulbFill className={styles.optionsIcon}/>
                <p>Novidades e Atualizações</p>
              </Link>
            </li>
            <li className={styles.itemContainer}>
              <Link to="/howtoplay" className={router.pathname === "/howtoplay" ? styles.optionsItemSelected : styles.optionsItem}>
                <FaQuestionCircle className={styles.optionsIcon}/>
                <p>Tutorial</p>
              </Link>
            </li>
          </ul>
          <div className={styles.developedContainer}>
            <p className={styles.developed}><BiCodeAlt/>&nbsp;Coded By: Lohran</p>
          </div>
        </div>
      </motion.div>
      <ul>
        <li className={router.pathname === "/" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/"><FaHome className={styles.icon}/></Link>
        </li>
        <li className={router.pathname === "/upgrade" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/upgrade"><FaShoppingCart className={styles.icon}/></Link>
        </li>
        <li className={router.pathname === "/criptos" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/criptos"><FaBtc className={styles.icon}/></Link>
        </li>
        <li className={router.pathname === "/rebirth" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/rebirth"><GiHeartWings className={styles.icon}/></Link>
        </li>
        <li 
          className={styles.optionsMenu}
          onClick={() => animateOpenMenu()}
        >
          <FaBars/>
        </li>
      </ul>
    </div>
  );
}