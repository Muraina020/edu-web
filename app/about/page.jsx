import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'
import SectionHeader from '../components/section-header/SectionHeader'
import AboutImage from "../assets/abt.jpeg"

const page = () => {
  return (
    <section>
    <SectionHeader title="About Me" subtitle="Who are we and what we do"/>
    <div className={`container ${styles.aboutContainer}`}>
      <article className={styles.aboutImage}>
        <Image src={AboutImage} alt=''/>
      </article>
      <article className={styles.aboutContent}>
        <h4>Deryne Greenhouse</h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, amet neque aliquam saepe cum odio incidunt perferendis laborum fugit vitae? </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magnam molestiae ducimus nihil fugit praesentium neque distinctio, consequatur ipsa. Excepturi vitae molestias libero ullam quis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat velit dolores vero quo totam. Sint sed distinctio ipsum error facere ullam esse non? A repellat aperiam doloremque praesentium magni dolorem amet ut harum sequi, aspernatur culpa dolore in reiciendis laudantium optio dolor accusantium! Distinctio dolorum exercitationem nam cumque pariatur praesentium fuga libero obcaecati, aliquam perferendis corrupti amet explicabo maxime tenetur quisquam quis non corporis totam minus mollitia dolorem error? At et aliquid aspernatur illo sed dicta? Et, voluptatum! Nobis, ex! </p>
        {/* <a href="../assets/cv.pdf" className={`btn primary ${styles.aboutCta}`} download rel='noopener noreferrer'>Download cv</a> */}
      </article>
    </div>
  </section>
  )
}

export default page