"use client"

import React from 'react'
import styles from "./contact.module.css"

const ContactForm = () => {
  return (
    <div className={styles.contactRight}>
    <h3>For Enquiry</h3>
    <form className={styles.form}>
      <label >Your name</label>
      <input type="text" name='name' placeholder='Enter your name' required/>
      <label >Phone Number</label>
      <input type="tel" name='phone' placeholder='Enter your phone number' required/>
      <label>Write your message here</label>
      <textarea placeholder="MESSAGE" rows="4" cols="50" required />
      <button type='submit'className={`btn ${styles.contactBtn}`}>Submit</button>

    </form>
  </div>
  )
}

export default ContactForm