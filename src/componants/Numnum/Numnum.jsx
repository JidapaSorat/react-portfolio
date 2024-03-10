import React from 'react'
import styles from './Numnum.module.css'

function Numnum() {
  return (
    <div className={styles.numnum_con}>
      <div className={styles.numnum_items}>
        <h3>999+</h3>
        <p>PROJECT DELIVERED!</p>
      </div>
      <div className={styles.numnum_items}>
        <h3>999+</h3>
        <p>COMPANIES HELPED!</p>
      </div>
      <div className={styles.numnum_items}>
        <h3>999+</h3>
        <p>YEARS OF EXPERIENCE!</p>
      </div>
      <div className={styles.numnum_items}>
        <h3>999+</h3>
        <p>HAPPY CLIENTS!</p>
      </div>
    </div>
  )
}

export default Numnum;