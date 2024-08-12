'use client'

import React from 'react'
import WhoWeAre from './WhoWeAre'
import PartnersSection from './PartnersSection'
import LocationSection from './LocationSection'
import Container from '../components/Container'

const AboutUs = () => { 
  
  return (
    <div>
      <div id="who-we-are-section"> 
        <WhoWeAre />
      </div> 

      <div id="partners-section"> 
        <PartnersSection /> 
      </div> 

      <div id="location-section"> 
        <LocationSection />
      </div>

    </div>
  )
}

export default AboutUs