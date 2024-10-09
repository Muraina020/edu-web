import React from 'react'
import Header from './components/header/Header'
import Catalog from './components/catalog/Catalog'
import Testimonials from './components/testimonials/Testimonials'
import ProjectPage from './components/projectPage/ProjectPage'
import ImageSlider from './components/sliderPage/SliderPage'

const Page = () => {
  return (
    <>
    <ImageSlider/>
    <Catalog/>
    <ProjectPage/>
    <Testimonials/>
    </>
  )
}

export default Page