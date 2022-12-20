import styles from './NavBar.module.css';

import { FaHome, FaBtc, FaEdit, FaCashRegister } from 'react-icons/fa';
import { GiHeartWings } from 'react-icons/gi';
import { MdOutlineMultilineChart } from 'react-icons/md';
import { GoGear } from 'react-icons/go';
import { BiChip } from 'react-icons/bi';
import { AiFillFormatPainter } from 'react-icons/ai';
import { HiNewspaper } from 'react-icons/hi';
import { BsFillPatchQuestionFill } from 'react-icons/bs';

import { motion } from 'framer-motion';

import { Link, useLocation } from 'react-router-dom';

import { useState } from 'react';

import ReactTooltip from 'react-tooltip';
import NavBarLinkDisplay from '../NavBarLinkDisplay/NavBarLinkDisplay';

export default function NavBar() {
  const router = useLocation();

  const [ menuState, setMenuState ] = useState(false);

  const openMenu = () => {
    let top = document.getElementById('top');
    let middle = document.getElementById('middle');
    let bottom = document.getElementById('bottom');

    let menuItems = document.getElementById('menuItems');
    
    if(!menuState) {
      top.style.top = "2px";
      top.style.transform = "rotate(45deg)";
      middle.style.opacity = "0";
      middle.style.left = "-30px";
      bottom.style.bottom = "2px";
      bottom.style.transform = "rotate(-45deg)";
      menuItems.style.right = "0";
      setMenuState(!menuState);
      return;
    }
    top.style.top = "-5px";
    top.style.transform = "rotate(0deg)";
    middle.style.opacity = "1";
    middle.style.left = "0px";
    bottom.style.bottom = "-5px";
    bottom.style.transform = "rotate(0deg)";
    menuItems.style.right = "-320px";
    setMenuState(!menuState);
    return;
  }

  return (
    <div className={styles.navbar}>
      <motion.div id="optionsContainer" className={styles.optionsContainer}>
        <ReactTooltip place="bottom" multiline={true} effect="solid"/>
        <div id="menuItems" className={styles.menuItems}>
          <div className={styles.openCloseDiv}>
            <div className={styles.openCloseButton} onClick={() => openMenu()} >
              <div id="top" className={styles.top}></div>
              <div id="middle" className={styles.middle}></div>
              <div id="bottom" className={styles.bottom}></div>
            </div>
          </div>
          <div className={styles.itemsContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.title}><GoGear/>&nbsp;MENU DE OPÇÕES&nbsp;<GoGear/></p>
            </div>
            <NavBarLinkDisplay icon={<FaHome/>} title="INÍCIO" path="/" />
            <NavBarLinkDisplay icon={<BiChip/>} title="MINERAÇÃO DE BITCOIN" path="/investimento/bitcoin" />
            <NavBarLinkDisplay icon={<MdOutlineMultilineChart/>} title="CASSINO" path="/cassino" />
            <NavBarLinkDisplay icon={<FaCashRegister/>} title="LOJA COMUM" path="/melhorias" />
            <NavBarLinkDisplay icon={<FaBtc/>} title="LOJA BITCOIN" path="/lojabitcoin" />
            <NavBarLinkDisplay icon={<GiHeartWings/>} title="RENASCIMENTO" path="/renascimento" />
            <NavBarLinkDisplay icon={<AiFillFormatPainter/>} title="CUSTOMIZAÇÃO" path="/customizar" />
            {/* <NavBarLinkDisplay icon={<FaHome/>} title="DADOS DO JOGO" path="/dados" /> */}
            <NavBarLinkDisplay icon={<HiNewspaper/>} title="NOVIDADES E ATUALIZAÇÕES" path="/atualizacoes" />
            <NavBarLinkDisplay icon={<BsFillPatchQuestionFill/>} title="TUTORIAL" path="/comojogar" />
            {/* <NavBarLinkDisplay icon={<FaHome/>} title="APOIAR O MONEY CLICKER" path="/apoiar" /> */}
          </div>
        </div>
      </motion.div>
      <ul>
        <li data-tip="Cassino" className={router.pathname === "/cassino" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/cassino"><MdOutlineMultilineChart className={styles.icon}/></Link>
        </li>
        <li data-tip="Bitcoin" className={router.pathname === "/investimento/bitcoin" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/investimento/bitcoin"><FaBtc className={styles.icon}/></Link>
        </li>
        <li data-tip="Início" className={router.pathname === "/" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/"><FaHome className={styles.icon}/></Link>
        </li>
        <li data-tip="Customização e Configuração" className={router.pathname === "/customizar" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/customizar"><FaEdit className={styles.icon}/></Link>
        </li>
        <li data-tip="Renascimento" className={router.pathname === "/renascimento" ? styles.navbarItemSelected : styles.navbarItem}>
          <Link to="/renascimento"><GiHeartWings className={styles.icon}/></Link>
        </li>
      </ul>
    </div>
  );
}