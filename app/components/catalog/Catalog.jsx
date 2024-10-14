import React from 'react'
import styles from "./catalog.module.css"
import Link from 'next/link'
import Design6 from "../../assets/design6.jpg"
import Design8 from "../../assets/design8.jpg"
import Design9 from "../../assets/design9.jpeg"
import Product5 from "../../assets/product5.png"
import Design4 from "../../assets/design4.jpg"
import Design5 from "../../assets/design5.jpg"
import Design1 from "../../assets/design1.jpg"
import Design7 from "../../assets/design7.jpg"


import Image from 'next/image'

const Catalog = () => {
  return (
    <section className={`container ${styles.catalog}`}>
       <h2 className={styles.title}>Deryne greenhouse</h2>
       <p className={styles.productText}>we provide greenhouses equipped with advanced climate control and irrigation systems. Along with the technology, farmers receive training and support to effectively manage their greenhouses, optimize crop growth, and protect their produce from adverse weather conditions</p>
       <div className={styles.bigCatContainer}>
    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Design8} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Design6} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">Tunnel greenhouse</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>

    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Design9} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Product5} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">hydroponic</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>

    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Design4} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Design5} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">Polycarbonate greenhouse</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>

    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Design7} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Design1} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">multi span greenhouse</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>
    </div>
</section>

  )
}

export default Catalog