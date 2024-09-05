import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu}=useGlobalContext();
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Financial infrastructure to grow
          </h1>
          <p>
            Join the millions of companies of all sizes that use 
            Stripe to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone'></img>
        </article>
      </div>
    </section>
  )
}

export default Hero
