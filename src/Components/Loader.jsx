import React from 'react'
import {AiOutlineLoading3Quarters} from 'react-icons/ai'
import './style.css'

const Loader = () => {
  return (
    <div className='loaderWrapper'>
      <AiOutlineLoading3Quarters className='loader' size={100} />
    </div>
  )
}

export default Loader
