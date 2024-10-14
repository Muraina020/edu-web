import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import SectionHeader from '../components/section-header/SectionHeader'
import AboutImage from "../assets/abt.jpeg"

const page = () => {
  return (
    <section>
    <SectionHeader title="About Us" subtitle="Get to know Who are we and what we do"/>
    <header className={`container ${styles.header}`}>
      <div className={`container ${styles.headerText}`}>
      <h2>ABOUT DERYNE GREENHOUSE</h2>
      <hr className={styles.line}/>
      <p>We provide greenhouses equipped with advanced climate control and irrigation systems. Along with the technology, farmers receive training and support to effectively manage their greenhouses, optimize crop growth, and protect their produce from adverse weather conditions</p>
      </div>
    </header>
    <div className={`container ${styles.aboutContainer}`}>
      <article className={styles.aboutImage}>
        <Image src={AboutImage} alt=''/>
      </article>
      <article className={styles.aboutContent}>
        <h3>About Deryne Greenhouse</h3>
        <p><b>Vision:</b> To revolutionize small-scale farming by providing accessible, climate-resilient greenhouses, empowering farmers to maximize productivity and contribute to sustainable food security.
        </p>
        <p><b>Mission:</b> To deliver affordable, high-quality leased greenhouses with cutting-edge climate control and irrigation systems, paired with comprehensive training, enabling small-scale farmers to boost yields, protect crops, and thrive in changing environmental conditions.</p>
        <p><b>Solution:</b> Deryne Greenhouse offers a subscription-based service that provides small-scale farmers with leased greenhouses equipped with advanced climate control and irrigation systems. Along with the technology, farmers receive training and support to effectively manage their greenhouses, optimize crop growth, and protect their produce from adverse weather conditions. This affordable and comprehensive solution empowers farmers to increase yields, improve crop quality, and achieve sustainable farming practices, all while reducing risks associated with changing environmental factors.</p>
        {/* <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`} download rel='noopener noreferrer'>Download cv</a> */}
      </article>
    </div>
  </section>
  )
}

export default page