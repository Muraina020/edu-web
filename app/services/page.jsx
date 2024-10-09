import React from 'react'
import styles from "./services.module.css"
import Link from 'next/link'
import Image from 'next/image'
import House1 from "../assets/House1.jpg"
import House2 from "../assets/House2.jpg"
import House3 from "../assets/House3.jpg"
import House4 from "../assets/House4.jpg"
import House6 from "../assets/House6.jpg"
import SectionHeader from '../components/section-header/SectionHeader'

const page = () => {
  return (
    <section >
       <SectionHeader title="Our Services" subtitle="Who are we and what we do"/>
    <div className={`container ${styles.bigContainer}`}>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={House1} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={House2} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={House3} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={House4} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={House6} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={House1} alt="" />
        </Link>
        <span className={styles.catalogText}>multi span greenhouse</span>
    </div>
    </div>
    </section>
  )
}

export default page