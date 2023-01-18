import styles from './Cassino.module.css';

import { MdOutlineMultilineChart } from 'react-icons/md';
import { GiTimeBomb, GiTakeMyMoney, GiRobotHelmet } from 'react-icons/gi';
import { FaRobot } from 'react-icons/fa';

import ReactTooltip from 'react-tooltip';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';

import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';

import { useContext, useState, useEffect } from 'react';

import MoneyFormatter from '../../Formatter/MoneyFormatter';

import { motion } from 'framer-motion';
import NomePagina from '../../components/NomePagina/NomePagina';
import DisplayDinheiroXP from '../../components/DisplayDinheiroXP/DisplayDinheiroXP';
import AbrirMenuEfeito from '../../components/AbrirMenuEfeito/AbrirMenuEfeito';

ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
);
ChartJS.defaults.color = "#FFFFFF";

export default function Cassino() {
  var inputTypeNumbers = document.querySelectorAll("input[type=number]");
  for (var a = 0; a < inputTypeNumbers.length; a++) {
      inputTypeNumbers[a].onwheel = function (event) {
          event.target.blur();
      };
  }
  
  const { balance, setBalance, setNotificationType, crashHistory, setCrashHistory } = useContext(ValuesContext);

  /* Currencies and Values */
  const [ betAmount, setBetAmount ] = useState(0);
  const [ sortedNumber, setSortedNumber ] = useState(0);
  const [ autoWithdrawValue, setAutoWithdrawValue ] = useState(1);

  /* Value Display */
  const [ timerDisplay, setTimerDisplay ] = useState(10);
  const [ multiplierDisplay, setMultiplierDisplay ] = useState(1);
  const [ crashMessage, setCrashMessage ] = useState("Parou em ");
  const [ withdrawValue, setWithdrawValue ] = useState(1);

  /* Controllers */
  const [ countTimerStatus, setCountTimerStatus ] = useState(false); // Temporizador de início.
  const [ crashIsRunning, setCrashIsRunning ] = useState(false); // Se o crash está rodando.

  /* Crash Controllers */
  const [ crashStatus, setCrashStatus ] = useState(false);
  const [ withdrawStatus, setWithdrawStatus ] = useState(false);
  const [ withdrawValueShowStatus, setWithdrawValueShowStatus ] = useState(false);
  const [ autoWithdraw, setAutoWithdraw ] = useState(false);
  const [ crashed, setCrashed ] = useState(false);
  const [ crashConfirm, setCrashConfirm ] = useState(false);

  /* Intervals */
  const intervalList = [200, 150, 100, 50, 30, 20, 10, 1];

  /* Color Pick */
  const [ actualColor, setActualColor ] = useState();

  /* Chart Data */
  const data = {
    labels: ["", "", ""],
    datasets: [{
      label: "Multiplier",
      data: [0, (multiplierDisplay) / 2.5, multiplierDisplay, multiplierDisplay + 4],
      backgroundColor: actualColor + "44",
      borderColor: actualColor,
      borderWidth: 2,
      tension: 0.4,
      pointRadius: 0,
      fill: true,
    }],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        grid: {
          display: false,
        }
      },
      x: {
        grid: {
          display: false,
        }
      }
    }
  }

  useEffect(() => {
    if(!crashed) {
      let timer = setInterval(() => {
        setActualColor(getComputedStyle(document.documentElement).getPropertyValue('--corPrimaria').trim(' '));
      }, 100);
  
      return () => {
        clearInterval(timer);
      }
    } else {
      setActualColor(getComputedStyle(document.documentElement).getPropertyValue('--crashColor').trim(' '));
    }
  }, [crashed]);

  const start = (value) => { // Inicia o evento.
    let betAmountInput = document.getElementById('betAmount');
    let autoWithdrawValueInput = document.getElementById('autoWithdrawValue');
    
    if(Number(autoWithdrawValue) >= 1.01 && value === 1) {
      setAutoWithdraw(true);
    } else {
      if(value === 1) {
        setNotificationType(21);
        return;
      }
    }
    if(Number(betAmount) <= balance) {
      if(Number(betAmount) !== 0 && Number(betAmount) !== null) {
        if(!countTimerStatus && !crashIsRunning) {
          setCrashed(false);
          setSortedNumber(sortNumber());
          setCountTimerStatus(true);
          setWithdrawStatus(false);
          setMultiplierDisplay(1);
          setCrashConfirm(false);
          setWithdrawValueShowStatus(false);
          setWithdrawValue(1);
          /* Desativar Inputs */
          betAmountInput.disabled = true;
          autoWithdrawValueInput.disabled = true;
        } else {
          setNotificationType(19);
        }
      } else {
        setNotificationType(20);
      }
    } else {
      setNotificationType(18);
    }
  }

  const cancel = () => {
    let betAmountInput = document.getElementById('betAmount');
    let autoWithdrawValueInput = document.getElementById('autoWithdrawValue');
    
    setCountTimerStatus(false); // Indica que o timer deve parar.
    setTimerDisplay(10); // Volta o timer display ao normal.
    /* Desativar Inputs */
    betAmountInput.disabled = false;
    autoWithdrawValueInput.disabled = false;
  }

  const running = () => { // Retira o valor.
    if(crashIsRunning) {
      setTimerDisplay(10);
      setWithdrawValueShowStatus(true);
      setWithdrawValue(multiplierDisplay);
      if(!withdrawStatus) {
        setBalance(val => Number((val + betAmount * multiplierDisplay).toFixed(2)));
        setWithdrawStatus(true);
      }
    }
  }

  const skip = () => {
    let betAmountInput = document.getElementById('betAmount');
    let autoWithdrawValueInput = document.getElementById('autoWithdrawValue');

    if(crashIsRunning) {
      setTimerDisplay(3);
      setCrashStatus(false);
      setWithdrawStatus(false);
      setMultiplierDisplay(sortedNumber - 0.01);
      /* Ativar Inputs */
      betAmountInput.disabled = false;
      autoWithdrawValueInput.disabled = false;
    }
  }

  let keyCodeList = [188, 69, 189, 187, 110, 109, 107];

  const checkInsertValue = (e) => {
    if(e.target.value.length >= 300 && e.keyCode !== 8) {
      e.preventDefault();
    }
    keyCodeList.forEach((value) => {
      if(e.keyCode === value) {
        e.preventDefault();
      }
    });
  }

  const sortNumber = () => { // Gera um número aleatório para o crash.
    let sortedNumber = Math.floor(Math.random() * 100);
    let finalSort;
    if(sortedNumber >= 98) {
      finalSort = Math.floor(Math.random() * 253 + 1) + Math.random();
    } else if(sortedNumber >= 95 && sortedNumber < 98) {
      finalSort = Math.floor(Math.random() * 54 + 1) + Math.random();
    } else if(sortedNumber >= 90 && sortedNumber < 95) {
      finalSort = Math.floor(Math.random() * 14 + 1) + Math.random();
    } else if(sortedNumber >= 35 && sortedNumber < 90) {
      finalSort = Math.floor(Math.random() * 2 + 1) + Math.random();
    } else if(sortedNumber >= 0 && sortedNumber < 35) {
      finalSort = 1;
    }

    return Number(finalSort.toFixed(2));
  }

  useEffect(() => { // Temporizador para iniciar o crash.
    if(countTimerStatus) {
      const countTimer = setInterval(() => {
        setTimerDisplay(val => Number((val - (1 / 100)).toFixed(2)));
      }, 10);

      return () => {
        clearInterval(countTimer);
      }
    }
  }, [countTimerStatus]);

  useEffect(() => { // Quando o timer display chegar em 0 inicia os eventos do crash.
    if(timerDisplay === 0) {
      setTimerDisplay(0);
      setCountTimerStatus(false); // Indica que o timer deve parar.
      setCrashIsRunning(true); // Para controlar qual botão vai aparecer, START ou RUNNING.
      setCrashStatus(true); // O crash vai iniciar aqui.
      setBalance(val => Number((val - betAmount).toFixed(2))); // Retira a quantia apostada do saldo.
    }
  }, [timerDisplay]);

  /* Inicio do grupo de controle do crash */
  const changeValue = () => { // Valor a ser aumentado no crash gradualmente.
    setMultiplierDisplay(val => Number((val + 1 / 100).toFixed(2)));
  }

  useEffect(() => {
    let betAmountInput = document.getElementById('betAmount');
    let autoWithdrawValueInput = document.getElementById('autoWithdrawValue');

    if(crashStatus) {
      if(sortedNumber === 1) {
        setCrashIsRunning(false);
        setCrashStatus(false);
        setTimerDisplay(10);
        setMultiplierDisplay(1);
        setAutoWithdraw(false);
        setCrashConfirm(true);
        /* Ativar Inputs */
        betAmountInput.disabled = false;
        autoWithdrawValueInput.disabled = false;
      }
    }
  }, [crashStatus, sortedNumber]);

  useEffect(() => { // Faz o crash rodar.
    var crashTimeout;

    let crashHistoryContainer = document.getElementById("crashHistoryContainer");
    let betAmountInput = document.getElementById('betAmount');
    let autoWithdrawValueInput = document.getElementById('autoWithdrawValue');

    if(crashStatus && multiplierDisplay < sortedNumber) {
      if(multiplierDisplay > 0 && multiplierDisplay < 2) {
        crashTimeout = setTimeout(changeValue, intervalList[0]);
      } else if(multiplierDisplay >= 2 && multiplierDisplay < 3) {
        crashTimeout = setTimeout(changeValue, intervalList[1]);
      } else if(multiplierDisplay >= 3 && multiplierDisplay < 4) {
        crashTimeout = setTimeout(changeValue, intervalList[2]);
      } else if(multiplierDisplay >= 4 && multiplierDisplay < 6) {
        crashTimeout = setTimeout(changeValue, intervalList[3]);
      } else if(multiplierDisplay >= 6 && multiplierDisplay < 10) {
        crashTimeout = setTimeout(changeValue, intervalList[4]);
      } else if(multiplierDisplay >= 10 && multiplierDisplay < 15) {
        crashTimeout = setTimeout(changeValue, intervalList[5]);
      } else if(multiplierDisplay >= 15 && multiplierDisplay < 20) {
        crashTimeout = setTimeout(changeValue, intervalList[6]);
      } else if(multiplierDisplay >= 20) {
        crashTimeout = setTimeout(changeValue, intervalList[7]);
      }
    } else {
      if(crashed && crashConfirm) {
        setCrashHistory([...crashHistory, {value: multiplierDisplay}]);
        setCrashConfirm(false);
      }
      clearTimeout(crashTimeout);
      crashHistoryContainer.scrollLeft -= 1000;
    }

    if(autoWithdraw) {
      if(multiplierDisplay === Number(autoWithdrawValue)) {
        setBalance(val => Number((val + multiplierDisplay * betAmount).toFixed(2)));
        setWithdrawStatus(true);
        setAutoWithdraw(false);
        setWithdrawValueShowStatus(true);
        setWithdrawValue(Number(autoWithdrawValue));
        /* Ativar Inputs */
        betAmountInput.disabled = false;
        autoWithdrawValueInput.disabled = false;
      }
    }
    if(multiplierDisplay === sortedNumber) {
      if(!countTimerStatus && crashIsRunning) {
        setCrashed(true);
        setCrashConfirm(true);
        setCrashIsRunning(false);
        setCrashStatus(false);
        setWithdrawStatus(false);
        setTimerDisplay(10);
        setAutoWithdraw(false);
        /* Ativar Inputs */
        betAmountInput.disabled = false;
        autoWithdrawValueInput.disabled = false;
      }
    }
  }, [multiplierDisplay, crashStatus, sortedNumber, autoWithdrawValue, crashed, crashConfirm, crashHistory]);

  const skipButton = <button className={styles.button} onClick={() => skip()}>PULAR</button>
  const whitdrawButton = <button className={styles.button} onClick={() => running()}>RETIRAR</button>
  const betButton = <button className={styles.button} onClick={() => start(0)} >INICIAR</button>
  const cancelButton = <button className={styles.button} onClick={() => cancel()} >CANCELAR</button>

  const returnCrashLayout = (option) => {
    switch(option) {
      case 1:
        return (
          <div className={styles.multiplierDisplayCrashed}>
            <p>{crashMessage}{multiplierDisplay.toFixed(2)}x</p>
            {withdrawValueShowStatus ? <p className={styles.crashWithdraw}>Retirou em: {withdrawValue.toFixed(2)}x</p> : <></>}
          </div>
        )
      case 2:
        return (
          <div className={styles.multiplierDisplay}>
            <p>{multiplierDisplay.toFixed(2)}x</p>
            <p className={styles.lucroText}><span className={styles.lucroBold}>LUCRO:</span> {MoneyFormatter((Number(betAmount) * multiplierDisplay) - Number(betAmount))}</p>
            {withdrawValueShowStatus ? <p className={styles.crashWithdraw}>Retirou em: {withdrawValue.toFixed(2)}x</p> : <></>}
          </div>
        )
      default:
        return (
          <div className={styles.multiplierDisplay}>
            <p>{multiplierDisplay.toFixed(2)}x</p>
            <p className={styles.lucroText}><span className={styles.lucroBold}>LUCRO:</span> {MoneyFormatter((Number(betAmount) * multiplierDisplay) - Number(betAmount))}</p>
            {withdrawValueShowStatus ? <p className={styles.crashWithdraw}>Retirou em: {withdrawValue.toFixed(2)}x</p> : <></>}
          </div>
        )
    }
  }
  
  return (
    <motion.div className={styles.container} animate={{ opacity: [0, 1], x: [-600, 0] }}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <AbrirMenuEfeito/>
      <NomePagina icon={<MdOutlineMultilineChart/>} name="CASSINO"/>
      <DisplayDinheiroXP/>
      <div className={styles.timerCrashContainer}>
        <div className={styles.timerContainer}>
          <div className={styles.timerIconContainer}>
            <p className={styles.icon}><GiTimeBomb/></p>
          </div>
          <div className={styles.infoContainer}>
            <p className={styles.timerTitle}>TEMPORIZADOR</p>
            <p className={styles.displayTimer}>{timerDisplay.toFixed(2)}x</p>
          </div>
        </div>
        <div id="crashHistoryContainer" className={styles.crashHistoryContainer}>
          {crashHistory.map(items => {
            return (
              <div key={Math.random()} className={styles.crashContainer}>
                <p className={styles.crashValue}>{Number(items.value).toFixed(2)}x</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.inputsContainer}>
        <div className={`${styles.inputBox} ${styles.marginRight}`}>
          <div className={styles.timerIconContainer2}>
          <p className={styles.icon}><GiTakeMyMoney/></p>
          </div>
          <div className={styles.inputInfoContainer}>
            <p className={styles.inputTitle}>VALOR DA APOSTA</p>
            <input id="betAmount" className={styles.input} onPaste={(e) => {e.preventDefault(); return false;}} onDrop={(e) => {e.preventDefault(); return false;}} type="number" onKeyDown={(e) => checkInsertValue(e)} onChange={(e) => setBetAmount(e.target.value)} placeholder="Quantia para aposta" autoComplete="off" ></input>
            <p className={styles.littleInfo}>APOSTADO: {MoneyFormatter(Number(betAmount))}</p>
          </div>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.timerIconContainer2}>
          <p className={styles.icon}><GiRobotHelmet/></p>
          </div>
          <div className={styles.inputInfoContainer}>
            <p className={styles.inputTitle}>RETIRADA AUTOMÁTICA</p>
            <input id="autoWithdrawValue" className={styles.input} onPaste={(e) => {e.preventDefault(); return false;}} onDrop={(e) => {e.preventDefault(); return false;}} type="number" onKeyDown={(e) => checkInsertValue(e)} onChange={(e) => setAutoWithdrawValue(e.target.value)} placeholder="Valor para retirada automática" autoComplete="off" ></input>
            <p className={styles.littleInfo}>PREVISÃO DE LUCRO: {MoneyFormatter((Number(betAmount) * autoWithdrawValue) - betAmount)}</p>
          </div>
        </div>
      </div>
      <div className={styles.graphContainer}>
        {crashed ? returnCrashLayout(1) : returnCrashLayout(2)}
        <Line data={data} options={options}></Line>
      </div>
      <div className={styles.buttonContainer}>
        <button data-tip="Inicia o crash com a retirada automática ligada!" className={styles.autoBet} onClick={() => start(1)} ><FaRobot/></button>
        {!crashIsRunning ? !countTimerStatus ? betButton : cancelButton : !withdrawStatus ? whitdrawButton : <></>}
        {withdrawStatus ? skipButton : <></>}
      </div>
    </motion.div>
  )
}