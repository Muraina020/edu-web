import React from 'react'
import styles from "./mission.module.css"

const MissionPage = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={`container ${styles.headerText}`}>
      <h2>WHY CHOOSING DERYNE GREENHOUSE</h2>
      <hr className={styles.line}/>
      <div className={styles.bigContainer}>
    <div className={styles.catalogCon}>
        <span className={styles.catalogText}>SUBSCRIPTION BASE SERVICES</span>
        <h3>100%</h3>
    </div>
    <div className={styles.catalogCon}>
        <span className={styles.catalogText}>TRAINING & MENTORSHIP</span>
        <h3>100%</h3>
    </div>
    <div className={styles.catalogCon}>
        <span className={styles.catalogText}>MAINTENANCE & PRODUCTIVITY</span>
        <h3>100%</h3>
    </div>
    </div>
      </div>
    </header>
  )
}

export default MissionPage