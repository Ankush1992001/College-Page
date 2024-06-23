import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero_text">
        <h1>EDUCATION</h1>
        <p>
            Our cutting-edge curriculum is designed to empower students with the knowledhe, skills, and experiences
            needed to excel in the dynamic field of eduction
        </p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
