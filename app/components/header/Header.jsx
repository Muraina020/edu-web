import React from 'react'
import styles from "./header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <div className={`container ${styles.headerText}`}>
      <h1><span>Professional Greenhouse Building,</span> Renting and Trainings.</h1>
      </div>
    </header>
  )
}

export default Header