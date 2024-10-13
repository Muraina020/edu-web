import React from 'react'
import styles from "./mission.module.css"

const MissionPage = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={`container ${styles.headerText}`}>
      <h2>MISSION & VISSION STATEMENT</h2>
      <hr className={styles.line}/>
      <div className={styles.bigContainer}>
    <div className={styles.catalogCon}>
        <span className={styles.catalogText}>MISSION</span>
        <h3>To deliver affordable, high-quality leased greenhouses with cutting-edge climate control and irrigation systems, paired with comprehensive training, enabling small-scale farmers to boost yields, protect crops, and thrive in changing environmental conditions.</h3>
    </div>
    <div className={styles.catalogCon}>
        <span className={styles.catalogText}>VISSION</span>
        <h3>To revolutionize small-scale farming by providing accessible, climate-resilient greenhouses, empowering farmers to maximize productivity and contribute to sustainable food security.</h3>
    </div>
    <div className={styles.catalogCon}>
        <span className={styles.catalogText}>MENTORSHIP</span>
        <h3>With the technology, farmers receive training and support to effectively manage their greenhouses, optimize crop growth, and protect their produce from adverse weather conditions. </h3>
    </div>
    </div>
      </div>
    </header>
  )
}

export default MissionPage