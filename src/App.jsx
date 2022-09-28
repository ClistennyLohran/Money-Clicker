/* Pages */
import Home from './pages/Home/Home';
import Upgrade from './pages/Upgrade/Upgrade';
import Updates from './pages/Updates/Updates';

/* Components */
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ValuesContext } from './contexts/ValuesContext/ValuesContext';
import { BuyContext } from './contexts/BuyContext/BuyContext';
import { AdvancedMiningContext } from './contexts/AdvancedMiningContext/AdvancedMiningContext';

import { useState, useEffect } from 'react';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import '../src/css/notifications.css';

import ShowUpgradeInfo from './components/TelaDaMelhoria/TelaDaMelhoria';

import HowToPlay from './pages/HowToPlay/HowToPlay';
import Renascimento from './pages/Renascimento/Renascimento';

import { Buffer } from 'buffer';
import CustomizeBusiness from './pages/CustomizeBusiness/CustomizeBusiness';
import InvestimentoBitcoin from './pages/InvestimentoBitcoin/InvestimentoBitcoin';

const varList = require('./VariblesObject/VariablesObject');

const upgradesGps = require('./UpgradeObjects/UpgradesGPS/UpgradesGPS');
const upgradesGpc = require('./UpgradeObjects/UpgradesGPC/UpgradesGPC');
const specialUpgrades = require('./UpgradeObjects/SpecialUpgrade/SpecialUpgrade');
const specialUpgradesRebirth = require('./UpgradeObjects/SpecialUpgradeRebirth/SpecialUpgradeRebirth');
const PlacaDeVideo = require('./UpgradeObjects/ObjetosMelhoriaBitcoin/PlacaDeVideo/PlacaDeVideo');
const GeradoresEnergia = require('./UpgradeObjects/ObjetosMelhoriaBitcoin/GeradoresEnergia/GeradoresEnergia');
const MaquinasRefrigeracao = require('./UpgradeObjects/ObjetosMelhoriaBitcoin/MaquinasRefrigeracao/MaquinasRefrigeracao');

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
  const [ dollarBalance, setDollarBalance ] = useState(() => parseFloat(variables[0].currency.dollarBalance) || 1600);
  const [ dollarAmountConvert, setDollarAmountConvert ] = useState(() => parseFloat(variables[0].currency.dollarAmountConvert) || 0.00);
  const [ btcAmount, setBtcAmount ] = useState(() => parseFloat(variables[0].currency.btcAmount) || 0.000000);

  /* Advanced Mining */
  const [ miningPower, setMiningPower ] = useState(() => parseFloat(variables[0].advancedMining.miningPower) || 0.00);
  const [ miningPowerDecrease, setMiningPowerDecrease ] = useState(() => parseFloat(variables[0].advancedMining.miningPowerDecrease) || 1.00);
  const [ energyPower, setEnergyPower ] = useState(() => parseFloat(variables[0].advancedMining.energyPower) || 0.00);
  const [ energyPowerUsed, setEnergyPowerUsed ] = useState(() => parseFloat(variables[0].advancedMining.energyPowerUsed) || 0.00);
  const [ temperature, setTemperature ] = useState(() => parseFloat(variables[0].advancedMining.temperature) || 0.00);
  const [ temperatureDecrease, setTemperatureDecrease ] = useState(() => parseFloat(variables[0].advancedMining.temperatureDecrease) || 1.00);
  const [ miningPowerBoost, setMiningPowerBoost ] = useState(() => parseFloat(variables[0].advancedMining.miningPowerBoost) || 1.0);
  const [ miningPowerMultiply, setMiningPowerMultiply ] = useState(() => parseFloat(variables[0].advancedMining.miningPowerMultiply) || 1.0);
  const [ energyPowerBoost, setEnergyPowerBoost ] = useState(() => parseFloat(variables[0].advancedMining.energyPowerBoost) || 1.0);
  const [ energyPowerMultiply, setEnergyPowerMultiply ] = useState(() => parseFloat(variables[0].advancedMining.energyPowerMultiply) || 1.0);
  const [ miningBusinessName, setMiningBusinessName ] = useState(() => parseFloat(variables[0].advancedMining.miningBusinessName) || 'Bitmine Farm');
  const [ graphicsCardAmount, setGraphicsCardAmount ] = useState(() => parseFloat(variables[0].advancedMining.graphicsCardAmount) || 0);
  const [ energyGeneratorAmount, setEnergyGeneratorAmount ] = useState(() => parseFloat(variables[0].advancedMining.energyGeneratorAmount) || 0);
  const [ cardLevel, setCardLevel ] = useState(() => parseFloat(variables[0].advancedMining.cardLevel) || 1);

  /* Earn values */
  const [ gpcValue, setGpcValue ] = useState(() => parseFloat(variables[0].earnValues.gpcValue) || 1);
  const [ gpsValue, setGpsValue ] = useState(() => parseFloat(variables[0].earnValues.gpsValue) || 0);

  /* Business Data */
  const [ businessName, setBusinessName ] = useState(() => variables[0].businessData.businessName || 'MoneyClicker Invest');
  const [ level, setLevel ] = useState(() => variables[0].businessData.level || 1);
  const [ xp, setXp ] = useState(() => variables[0].businessData.xp || 100);
  const [ xpAmountPerClick, setXpAmountPerClick ] = useState(() => variables[0].businessData.xpAmountPerClick || 1);
  const [ clickAmount, setClickAmount ] = useState(() => variables[0].businessData.clickAmount || 0);
  const [ clickAmountMultiply, setClickAmountMultiply ] = useState(() => variables[0].businessData.clickAmount || 1);
  const [ levelProgressValue, setLevelProgressValue ] = useState(() => variables[0].businessData.levelProgressValue || 0);
  const [ totalClickAmount, setTotalClickAmount ] = useState(() => variables[0].businessData.totalClickAmount || 0);

  /* Acrescenta os Boosts em Porcentagem */
  const [ gpcBoost, setGpcBoost ] = useState(() => parseFloat(variables[0].boosts.gpcBoost) || 1.0);
  const [ gpsBoost, setGpsBoost ] = useState(() => parseFloat(variables[0].boosts.gpsBoost) || 1.0);
  const [ levelBoost, setLevelBoost ] = useState(() => parseFloat(variables[0].boosts.levelBoost) || 1.0);

  /* Multiplicador */
  const [ gpcMultiply, setGpcMultiply ] = useState(() => parseFloat(variables[0].multipliers.gpcMultiply) || 1.0);
  const [ gpsMultiply, setGpsMultiply ] = useState(() => parseFloat(variables[0].multipliers.gpsMultiply) || 1.0);
  const [ levelMultiply, setLevelMultiply ] = useState(() => parseFloat(variables[0].multipliers.levelMultiply) || 1.0);

  /* Acrescenta os Boosts do Rebirth em Porcentagem */
  const [ gpcRebirthBoost, setGpcRebirthBoost ] = useState(() => parseFloat(variables[0].rebirthBoostsToApply.gpcRebirthBoost) || 0.0);
  const [ gpsRebirthBoost, setGpsRebirthBoost ] = useState(() => parseFloat(variables[0].rebirthBoostsToApply.gpsRebirthBoost) || 0.0);
  const [ levelRebirthBoost, setLevelRebirthBoost ] = useState(() => parseFloat(variables[0].rebirthBoostsToApply.levelRebirthBoost) || 0.0);

  /* Renascimento Boosters */
  const [ gpsRebirth, setGpsRebirth ] = useState(() => parseFloat(variables[0].rebirthBoosts.gpsRebirth) || 0);
  const [ gpcRebirth, setGpcRebirth ] = useState(() => parseFloat(variables[0].rebirthBoosts.gpcRebirth) || 0);
  const [ levelRebirth, setLevelRebirth ] = useState(() => parseFloat(variables[0].rebirthBoosts.levelRebirth) || 0);

  /* Pontos de Renascimento */
  const [ rebirthPoints, setRebirthPoints ] = useState(() => parseInt(variables[0].rebirthData.rebirthPoints) || 0);
  const [ maxValueRebirth, setMaxValueRebirth ] = useState(() => parseInt(variables[0].rebirthData.maxValueRebirth) || 300);

  /* Upgrades especiais de Renascimento */
  const [ specialGpsBoost, setSpecialGpsBoost ] = useState(() => parseFloat(variables[0].specialRebirthBoosts.specialGpsBoost) || 0.0);
  const [ specialGpcBoost, setSpecialGpcBoost ] = useState(() => parseFloat(variables[0].specialRebirthBoosts.specialGpcBoost) || 0.0);
  const [ specialLevelBoost, setSpecialLevelBoost ] = useState(() => parseFloat(variables[0].specialRebirthBoosts.specialLevelBoost) || 0.0);
  
  /* Status dos upgrades especiais de Renascimento */
  const [ specialGpsBoostStatus, setSpecialGpsBoostStatus ] = useState(() => parseFloat(variables[0].specialRebirthStatus.specialGpsBoostStatus) || 0);
  const [ specialGpcBoostStatus, setSpecialGpcBoostStatus ] = useState(() => parseFloat(variables[0].specialRebirthStatus.specialGpcBoostStatus) || 0);
  const [ specialLevelBoostStatus, setSpecialLevelBoostStatus ] = useState(() => parseFloat(variables[0].specialRebirthStatus.specialLevelBoostStatus) || 0);


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
      return NotificationManager.info(`Parabéns você subiu para o nível ${level}!!!`, 'Subiu de Nível', 3000); /* Disponível para Uso */
    } else if(notificationType === 3) {
      setNotificationType(0);
      return NotificationManager.info('Esta melhoria é inferior a que você possui, vou manter o maior, eu sei eu sou incrível!', 'Salvando Você', 3000); /* Disponível para Uso */
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
    } else if(notificationType === 11) { // ------------------------ Notificações da Mineração de Bitcoin ---------------------------
      setNotificationType(0);
      return NotificationManager.info('', '', 3000);
    } 
  }, [notificationType]);

  useEffect(() => {
    setVariables(
      [
        { 
          currency: { 
            balance: balance.toFixed(5), 
            btcAmount: btcAmount.toFixed(6),
            dollarBalance: dollarBalance.toFixed(2),
            dollarAmountConvert: dollarAmountConvert.toFixed(2),
          },
          advancedMining: {
            miningPower: miningPower,
            miningPowerDecrease: miningPowerDecrease,
            energyPower: energyPower,
            energyPowerUsed: energyPowerUsed,
            temperature: temperature,
            temperatureDecrease: temperatureDecrease,
            miningPowerBoost: miningPowerBoost,
            miningPowerMultiply: miningPowerMultiply,
            energyPowerBoost: energyPowerBoost,
            energyPowerMultiply: energyPowerMultiply,
            miningBusinessName: miningBusinessName,
            graphicsCardAmount: graphicsCardAmount,
            energyGeneratorAmount: energyGeneratorAmount,
            cardLevel: cardLevel,
          },
          earnValues: {
            gpcValue: gpcValue.toFixed(5),
            gpsValue: gpsValue.toFixed(5),
          },
          businessData: {
            businessName: businessName,
            level: level,
            xp: xp,
            xpAmountPerClick: xpAmountPerClick,
            clickAmount: clickAmount,
            clickAmountMultiply: clickAmountMultiply,
            levelProgressValue: levelProgressValue,
            totalClickAmount: totalClickAmount,
          },
          boosts: {
            gpcBoost: gpcBoost.toFixed(2),
            gpsBoost: gpsBoost.toFixed(2),
            levelBoost: levelBoost.toFixed(2),
          },
          multipliers: {
            gpcMultiply: gpcMultiply.toFixed(5),
            gpsMultiply: gpsMultiply.toFixed(5),
            levelMultiply: levelMultiply.toFixed(5),
          },
          rebirthBoostsToApply: {
            gpcRebirthBoost: gpcRebirthBoost.toFixed(14),
            gpsRebirthBoost: gpsRebirthBoost.toFixed(14),
            levelRebirthBoost: levelRebirthBoost.toFixed(14),
          },
          rebirthBoosts: {
            gpcRebirth: gpcRebirth.toFixed(14),
            gpsRebirth: gpsRebirth.toFixed(14),
            levelRebirth: levelRebirth.toFixed(14),
          },
          rebirthData: {
            rebirthPoints: rebirthPoints,
            maxValueRebirth: maxValueRebirth,
          },
          specialRebirthBoosts: {
            specialGpsBoost: specialGpsBoost,
            specialGpcBoost: specialGpcBoost,
            specialLevelBoost: specialLevelBoost,
          },
          specialRebirthStatus: {
            specialGpsBoostStatus: specialGpsBoostStatus,
            specialGpcBoostStatus: specialGpcBoostStatus,
            specialLevelBoostStatus: specialLevelBoostStatus,
          },
          themes: {
            activeTheme: activeTheme,
            activeColor: activeColor,
            unlocked: unlocked,
          }
        }
      ]
    );
  }, [balance, rebirthPoints, btcAmount, activeTheme, activeColor, miningPower, dollarBalance]);

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

  useEffect(() => {
    let btcAmountIncrease = setInterval(() => {
      setBtcAmount(btcAmount => btcAmount + (((miningPower * 0.00000001266) * miningPowerDecrease) / 100));
      setDollarAmountConvert(btcAmount * 500000);
    }, 10);

    return () => {
      clearInterval(btcAmountIncrease);
    }
  }, [btcAmount, miningPower, energyPower, energyPowerUsed, dollarAmountConvert, temperatureDecrease, temperature, miningPowerDecrease,]);

  const [ showHide, setShowHide ] = useState(false);
  const [ showHideRebirth, setShowHideRebirth ] = useState(false);

  const [ buyTitle, setBuyTitle ] = useState('Sem Título');
  const [ buyValue, setBuyValue ] = useState(100000.0);
  const [ buyDescription, setBuyDescription ] = useState('Descrição aleatória!');
  const [ buyIcon, setBuyIcon ] = useState('Um Icone');
  const [ buyId, setBuyId ] = useState(0);
  const [ upgradeType, setUpgradeType ] = useState(0);

  const upgradesGroup = [ upgradesGps.gpsList, upgradesGpc.gpcList, specialUpgrades.specialUpgradesList, specialUpgradesRebirth.specialUpgradeRebirthList, PlacaDeVideo.PlacaDeVideoList, GeradoresEnergia.GeradoresEnergiaList, MaquinasRefrigeracao.MaquinasRefrigeracaoList ];

  function checkUpgradesList(newGeneralUpgrades) {
    if(newGeneralUpgrades[0].length < upgradesGps.gpsList.length) {
      newGeneralUpgrades[0] = Object.assign(upgradesGps.gpsList, newGeneralUpgrades[0]);
    }
    if(newGeneralUpgrades[1].length < upgradesGpc.gpcList.length) {
      newGeneralUpgrades[1] = Object.assign(upgradesGpc.gpcList, newGeneralUpgrades[1]);
    }
    if(newGeneralUpgrades[2].length < specialUpgrades.specialUpgradesList.length) {
      newGeneralUpgrades[2] = Object.assign(specialUpgrades.specialUpgradesList, newGeneralUpgrades[2]);
    }
    if(newGeneralUpgrades[3].length < specialUpgrades.specialUpgradesList.length) {
      newGeneralUpgrades[3] = Object.assign(specialUpgradesRebirth.specialUpgradeRebirthList, newGeneralUpgrades[3]);
    }
    if(newGeneralUpgrades[4].length < PlacaDeVideo.PlacaDeVideoList.length) {
      newGeneralUpgrades[4] = Object.assign(PlacaDeVideo.PlacaDeVideoList, newGeneralUpgrades[4]);
    }
    if(newGeneralUpgrades[5].length < GeradoresEnergia.GeradoresEnergiaList.length) {
      newGeneralUpgrades[5] = Object.assign(GeradoresEnergia.GeradoresEnergiaList, newGeneralUpgrades[5]);
    }
    if(newGeneralUpgrades[6].length < MaquinasRefrigeracao.MaquinasRefrigeracaoList.length) {
      newGeneralUpgrades[6] = Object.assign(MaquinasRefrigeracao.MaquinasRefrigeracaoList, newGeneralUpgrades[6]);
    }
  }

  const [ generalUpgrades, setGeneralUpgrades ] = useState(() => {
    try {
      const savedGeneralUpgrades = localStorage.getItem('MoneyClickerData');
      const decodedGeneralUpgrades = Buffer.from(savedGeneralUpgrades, 'base64').toString('utf8');
      const newGeneralUpgrades = JSON.parse(decodedGeneralUpgrades);
      if(newGeneralUpgrades != null) {
        checkUpgradesList(newGeneralUpgrades);
      }
      return newGeneralUpgrades || upgradesGroup;
    } catch(SyntaxError) {
      const savedGeneralUpgrades = localStorage.getItem('MoneyClickerData');
      const newGeneralUpgrades = JSON.parse(savedGeneralUpgrades);
      if(newGeneralUpgrades != null) {
        checkUpgradesList(newGeneralUpgrades);
      }
      return newGeneralUpgrades || upgradesGroup;
    }
  });

  useEffect(() => {
    console.log(generalUpgrades);
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
          dollarBalance,
          setDollarBalance,
          dollarAmountConvert,
          setDollarAmountConvert,
          businessName,
          setBusinessName,
          level,
          setLevel,
          xp,
          setXp,
          xpAmountPerClick,
          setXpAmountPerClick,
          clickAmount,
          setClickAmount,
          clickAmountMultiply,
          setClickAmountMultiply,
          levelProgressValue,
          setLevelProgressValue,
          totalClickAmount,
          setTotalClickAmount,
          gpsValue,
          setGpsValue,
          btcAmount,
          setBtcAmount,
          notificationType,
          setNotificationType,
          showHide,
          setShowHide,
          showHideRebirth,
          setShowHideRebirth,
          /* Boost por porcentagem */
          gpcBoost,
          setGpcBoost,
          gpsBoost,
          setGpsBoost,
          levelBoost,
          setLevelBoost,
          /* Multiplicador */
          gpcMultiply,
          setGpcMultiply,
          gpsMultiply,
          setGpsMultiply,
          levelMultiply,
          setLevelMultiply,
          /* Rebirth */
          gpsRebirth,
          setGpsRebirth,
          gpcRebirth,
          setGpcRebirth,
          levelRebirth,
          setLevelRebirth,
          /* Rebirth Boost */
          gpcRebirthBoost,
          setGpcRebirthBoost,
          gpsRebirthBoost,
          setGpsRebirthBoost,
          levelRebirthBoost,
          setLevelRebirthBoost,
          /* Rebirth Points */
          rebirthPoints,
          setRebirthPoints,
          maxValueRebirth,
          setMaxValueRebirth,
          /* Variables */
          variables,
          setVariables,
          /* Special upgrades Bônus */
          specialGpcBoost,
          setSpecialGpcBoost,
          specialGpsBoost,
          setSpecialGpsBoost,
          specialLevelBoost,
          setSpecialLevelBoost,
          /* Special upgrades status */
          specialGpsBoostStatus,
          setSpecialGpsBoostStatus,
          specialGpcBoostStatus,
          setSpecialGpcBoostStatus,
          specialLevelBoostStatus,
          setSpecialLevelBoostStatus,
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
            upgradeType,
            setUpgradeType,
            /* General Upgrades */
            generalUpgrades,
            setGeneralUpgrades,
          }
        }
      >
        <AdvancedMiningContext.Provider value={{ btcAmount, setBtcAmount, dollarBalance, setDollarBalance, miningPower, setMiningPower, energyPower, setEnergyPower, energyPowerUsed, setEnergyPowerUsed, temperature, setTemperature, miningPowerBoost, setMiningPowerBoost, miningPowerMultiply, setMiningPowerMultiply, energyPowerBoost, setEnergyPowerBoost, energyPowerMultiply, setEnergyPowerMultiply, miningBusinessName, setMiningBusinessName, graphicsCardAmount, setGraphicsCardAmount, energyGeneratorAmount, setEnergyGeneratorAmount, cardLevel, setCardLevel, temperatureDecrease, setTemperatureDecrease, miningPowerDecrease, setMiningPowerDecrease }}>
          <Router>
            <ShowUpgradeInfo/>
            <NavBar/>
            <NotificationContainer/>
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route path="/upgrade" element={<Upgrade/>}></Route>
              <Route path="/investimento/bitcoin" element={<InvestimentoBitcoin/>}></Route>
              <Route path="/renascimento" element={<Renascimento/>}></Route>
              <Route path="/customize" element={<CustomizeBusiness/>}></Route>
              <Route path="/updates" element={<Updates/>}></Route>
              <Route path="/howtoplay" element={<HowToPlay/>}></Route>
            </Routes>
          </Router>
        </AdvancedMiningContext.Provider>
      </BuyContext.Provider>
    </ValuesContext.Provider>
  );
}

export default App;