import React from 'react'
import styles from "./services.module.css"
import Link from 'next/link'
import Image from 'next/image'
import House1 from "../assets/house1.jpg"
import Project2 from "../assets/proj-2.jpg"
import Construct3 from "../assets/construct3.jpg"
import Construct4 from "../assets/construct4.jpg"
import Training2 from "../assets/house4.jpg"
import Construct5 from "../assets/construct5.jpg"
import Construct6 from "../assets/house6.jpg"
import Project6 from "../assets/proj-6.jpg"
import Training3 from "../assets/training3.jpg"
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
        <span className={styles.catalogText}>greenhouse catalog</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Project2} alt="" />
        </Link>
        <span className={styles.catalogText}>greenhouse catalog</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct3} alt="" />
        </Link>
        <span className={styles.catalogText}>greenhouse building</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct4} alt="" />
        </Link>
        <span className={styles.catalogText}>greenhouse bilding</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct5} alt="" />
        </Link>
        <span className={styles.catalogText}>greenhouse catalog</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Construct6} alt="" />
        </Link>
        <span className={styles.catalogText}>greenhouse building</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Project6 } alt="" />
        </Link>
        <span className={styles.catalogText}>greenhouse research</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Training2 } alt="" />
        </Link>
        <span className={styles.catalogText}>Simple greenhouse building</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Training3} alt="" />
        </Link>
        <span className={styles.catalogText}>greenhouse building</span>
    </div>
    </div>
    </section>
  )
}

export default page