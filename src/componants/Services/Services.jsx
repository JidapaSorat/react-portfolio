import React from 'react'
import styles from './Services.module.css'  
import {FaCode, FaPaintbrush, FaDesktop} from 'react-icons/fa6'


function Services() {
  return (
    <div className={styles.services_con}>
      <h1 className={styles.services_title}>MY SERVICES!</h1>
      <div className={styles.services_list}>
        <div className={styles.services_items}>
            <FaCode/>
            <h4>WEB DEVLOPMENT</h4>
            <p>Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!</p>
        </div>
        <div className={styles.services_items}>
            <FaPaintbrush/>
            <h4>WEB DESIGN</h4>
            <p>Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!</p>
        </div>
        <div className={styles.services_items}>
            <FaDesktop/>
            <h4>WEB MOBILE</h4>
            <p>Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!
          Work!Work!Work!Work!</p>
        </div>
      </div>
    </div>
  )
}

export default Services;