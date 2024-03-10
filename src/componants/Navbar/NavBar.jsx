import React from 'react';
import styles from './NavBar.module.css';

function Navbar() {
  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">PORTFOLIO</a>
          </div>

          <ul>
            <li><a href="#">SKILLS</a></li>
            <li><a href="#">PORTFOLIO</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>

          <div className={styles.button}>
            <a href="#">HIRE ME</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;