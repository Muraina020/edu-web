import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import styles from "./contact.module.css"


const Social = () => {
  return (
    <div className={styles.contactWrapper}>
    <a href="adelineniwenshuti@gmail.com" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      < MdOutlineEmail className={styles.contactIcon}/>
    </a>
    <a href="https://www.instagram.com/derynegreenhouse1" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <RiMessengerLine className={styles.contactIcon}/>
    </a>
    <a href="https://wa.me/+250787552411" className={styles.contactOption} target='_blank' rel='noopener noreferrer'>
      <BsWhatsapp  className={styles.contactIcon}/>
    </a>
    </div>
  )
}

export default Social