/* Pages */
import Home from './pages/Home/Home';
import Criptos from './pages/Criptos/Criptos';
import Upgrade from './pages/Upgrade/Upgrade';
import Updates from './pages/Updates/Updates';

/* Components */
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ValuesContext } from './contexts/ValuesContext/ValuesContext';
import { BuyContext } from './contexts/BuyContext/BuyContext';
import { RebirthUpgradeContext } from './contexts/RebirthUpgradeContext/RebirthUpgradeContext';

import { useState, useEffect } from 'react';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import '../src/css/notifications.css';

import ShowUpgradeInfo from './components/ShowUpgradeInfo/ShowUpgradeInfo';

import HowToPlay from './pages/HowToPlay/HowToPlay';
import Rebirth from './pages/Rebirth/Rebirth';

import { Buffer } from 'buffer';
import CustomizeBusiness from './pages/CustomizeBusiness/CustomizeBusiness';

const varList = require('./VariblesObject/VariablesObject');

const upgradesGps = require('./UpgradeObjects/UpgradesGPS/UpgradesGPS');
const upgradesGpc = require('./UpgradeObjects/UpgradesGPC/UpgradesGPC');
const upgradesMpc = require('./UpgradeObjects/UpgradesMPC/UpgradesMPC');

function App() {
  const [ variables, setVariables ] = useState(() => {
    try { /* Se o jogo já estiver criptografado */
      const savedVariables = localStorage.getItem('MoneyClickerSave');
      const decodedVariables = Buffer.from(savedVariables, 'base64').toString('utf8');
      const newVariables = JSON.parse(decodedVariables);
      if(newVariables != null) {
        if(Object.keys(newVariables[0]).length < Object.keys(varList.variablesList[0]).length) {
          newVariables[0] = Object.assign(varList.variablesList[0], newVariables[0]);
        }
      }
      return newVariables || varList.variablesList;
    } catch(err) { /* Caso ainda não esteja criptografado */
      console.log(err);
      const savedVariables = localStorage.getItem('MoneyClickerSave');
      const newVariables = JSON.parse(savedVariables);
      if(newVariables != null) {
        if(Object.keys(newVariables[0]).length < Object.keys(varList.variablesList[0]).length) {
          newVariables[0] = Object.assign(varList.variablesList[0], newVariables[0]);
        }
      }
      return newVariables || varList.variablesList;
    }
  });

  /* Currency */
  const [ balance, setBalance ] = useState(() => parseFloat(variables[0].currency.balance) || 0);
  const [ btcBalance, setBtcBalance ] = useState(() => parseFloat(variables[0].currency.btcBalance) || 0);

  /* Earn values */
  const [ gpcValue, setGpcValue ] = useState(() => parseFloat(variables[0].earnValues.gpcValue) || 1);
  const [ gpsValue, setGpsValue ] = useState(() => parseFloat(variables[0].earnValues.gpsValue) || 0);
  const [ mpcValue, setMpcValue ] = useState(() => parseFloat(variables[0].earnValues.mpcValue) || 0.00750);

  /* Business Data */
  const [ businessName, setBusinessName ] = useState(() => variables[0].businessData.businessName || 'MoneyClicker Invest');

  /* Upgrades Especiais */
  const [ upgrade01, setUpgrade01 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade01) || 0);
  const [ upgrade02, setUpgrade02 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade02) || 0);
  const [ upgrade03, setUpgrade03 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade03) || 0);
  const [ upgrade04, setUpgrade04 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade04) || 0);
  const [ upgrade05, setUpgrade05 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade05) || 0);
  const [ upgrade06, setUpgrade06 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade06) || 0);
  const [ upgrade07, setUpgrade07 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade07) || 0);
  const [ upgrade08, setUpgrade08 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade08) || 0);
  const [ upgrade09, setUpgrade09 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade09) || 0);
  const [ upgrade10, setUpgrade10 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade10) || 0);
  const [ upgrade11, setUpgrade11 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade11) || 0);
  const [ upgrade12, setUpgrade12 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade12) || 0);
  const [ upgrade13, setUpgrade13 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade13) || 0);
  const [ upgrade14, setUpgrade14 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade14) || 0);
  const [ upgrade15, setUpgrade15 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade15) || 0);
  const [ upgrade16, setUpgrade16 ] = useState(() => parseInt(variables[0].specialsUpgrade.upgrade16) || 0);

  /* Variáveis upgrades do Renascimento */
  const [ rebirthUpgrade1, setRebirthUpgrade1 ] = useState(() => parseFloat(variables[0].rebirthSpecialUpgrade.rebirthUpgrade1) || 0);
  const [ rebirthUpgrade2, setRebirthUpgrade2 ] = useState(() => parseFloat(variables[0].rebirthSpecialUpgrade.rebirthUpgrade2) || 0);
  const [ rebirthUpgrade3, setRebirthUpgrade3 ] = useState(() => parseFloat(variables[0].rebirthSpecialUpgrade.rebirthUpgrade3) || 0);
  const [ rebirthUpgrade4, setRebirthUpgrade4 ] = useState(() => parseFloat(variables[0].rebirthSpecialUpgrade.rebirthUpgrade4) || 0);
  const [ rebirthUpgrade5, setRebirthUpgrade5 ] = useState(() => parseFloat(variables[0].rebirthSpecialUpgrade.rebirthUpgrade5) || 0);
  const [ rebirthUpgrade6, setRebirthUpgrade6 ] = useState(() => parseFloat(variables[0].rebirthSpecialUpgrade.rebirthUpgrade6) || 0);

  /* Acrescenta os Boosts em Porcentagem */
  const [ gpcBoost, setGpcBoost ] = useState(() => parseFloat(variables[0].boosts.gpcBoost) || 1.0);
  const [ gpsBoost, setGpsBoost ] = useState(() => parseFloat(variables[0].boosts.gpsBoost) || 1.0);
  const [ mpcBoost, setMpcBoost ] = useState(() => parseFloat(variables[0].boosts.mpcBoost) || 1.0);

  /* Multiplicador */
  const [ gpcMultiply, setGpcMultiply ] = useState(() => parseFloat(variables[0].multipliers.gpcMultiply) || 1.0);
  const [ gpsMultiply, setGpsMultiply ] = useState(() => parseFloat(variables[0].multipliers.gpsMultiply) || 1.0);
  const [ mpcMultiply, setMpcMultiply ] = useState(() => parseFloat(variables[0].multipliers.mpcMultiply) || 1.0);

  /* Acrescenta os Boosts do Rebirth em Porcentagem */
  const [ gpcRebirthBoost, setGpcRebirthBoost ] = useState(() => parseFloat(variables[0].rebirthBoostsToApply.gpcRebirthBoost) || 0.0);
  const [ gpsRebirthBoost, setGpsRebirthBoost ] = useState(() => parseFloat(variables[0].rebirthBoostsToApply.gpsRebirthBoost) || 0.0);
  const [ mpcRebirthBoost, setMpcRebirthBoost ] = useState(() => parseFloat(variables[0].rebirthBoostsToApply.mpcRebirthBoost) || 0.0);

  /* Melhora o tempo de mineração */
  const [ miningTime, setMiningTime ] = useState(() => parseFloat(variables[0].miningData.miningTime) || 1.0);

  /* Renascimento Boosters */
  const [ gpsRebirth, setGpsRebirth ] = useState(() => parseFloat(variables[0].rebirthBoosts.gpsRebirth) || 0);
  const [ gpcRebirth, setGpcRebirth ] = useState(() => parseFloat(variables[0].rebirthBoosts.gpcRebirth) || 0);
  const [ mpcRebirth, setMpcRebirth ] = useState(() => parseFloat(variables[0].rebirthBoosts.mpcRebirth) || 0);

  /* Pontos de Renascimento */
  const [ rebirthPoints, setRebirthPoints ] = useState(() => parseInt(variables[0].rebirthData.rebirthPoints) || 0);

  /* Upgrades especiais de Renascimento */
  const [ specialGpsBoost, setSpecialGpsBoost ] = useState(() => parseFloat(variables[0].specialRebirthBoosts.specialGpsBoost) || 0.0);
  const [ specialGpcBoost, setSpecialGpcBoost ] = useState(() => parseFloat(variables[0].specialRebirthBoosts.specialGpcBoost) || 0.0);
  const [ specialMpcBoost, setSpecialMpcBoost ] = useState(() => parseFloat(variables[0].specialRebirthBoosts.specialMpcBoost) || 0.0);
  
  /* Status dos upgrades especiais de Renascimento */
  const [ specialGpsBoostStatus, setSpecialGpsBoostStatus ] = useState(() => parseFloat(variables[0].specialRebirthStatus.specialGpsBoostStatus) || 0);
  const [ specialGpcBoostStatus, setSpecialGpcBoostStatus ] = useState(() => parseFloat(variables[0].specialRebirthStatus.specialGpcBoostStatus) || 0);
  const [ specialMpcBoostStatus, setSpecialMpcBoostStatus ] = useState(() => parseFloat(variables[0].specialRebirthStatus.specialMpcBoostStatus) || 0);

  /* Tema ativo */
  const [ activeTheme, setActiveTheme ] = useState(() => variables[0].themes.activeTheme || 1);
  const [ activeColor, setActiveColor ] = useState(() => variables[0].themes.activeColor || 1);
  const [ unlocked, setUnlocked ] = useState(() => variables[0].themes.unlocked || 0);

  /* END OF INITIAL VARIABLES */

  const [ notificationType, setNotificationType ] = useState(0);

  useEffect(() => {
    if (notificationType === 1) {
      setNotificationType(0);
      return NotificationManager.info('Você não possui dinheiro para comprar esta melhoria.', 'Valor Insuficiente', 3000);
    } else if(notificationType === 2) {
      setNotificationType(0);
      return NotificationManager.info('Insira o valor que deseja converter em Bitcoins!', 'Campo Vazio', 3000);
    } else if(notificationType === 3) {
      setNotificationType(0);
      return NotificationManager.info('Você não possui esta quantia de Bitcoins para converter.', 'Bitcoin Insuficiente', 3000);
    } else if(notificationType === 4) {
      setNotificationType(0);
      return NotificationManager.info('Você deve confirmar que leu os termos para continuar.', 'Confirme a Leitura', 3000);
    } else if(notificationType === 5) {
      setNotificationType(0);
      return NotificationManager.info('O nome do seu negócio não pode estar vazio, seja criativo e pense em algo!', 'Um nome Criativo', 3000);
    } else if(notificationType === 6) {
      setNotificationType(0);
      return NotificationManager.info('Uau, você já alcançou o nível máximo, que tal procurar outro upgrade?', 'Nível Máximo', 3000);
    } else if(notificationType === 7) {
      setNotificationType(0);
      return NotificationManager.info('Certifique-se de que leu os termos e que você tem a quantia necessária em dinheiro para Renascer.', 'Leu os Termos?', 3000);
    } else if(notificationType === 8) {
      setNotificationType(0);
      return NotificationManager.info('Você não possui pontos de renascimento suficientes para comprar esta melhoria.', 'Valor Insuficiente', 3000);
    } else if(notificationType === 9) {
      setNotificationType(0);
      return NotificationManager.info('Você não possui dinheiro para comprar os temas.', 'Valor Insuficiente', 3000);
    } else if(notificationType === 10) {
      setNotificationType(0);
      return NotificationManager.info('Você deve comprar os temas para poder aplicá-los!', 'Compre os Temas', 3000);
    }
  }, [notificationType]);

  useEffect(() => {
    setVariables(
      [
        { 
          currency: { 
            balance: balance.toFixed(5), 
            btcBalance: btcBalance.toFixed(5),
          },
          earnValues: {
            gpcValue: gpcValue.toFixed(5),
            gpsValue: gpsValue.toFixed(5),
            mpcValue: mpcValue.toFixed(5),
          },
          businessData: {
            businessName: businessName,
          },
          specialsUpgrade: {
            upgrade01: upgrade01,
            upgrade02: upgrade02,
            upgrade03: upgrade03,
            upgrade04: upgrade04,
            upgrade05: upgrade05,
            upgrade06: upgrade06,
            upgrade07: upgrade07,
            upgrade08: upgrade08,
            upgrade09: upgrade09,
            upgrade10: upgrade10,
            upgrade11: upgrade11,
            upgrade12: upgrade12,
            upgrade13: upgrade13,
            upgrade14: upgrade14,
            upgrade15: upgrade15,
            upgrade16: upgrade16,
          },
          rebirthSpecialUpgrade: {
            rebirthUpgrade1: rebirthUpgrade1,
            rebirthUpgrade2: rebirthUpgrade2,
            rebirthUpgrade3: rebirthUpgrade3,
            rebirthUpgrade4: rebirthUpgrade4,
            rebirthUpgrade5: rebirthUpgrade5,
            rebirthUpgrade6: rebirthUpgrade6,
          },
          boosts: {
            gpcBoost: gpcBoost.toFixed(2),
            gpsBoost: gpsBoost.toFixed(2),
            mpcBoost: mpcBoost.toFixed(2),
          },
          multipliers: {
            gpcMultiply: gpcMultiply.toFixed(5),
            gpsMultiply: gpsMultiply.toFixed(5),
            mpcMultiply: mpcMultiply.toFixed(5),
          },
          rebirthBoostsToApply: {
            gpcRebirthBoost: gpcRebirthBoost.toFixed(14),
            gpsRebirthBoost: gpsRebirthBoost.toFixed(14),
            mpcRebirthBoost: mpcRebirthBoost.toFixed(14),
          },
          miningData: {
            miningTime: miningTime,
          },
          rebirthBoosts: {
            gpcRebirth: gpcRebirth.toFixed(14),
            gpsRebirth: gpsRebirth.toFixed(14),
            mpcRebirth: mpcRebirth.toFixed(14),
          },
          rebirthData: {
            rebirthPoints: rebirthPoints,
          },
          specialRebirthBoosts: {
            specialGpsBoost: specialGpsBoost,
            specialGpcBoost: specialGpcBoost,
            specialMpcBoost: specialMpcBoost,
          },
          specialRebirthStatus: {
            specialGpsBoostStatus: specialGpsBoostStatus,
            specialGpcBoostStatus: specialGpcBoostStatus,
            specialMpcBoostStatus: specialMpcBoostStatus,
          },
          themes: {
            activeTheme: activeTheme,
            activeColor: activeColor,
            unlocked: unlocked,
          }
        }
      ]
    );
  }, [balance, rebirthPoints, btcBalance, activeTheme, activeColor]);

  useEffect(() => {
    const savedVariables = JSON.stringify(variables);
    localStorage.setItem('MoneyClickerSave', Buffer.from(savedVariables, 'binary').toString('base64'));
  }, [variables]);

  useEffect(() => {
    let updateValue = setInterval(() => {
      if(specialGpsBoost === 1) {
        setBalance(balance => balance + parseFloat((((gpsValue * ((gpsBoost + specialGpsBoost) + gpsRebirthBoost)) * gpsMultiply) / 100).toFixed(2)));
      }else {
        setBalance(balance => balance + parseFloat((((gpsValue * (gpsBoost + gpsRebirthBoost)) * gpsMultiply) / 100).toFixed(2)));
      }
    }, 10);

    return () => {
      clearInterval(updateValue);
    }
  }, [balance]);

  const [ showHide, setShowHide ] = useState(false);
  const [ showHideRebirth, setShowHideRebirth ] = useState(false);

  const [ buyTitle, setBuyTitle ] = useState('Sem Título');
  const [ buyValue, setBuyValue ] = useState(100000.0);
  const [ buyDescription, setBuyDescription ] = useState('Descrição aleatória!');
  const [ buyIcon, setBuyIcon ] = useState('Um Icone');
  const [ buyId, setBuyId ] = useState(0);

  const upgradesGroup = [ upgradesGps.gpsList, upgradesGpc.gpcList, upgradesMpc.mpcList ];

  const [ generalUpgrades, setGeneralUpgrades ] = useState(() => {
    try {
      const savedGeneralUpgrades = localStorage.getItem('MoneyClickerData');
      const decodedGeneralUpgrades = Buffer.from(savedGeneralUpgrades, 'base64').toString('utf8');
      const newGeneralUpgrades = JSON.parse(decodedGeneralUpgrades);
      if(newGeneralUpgrades != null) {
        if(newGeneralUpgrades[0].length < upgradesGps.gpsList.length) {
          newGeneralUpgrades[0] = Object.assign(upgradesGps.gpsList, newGeneralUpgrades[0]);
        }
        if(newGeneralUpgrades[1].length < upgradesGpc.gpcList.length) {
          newGeneralUpgrades[1] = Object.assign(upgradesGpc.gpcList, newGeneralUpgrades[1]);
        }
        if(newGeneralUpgrades[2].length < upgradesMpc.mpcList.length) {
          newGeneralUpgrades[2] = Object.assign(upgradesMpc.mpcList, newGeneralUpgrades[2]);
        }
      }
      return newGeneralUpgrades || upgradesGroup;
    } catch(SyntaxError) {
      const savedGeneralUpgrades = localStorage.getItem('MoneyClickerData');
      const newGeneralUpgrades = JSON.parse(savedGeneralUpgrades);
      if(newGeneralUpgrades != null) {
        if(newGeneralUpgrades[0].length < upgradesGps.gpsList.length) {
          newGeneralUpgrades[0] = Object.assign(upgradesGps.gpsList, newGeneralUpgrades[0]);
        }
        if(newGeneralUpgrades[1].length < upgradesGpc.gpcList.length) {
          newGeneralUpgrades[1] = Object.assign(upgradesGpc.gpcList, newGeneralUpgrades[1]);
        }
        if(newGeneralUpgrades[2].length < upgradesMpc.mpcList.length) {
          newGeneralUpgrades[2] = Object.assign(upgradesMpc.mpcList, newGeneralUpgrades[2]);
        }
      }
      return newGeneralUpgrades || upgradesGroup;
    }
  });

  useEffect(() => {
    const savedGeneralUpgrades = JSON.stringify(generalUpgrades);
    localStorage.setItem('MoneyClickerData', Buffer.from(savedGeneralUpgrades, 'binary').toString('base64'));
  }, [generalUpgrades]);

  useEffect(() => {
    let style = document.documentElement.style;

    if(unlocked === 1) {
      if(activeTheme === 1) {
        style.setProperty('--corFundo', '#222133');
        style.setProperty('--corFundoDisabled', '#3a3a50');
        style.setProperty('--corFundoHover', '#3c3954');
  
        style.setProperty('--corTooltip', '#17161F');
        style.setProperty('--corTooltipHover', '#1c1c26');
        
        style.setProperty('--corFundoNav', '#2C2A42');
        style.setProperty('--corFundoNavHover', '#44406D');
  
        style.setProperty('--corTexto', '#A9A8B6');
        style.setProperty('--corTextoBranco', '#FFFFFF');
        style.setProperty('--corTextoValor', '#FFFFFF');
        style.setProperty('--corTextoPlaceHolder', '#595672');
        style.setProperty('--corTextoBtn', '#FFFFFF');
  
        style.setProperty('--corIcone', '#A9A8B6');
        style.setProperty('--corIconeHover', '#FFFFFF');
  
        style.setProperty('--corInputClaro', '#373551');
        /* -----------------------END----------------------- */
      }else if(activeTheme === 2) {
        style.setProperty('--corFundo', '#0F0F0F');
        style.setProperty('--corFundoDisabled', '#3c3c3c');
        style.setProperty('--corFundoHover', '#202020');
  
        style.setProperty('--corTooltip', '#141414');
        style.setProperty('--corTooltipHover', '#202020');
  
        style.setProperty('--corFundoNav', '#141414');
        style.setProperty('--corFundoNavHover', '#202020');
  
        style.setProperty('--corTexto', '#FFFFFF');
        style.setProperty('--corTextoBranco', '#FFFFFF');
        style.setProperty('--corTextoValor', '#FFFFFF');
        style.setProperty('--corTextoPlaceHolder', '#7c7c7c');
        style.setProperty('--corTextoBtn', '#FFFFFF');
  
        style.setProperty('--corIcone', '#d4d4d4');
        style.setProperty('--corIconeHover', '#FFFFFF');
  
        style.setProperty('--corInputClaro', '#1c1c1c');
        /* -----------------------END----------------------- */
      }else if(activeTheme === 3) {
        style.setProperty('--corFundo', '#212A33');
        style.setProperty('--corFundoDisabled', '#303D49');
        style.setProperty('--corFundoHover', '#2C3743');
  
        style.setProperty('--corTooltip', '#2C3743');
        style.setProperty('--corTooltipHover', '#3F5161');
  
        style.setProperty('--corFundoNav', '#2A3642');
        style.setProperty('--corFundoNavHover', '#3F5161');
  
        style.setProperty('--corTexto', '#FFFFFF');
        style.setProperty('--corTextoBranco', '#FFFFFF');
        style.setProperty('--corTextoValor', '#FFFFFF');
        style.setProperty('--corTextoPlaceHolder', '#595672');
        style.setProperty('--corTextoBtn', '#FFFFFF');
  
        style.setProperty('--corIcone', '#d4d4d4');
        style.setProperty('--corIconeHover', '#FFFFFF');
  
        style.setProperty('--corInputClaro', '#33414F');
        /* -----------------------END----------------------- */
      }else if(activeTheme === 4) {
        style.setProperty('--corFundo', '#33212C');
        style.setProperty('--corFundoDisabled', '#49303C');
        style.setProperty('--corFundoHover', '#432C38');
  
        style.setProperty('--corTooltip', '#432C38');
        style.setProperty('--corTooltipHover', '#613F53');
  
        style.setProperty('--corFundoNav', '#422A38');
        style.setProperty('--corFundoNavHover', '#613F53');
  
        style.setProperty('--corTexto', '#FFFFFF');
        style.setProperty('--corTextoBranco', '#FFFFFF');
        style.setProperty('--corTextoValor', '#FFFFFF');
        style.setProperty('--corTextoPlaceHolder', '#6A4F60');
        style.setProperty('--corTextoBtn', '#FFFFFF');
  
        style.setProperty('--corIcone', '#d4d4d4');
        style.setProperty('--corIconeHover', '#FFFFFF');
  
        style.setProperty('--corInputClaro', '#4F3344');
        /* -----------------------END----------------------- */
      }else if(activeTheme === 5) {
        style.setProperty('--corFundo', '#332121');
        style.setProperty('--corFundoDisabled', '#493030');
        style.setProperty('--corFundoHover', '#432C2C');
  
        style.setProperty('--corTooltip', '#432C2C');
        style.setProperty('--corTooltipHover', '#613F3F');
  
        style.setProperty('--corFundoNav', '#422A2A');
        style.setProperty('--corFundoNavHover', '#613F3F');
  
        style.setProperty('--corTexto', '#FFFFFF');
        style.setProperty('--corTextoBranco', '#FFFFFF');
        style.setProperty('--corTextoValor', '#FFFFFF');
        style.setProperty('--corTextoPlaceHolder', '#6A4F4F');
        style.setProperty('--corTextoBtn', '#FFFFFF');
  
        style.setProperty('--corIcone', '#d4d4d4');
        style.setProperty('--corIconeHover', '#FFFFFF');
  
        style.setProperty('--corInputClaro', '#4F3333');
        /* -----------------------END----------------------- */
      }else if(activeTheme === 6) {
        style.setProperty('--corFundo', '#213329');
        style.setProperty('--corFundoDisabled', '#476655');
        style.setProperty('--corFundoHover', '#2C4338');
  
        style.setProperty('--corTooltip', '#2C4338');
        style.setProperty('--corTooltipHover', '#3F614F');
  
        style.setProperty('--corFundoNav', '#2A4236');
        style.setProperty('--corFundoNavHover', '#3F614F');
  
        style.setProperty('--corTexto', '#FFFFFF');
        style.setProperty('--corTextoBranco', '#FFFFFF');
        style.setProperty('--corTextoValor', '#FFFFFF');
        style.setProperty('--corTextoPlaceHolder', '#4F6A61');
        style.setProperty('--corTextoBtn', '#FFFFFF');
  
        style.setProperty('--corIcone', '#d4d4d4');
        style.setProperty('--corIconeHover', '#FFFFFF');
  
        style.setProperty('--corInputClaro', '#334F43');
        /* -----------------------END----------------------- */
      }else {
        style.setProperty('--corFundo', '#222133');
        style.setProperty('--corFundoDisabled', '#3a3a50');
        style.setProperty('--corFundoHover', '#3c3954');
  
        style.setProperty('--corTooltip', '#17161F');
        style.setProperty('--corTooltipHover', '#1c1c26');
        
        style.setProperty('--corFundoNav', '#2C2A42');
        style.setProperty('--corFundoNavHover', '#44406D');
  
        style.setProperty('--corTexto', '#A9A8B6');
        style.setProperty('--corTextoBranco', '#FFFFFF');
        style.setProperty('--corTextoValor', '#FFFFFF');
        style.setProperty('--corTextoPlaceHolder', '#595672');
        style.setProperty('--corTextoBtn', '#FFFFFF');
  
        style.setProperty('--corIcone', '#A9A8B6');
        style.setProperty('--corIconeHover', '#FFFFFF');
  
        style.setProperty('--corInputClaro', '#373551');
        /* -----------------------END----------------------- */
      }
    }
  }, [activeTheme]);

  useEffect(() => {
    let style = document.documentElement.style;

    if(unlocked === 1) {
      if(activeColor === 1) {
        style.setProperty('--corPrimaria', '#0a84ff');
        style.setProperty('--corPrimariaEscuro', '#0775e2');
        style.setProperty('--corPrimariaHover', '#2f97ff');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #0a84ff 0%, #0a84ff 39.19%, #2f97ff 47.92%, #0a84ff 57.29%, #0a84ff 100%)');
      }else if(activeColor === 2) {
        style.setProperty('--corPrimaria', '#ff9f0a');
        style.setProperty('--corPrimariaEscuro', '#CF7E04');
        style.setProperty('--corPrimariaHover', '#FFA724');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #ff9f0a 0%, #ff9f0a 39.19%, #FFA724 47.92%, #ff9f0a 57.29%, #ff9f0a 100%)');
      }else if(activeColor === 3) {
        style.setProperty('--corPrimaria', '#ffd60a');
        style.setProperty('--corPrimariaEscuro', '#CFAD04');
        style.setProperty('--corPrimariaHover', '#FFDA24');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #ffd60a 0%, #ffd60a 39.19%, #FFDA24 47.92%, #ffd60a 57.29%, #ffd60a 100%)');
      }else if(activeColor === 4) {
        style.setProperty('--corPrimaria', '#30d158');
        style.setProperty('--corPrimariaEscuro', '#15A138');
        style.setProperty('--corPrimariaHover', '#54FF7F');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #30d158 0%, #30d158 39.19%, #54FF7F 47.92%, #30d158 57.29%, #30d158 100%)');
      }else if(activeColor === 5) {
        style.setProperty('--corPrimaria', '#66d4cf');
        style.setProperty('--corPrimariaEscuro', '#3EA39E');
        style.setProperty('--corPrimariaHover', '#94FFFA');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #66d4cf 0%, #66d4cf 39.19%, #94FFFA 47.92%, #66d4cf 57.29%, #66d4cf 100%)');
      }else if(activeColor === 6) {
        style.setProperty('--corPrimaria', '#40c8e0');
        style.setProperty('--corPrimariaEscuro', '#219BB0');
        style.setProperty('--corPrimariaHover', '#63E8FF');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #40c8e0 0%, #40c8e0 39.19%, #63E8FF 47.92%, #40c8e0 57.29%, #40c8e0 100%)');
      }else if(activeColor === 7) {
        style.setProperty('--corPrimaria', '#64d2ff');
        style.setProperty('--corPrimariaEscuro', '#3CA5CF');
        style.setProperty('--corPrimariaHover', '#7DDAFF');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #64d2ff 0%, #64d2ff 39.19%, #7DDAFF 47.92%, #64d2ff 57.29%, #64d2ff 100%)');
      }else if(activeColor === 8) {
        style.setProperty('--corPrimaria', '#ff453a');
        style.setProperty('--corPrimariaEscuro', '#CF241B');
        style.setProperty('--corPrimariaHover', '#FF5D54');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #ff453a 0%, #ff453a 39.19%, #FF5D54 47.92%, #ff453a 57.29%, #ff453a 100%)');
      }else if(activeColor === 9) {
        style.setProperty('--corPrimaria', '#5e5ce6');
        style.setProperty('--corPrimariaEscuro', '#3836B5');
        style.setProperty('--corPrimariaHover', '#8280FF');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #5e5ce6 0%, #5e5ce6 39.19%, #8280FF 47.92%, #5e5ce6 57.29%, #5e5ce6 100%)');
      }else if(activeColor === 10) {
        style.setProperty('--corPrimaria', '#bf5af2');
        style.setProperty('--corPrimariaEscuro', '#9334C2');
        style.setProperty('--corPrimariaHover', '#D278FF');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #bf5af2 0%, #bf5af2 39.19%, #D278FF 47.92%, #bf5af2 57.29%, #bf5af2 100%)');
      }else if(activeColor === 11) {
        style.setProperty('--corPrimaria', '#ff375f');
        style.setProperty('--corPrimariaEscuro', '#CF193D');
        style.setProperty('--corPrimariaHover', '#FF5274');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #ff375f 0%, #ff375f 39.19%, #FF5274 47.92%, #ff375f 57.29%, #ff375f 100%)');
      }else if(activeColor === 12) {
        style.setProperty('--corPrimaria', '#ac8e68');
        style.setProperty('--corPrimariaEscuro', '#7A603D');
        style.setProperty('--corPrimariaHover', '#F7D7AD');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #ac8e68 0%, #ac8e68 39.19%, #F7D7AD 47.92%, #ac8e68 57.29%, #ac8e68 100%)');
      }else {
        style.setProperty('--corPrimaria', '#0a84ff');
        style.setProperty('--corPrimariaEscuro', '#0775e2');
        style.setProperty('--corPrimariaHover', '#2f97ff');

        style.setProperty('--betaTester', 'linear-gradient(263.66deg, #0a84ff 0%, #0a84ff 39.19%, #2f97ff 47.92%, #0a84ff 57.29%, #0a84ff 100%)');
      }
    }
  }, [activeColor]);

  return (
    <ValuesContext.Provider 
      value={
        { 
          balance,
          setBalance,
          gpcValue,
          setGpcValue,
          businessName,
          setBusinessName,
          gpsValue,
          setGpsValue,
          btcBalance,
          setBtcBalance,
          mpcValue,
          setMpcValue,
          notificationType,
          setNotificationType,
          showHide,
          setShowHide,
          showHideRebirth,
          setShowHideRebirth,
          /* Multiplicadores e Boosters */
          miningTime,
          setMiningTime,
          /* Boost por porcentagem */
          gpcBoost,
          setGpcBoost,
          mpcBoost,
          setMpcBoost,
          gpsBoost,
          setGpsBoost,
          /* Multiplicador */
          mpcMultiply,
          setMpcMultiply,
          gpcMultiply,
          setGpcMultiply,
          gpsMultiply,
          setGpsMultiply,
          /* Rebirth */
          gpsRebirth,
          setGpsRebirth,
          gpcRebirth,
          setGpcRebirth,
          mpcRebirth,
          setMpcRebirth,
          /* Rebirth Boost */
          gpcRebirthBoost,
          setGpcRebirthBoost,
          gpsRebirthBoost,
          setGpsRebirthBoost,
          mpcRebirthBoost,
          setMpcRebirthBoost,
          /* Rebirth Points */
          rebirthPoints,
          setRebirthPoints,
          /* Variables */
          variables,
          setVariables,
          /* Special upgrades Bônus */
          specialGpcBoost,
          setSpecialGpcBoost,
          specialGpsBoost,
          setSpecialGpsBoost,
          specialMpcBoost,
          setSpecialMpcBoost,
          /* Special upgrades status */
          specialGpsBoostStatus,
          setSpecialGpsBoostStatus,
          specialGpcBoostStatus,
          setSpecialGpcBoostStatus,
          specialMpcBoostStatus,
          setSpecialMpcBoostStatus,
          /* General Upgrades */
          generalUpgrades,
          setGeneralUpgrades,
          /* Temas e Cores */
          activeTheme,
          setActiveTheme,
          activeColor,
          setActiveColor,
          unlocked,
          setUnlocked,
        }
      }
    >
      <BuyContext.Provider 
        value={
          {
            buyTitle,
            setBuyTitle,
            buyValue,
            setBuyValue,
            buyDescription,
            setBuyDescription,
            buyIcon,
            setBuyIcon,
            buyId,
            setBuyId,
            /* Upgrades Comprados */
            upgrade01,
            setUpgrade01,
            upgrade02,
            setUpgrade02,
            upgrade03,
            setUpgrade03,
            upgrade04,
            setUpgrade04,
            upgrade05,
            setUpgrade05,
            upgrade06,
            setUpgrade06,
            upgrade07,
            setUpgrade07,
            upgrade08,
            setUpgrade08,
            upgrade09,
            setUpgrade09,
            upgrade10,
            setUpgrade10,
            upgrade11,
            setUpgrade11,
            upgrade12,
            setUpgrade12,
            upgrade13,
            setUpgrade13,
            upgrade14,
            setUpgrade14,
            upgrade15,
            setUpgrade15,
            upgrade16,
            setUpgrade16,
            /* General Upgrades */
            generalUpgrades,
            setGeneralUpgrades,
          }
        }
      >
        <RebirthUpgradeContext.Provider 
        value={
          {
            rebirthUpgrade1,
            setRebirthUpgrade1,
            rebirthUpgrade2,
            setRebirthUpgrade2,
            rebirthUpgrade3,
            setRebirthUpgrade3,
            rebirthUpgrade4,
            setRebirthUpgrade4,
            rebirthUpgrade5,
            setRebirthUpgrade5,
            rebirthUpgrade6,
            setRebirthUpgrade6,
            /* General Upgrades */
            generalUpgrades,
            setGeneralUpgrades,
          }
        }>
          <Router>
            <ShowUpgradeInfo/>
            <NavBar/>
            <NotificationContainer/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/upgrade" element={<Upgrade/>}></Route>
              <Route path="/criptos" element={<Criptos/>}></Route>
              <Route path="/rebirth" element={<Rebirth/>}></Route>
              <Route path="/customize" element={<CustomizeBusiness/>}></Route>
              <Route path="/updates" element={<Updates/>}></Route>
              <Route path="/howtoplay" element={<HowToPlay/>}></Route>
            </Routes>
          </Router>
        </RebirthUpgradeContext.Provider>
      </BuyContext.Provider>
    </ValuesContext.Provider>
  );
}

export default App;