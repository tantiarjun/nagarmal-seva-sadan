import React from 'react'
import Page from '../DescriptionPage/Page';
import { sectionData } from './sectionData';
import img from '../../assets/AboutUS/Image1.png'; 

const AboutPage = () => {
  return (
    <Page
        subtitle="About Us"
        title="Affordable Care, Accurate Treatment, Respectful Behavior"
        imageUrl={img}
        sectionData={sectionData}
    />
  )
}

export default AboutPage
