import styles from './NavBarLinkDisplay.module.css';

import { Link, useLocation } from 'react-router-dom';

export default function NavBarLinkDisplay({ icon, title, path }) {
  const router = useLocation();
  
  return (
    <Link to={path}>
      <div className={router.pathname === path ? styles.containerSelected : styles.container }>
        <div className={styles.iconContainer}>
          <p className={styles.icon}>{icon}</p>
        </div>
        <p className={styles.title}>{title}</p>
      </div>
    </Link>
  );
}