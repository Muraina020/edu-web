import React from 'react'
import styles from "./catalog.module.css"
import Link from 'next/link'
import Product8 from "../../assets/product8.png"
import Product7 from "../../assets/product7.png"
import Flower1 from "../../assets/flower1.jpg"
import Flower2 from "../../assets/flower2.jpg"
import Product1 from "../../assets/product1.png"
import Product2 from "../../assets/product2.png"
import Product3 from "../../assets/product3.png"
import Product4 from "../../assets/product4.png"
import Product5 from "../../assets/product5.png"
import Product6 from "../../assets/product6.png"

import Image from 'next/image'

const Catalog = () => {
  return (
    <section className={`container ${styles.catalog}`}>
       <h2 className={styles.title}>Greenhouse Services</h2>
       <p className={styles.productText}>We are a leading greenhouse manufacturer and supplier, providing comprehensive design solutions and turnkey project services. </p>
       <div className={styles.bigCatContainer}>
    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Product7} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Product8} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">multi span greenhouse</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>

    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Flower1} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Flower2} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">tomato hydroponics system</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>

    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Product1} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Product2} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">multi span greenhouse</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>

    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Product3} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Product4} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">multi span greenhouse</a>
        </div>
        <div className={styles.headerCta}>
                <Link href='/contact' className={styles.ctaBtn}>Contact</Link>
            </div>
    </div>
    <div className={styles.catalogCon}>
      <div className={styles.catalogImg}>
        <Link href='/contact' className={styles.catalogLink}>
        <Image src={Product5} alt="" />
        </Link>
        <Link href='/contact' className={styles.catalogHover}>
        <Image src={Product6} alt="" />
        </Link>
       </div>
      <div className={styles.catalogText}>
        <a href="/contact">Tower hydroponic</a>
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