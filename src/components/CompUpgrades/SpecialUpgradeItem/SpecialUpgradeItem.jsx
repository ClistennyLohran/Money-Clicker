import styles from './SpecialUpgradeItem.module.css';

import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';
import { BuyContext } from '../../../contexts/BuyContext/BuyContext';

export default function SpecialUpgradeItem({ type, classId, title, description, active, icon, value, id }) {
  
  const { showHide, setShowHide } = useContext(ValuesContext);
  const { setBuyTitle, setBuyValue, setBuyDescription, setBuyIcon, setBuyId } = useContext(BuyContext);

  function openMenu() {
    if(active === 0) {
      setShowHide(!showHide);
      setBuyTitle(title);
      setBuyValue(value);
      setBuyDescription(description);
      setBuyIcon(icon);
      setBuyId(id);
    }
  }
  
  function checkClass(active) {
    if(classId === 0) {
      if(active !== 0) {
        return styles.containerDisabled;
      }else {
        return styles.container;
      }
    }else if(classId === 1) {
      if(active !== 0) {
        return styles.containerDisabled;
      }else {
        return styles.rebirthContainer;
      }
    }else if(classId === 2) {
      if(active !== 0) {
        return styles.goldenContainerDisabled;
      }else {
        return styles.goldenContainer;
      }
    }
  }

  return (
    <div className={checkClass(active)} onClick={() => openMenu()} >
      {icon}
    </div>
  );
}