import React from 'react'
import styles from "./sectionHeader.module.css"

const SectionHeader = ({title, subtitle}) => {
  return (
    <div className={styles.sectionHeader}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
    </div>
  )
}

export default SectionHeader