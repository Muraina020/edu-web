"use client"

import React from 'react'
import styles from "./testimonials.module.css"
import { Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/pagination';
import { data } from './testimonialData';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className={styles.section}>
        <h2>Testimonials</h2>
        <p>Check out what our clients say about us</p>
        <Swiper
  // install Swiper modules
  modules={[ Pagination ]}
  spaceBetween={50}
  slidesPerView={2} // default for desktop
  pagination={{ clickable: true }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2, 
    },
  }}
>
  {data.map(({id, name, avatar, profession, quote}) => (
    <SwiperSlide key={id} className={styles.slide}>
      <div className={styles.avatarWraper}>
        <div className={styles.avatar}>
          <Image src={avatar} alt=''/>
        </div>
      </div>
      <h6 className={styles.name}>{name}</h6>
      <small className={styles.job}>{profession}</small>
      <p className={styles.quote}>{quote}</p>
    </SwiperSlide>
  ))}
  <div className='swiper-pagination'></div>
</Swiper>

  
    </section>
  )
}

export default Testimonials