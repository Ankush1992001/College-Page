import React from 'react'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Tastimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
const App = () => {
  return (
    <div>
      <Hero/>
      <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>   
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Tastimonials/>
      <Title subTitle='CONTACT US' title='Get in Touch'/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
