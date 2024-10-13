import React from 'react'
import styles from "./projectPage.module.css"
import Link from 'next/link'
import Image from 'next/image'
import Green3 from "../../assets/green3.png"
import Green6 from "../../assets/green6.png"
import Green8 from "../../assets/green8.png"
import Green2 from "../../assets/green2.png"
import Green5 from "../../assets/green5.png"
import Green4 from "../../assets/green4.png"


const ProjectPage = () => {
  return (
    <section className={styles.section}>
       <h2 className={styles.title}>Greenhouse Solutions</h2>
       <p className={styles.productText}>We help farmers adapt to smart agriculture as a means to increase productivity. Farming in a controlled environment means not being dependent on weather condition,seasons and farming year Round.</p>
       <div className={`container ${styles.bigContainer}`}>
    <div className={styles.catalogCon}>
      <div href='/services' className={styles.catalogImg}>
        <Image src={Green6} alt="" />
        </div>
        <span className={styles.catalogText}>Green House Covering</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Green2} alt="" />
        </Link>
        <span className={styles.catalogText}>Hydroponic System</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Green3} alt="" />
        </Link>
        <span className={styles.catalogText}>Automated Nutrient Control EC&PH</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Green8} alt="" />
        </Link>
        <span className={styles.catalogText}>Green House front view</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Green5} alt="" />
        </Link>
        <span className={styles.catalogText}>Automated Irrigation Control</span>
    </div>
    <div className={styles.catalogCon}>
      <Link href='/services' className={styles.catalogImg}>
        <Image src={Green4} alt="" />
        </Link>
        <span className={styles.catalogText}>Automated Climate Control</span>
    </div>
    </div>
</section>
  )
}

export default ProjectPage