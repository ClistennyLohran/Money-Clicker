import ReactTooltip from 'react-tooltip';
import styles from './CheckMenu.module.css';

import { IoClose, IoCheckmarkSharp } from 'react-icons/io5';
import { useContext, useState } from 'react';
import { ValuesContext } from '../../contexts/ValuesContext/ValuesContext';
import { useEffect } from 'react';

export default function CheckMenu({ controller, title, tipText, itemId }) {
  const { disableEffect, setDisableEffect } = useContext(ValuesContext);

  const [ sliderState, setSliderState ] = useState(controller);

  useEffect(() => {
    let slider = document.getElementById('slider');

    if(controller) {
      slider.style.left = "23px";
    } else {
      slider.style.left = "0";
    }
  }, [controller]);

  const animSlider = () => {
    let slider = document.getElementById('slider');

    if(sliderState) {
      slider.style.left = "23px";
      setSliderState(!sliderState);
      if(itemId === 1) {
        setDisableEffect(!disableEffect);
      }
    } else {
      slider.style.left = "0";
      setSliderState(!sliderState);
      if(itemId === 1) {
        setDisableEffect(!disableEffect);
      }
    }
    
  }
  
  return (
    <div className={styles.container}>
      <ReactTooltip place="top" multiline={true} effect="solid"/>
      <div className={styles.box}>
        <p className={styles.disabled}><IoClose/></p>
        <p className={styles.enabled}><IoCheckmarkSharp/></p>
        <div data-tip={sliderState === true ? "Ativado" : "Desativado"} id="slider" onClick={() => animSlider()} className={styles.innerSlider}></div>
      </div>
      <p data-tip={tipText} className={styles.text}>{title}</p>
    </div>
  )
}