import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./contact.module.css"


const Social = () => {
  return (
    <div className={styles.contactWrapper}>
       <a href="https://wa.me/+250787552411" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <BsWhatsapp  className={styles.contactIcon}/>
    </a>
    <a href="https://twitter.com/@Derynegreenho" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <FaXTwitter className={styles.contactIcon}/>
    </a>
    <a href="https://www.instagram.com/derynegreenhouse1" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      < FaInstagram  className={styles.contactIcon}/>
    </a>
    </div>
  )
}

export default Social