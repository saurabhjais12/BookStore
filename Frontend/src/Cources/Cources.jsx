import React from 'react'
import Navbar from '../Components/Navbar'
import Cource from '../Components/Cource'
import Footer from '../Components/Footer'


const Cources = () => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    <Cource/>
    </div>
    <Footer/>
    </>
  )
}

export default Cources