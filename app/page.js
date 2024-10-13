import React from 'react'
import Header from './components/header/Header'
import Catalog from './components/catalog/Catalog'
import Testimonials from './components/testimonials/Testimonials'
import ProjectPage from './components/projectPage/ProjectPage'
import ImageSlider from './components/sliderPage/SliderPage'
import MissionPage from './components/missionPage/MissionPage'

const Page = () => {
  return (
    <>
    <ImageSlider/>
    <ProjectPage/>
    <Catalog/>
    <MissionPage/>
    <Testimonials/>
    </>
  )
}

export default Page