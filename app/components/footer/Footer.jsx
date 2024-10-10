import React from 'react'
import styles from "./footer.module.css"
import Call from "../../assets/call.png"
import Mail from "../../assets/mail.png"
import LocationIcon from "../../assets/locationIcon.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
   <div className={`container ${styles.container}`}>
    <div className={styles.contactLeft}>
      <h3 className={styles.contactTitle}>CONTACT US</h3>
      <ul className={styles.contactLeftTxt}>
        <li> <Image src={LocationIcon} alt='location' className={styles.footerImg}/>Adress: Kigali 
District, Nyarugenge 
Road name, KN78 st Rwanda</li>
        <li> <Image src={Call} alt='email' className={styles.footerImg}/>Phone: +250787552411</li>
        <li>  <Image src={Mail} alt='call' className={styles.footerImg}/>Email: adelineniwenshuti@gmail.com</li>
      </ul>
    </div>
    <div className={styles.contactRight}>
      <h2>For Enquiry</h2>
      <form >
        <input type="text" name='name' placeholder='Enter your name' required/>
        <input type="tel" name='phone' placeholder='Enter your phone number' required/>
        <textarea name="message" id="" rows="" placeholder='Enter your Message' required></textarea>
        <button type='submit'className={`btn ${styles.contactBtn}`}>Submit</button>

      </form>
    </div>
   </div>
   <small className={styles.footerCopyright}>Copyright © Deryne greenhouse.com. All rights reserved</small>
    </footer>
  )
}

export default Footer