import React from 'react'
import { logo } from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex 
    justify-center itmes-center flex-col'>
      <nav className='flex justify-between
    items-center flex-col'>
        <img src={logo} alt="sumz_logo" />

      </nav>

    </header>
  )
}

export default Hero