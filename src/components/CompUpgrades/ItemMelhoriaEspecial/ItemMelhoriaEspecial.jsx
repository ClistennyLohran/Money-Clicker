import styles from './ItemMelhoriaEspecial.module.css';

import { useContext } from 'react';
import { ValuesContext } from '../../../contexts/ValuesContext/ValuesContext';
import { BuyContext } from '../../../contexts/BuyContext/BuyContext';

export default function SpecialUpgradeItem({ type, classId, title, description, active, icon, value, id, upgradeType }) {
  
  const { showHide, setShowHide } = useContext(ValuesContext);
  const { setBuyTitle, setBuyValue, setBuyDescription, setBuyIcon, setBuyId, setUpgradeType } = useContext(BuyContext);

  function openMenu() {
    if(active === 0) {
      setShowHide(!showHide);
      setBuyTitle(title.icons[title.icons.findIndex(x => x.id === id)].title);
      setBuyValue(value);
      setBuyDescription(description.icons[description.icons.findIndex(x => x.id === id)].description);
      setBuyIcon(icon.icons[icon.icons.findIndex(x => x.id === id)].icon);
      setBuyId(id);
      setUpgradeType(upgradeType);
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
      {icon.icons[icon.icons.findIndex(x => x.id === id)].icon}
    </div>
  );
}