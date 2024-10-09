import React from 'react'
import styles from "./projectPage.module.css"
import Link from 'next/link'
import Image from 'next/image'
import House1 from "../../assets/house1.jpg"
import House2 from "../../assets/house2.jpg"
import House3 from "../../assets/house3.jpg"
import House4 from "../../assets/house4.jpg"
import House6 from "../../assets/house6.jpg"

const ProjectPage = () => {
  return (
    <section className={`container ${styles.catalog}`}>
       <h2 className={styles.title}>Greenhouse Projects</h2>
       <p className={styles.productText}>We have executed many greenhouse projects and trainings across Rwanda and this has erned us many awards of excellence.</p>
       <div className={styles.bigContainer}>
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

export default ProjectPage