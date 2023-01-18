import styles from './NavBarLinkDisplay.module.css';

import { Link, useLocation } from 'react-router-dom';

/* Clicar no Menu */
import menuSwitchClick from '../../songs/MenuSwitchClick.mp3';

export default function NavBarLinkDisplay({ icon, title, path }) {
  const router = useLocation();

  const playSong = () => {
    let MenuSwitch = new Audio(menuSwitchClick);

    MenuSwitch.play();
  }

  return (
    <Link onClick={() => playSong()} to={path}>
      <div className={router.pathname === path ? styles.containerSelected : styles.container }>
        <div className={styles.iconContainer}>
          <p className={styles.icon}>{icon}</p>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}