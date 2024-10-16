import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import styles from "./contact.module.css"


const Social = () => {
  return (
    <div className={styles.contactWrapper}>
      <div className={styles.social1}>
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
    <div className={styles.social1}>
    <a href="https://www.facebook.com/profile.php?id=61565251337323" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <FaFacebookSquare className={styles.contactIcon}/>
    </a>
    <a href="https://www.linkedin.com/posts/deryne-greenhouse_deryne-greenhouse-linkedin-activity-7241087552114360320-dveM?utm_source=share&utm_medium=member_android" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      < FaLinkedin  className={styles.contactIcon}/>
    </a>
    </div>
    </div>
  )
}

export default Social