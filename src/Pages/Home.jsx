import React from 'react'
import Banner from '../Components/Banner'
import './style.css'
import Categories from '../Components/Categories'

const Home = () => {
  return (
    <div className='home'>
        <Banner />
        <Categories />
    </div>
  )
}

export default Home
