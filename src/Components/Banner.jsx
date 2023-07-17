import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const [bannerTitleColor, setBannerTitleColor] = useState('#146191')
  const colorArray = ['#146191', '#C0372D']
  
  useEffect(()=>{
    setInterval(()=>{
      setBannerTitleColor(colorArray[Math.floor(Math.random() *2)])
    },1000)
  },[])

  return (
    <main className="banner">
      <div className="bannerLeft">
        <h2 className="bannerTitle" style={{color:bannerTitleColor}}>The best E-commerce products are here</h2>
        <p className="bannerPara">
          Laborum veniam culpa deserunt fugiat exercitation consequat esse
          aliqua ullamco aliquip Lorem. Fugiat cupidatat cupidatat mollit veniam
          ipsum sunt veniam commodo consectetur.
        </p>
        <Link to="/products">
          {" "}
          <button type="button" className="bannerButton">
            See Products
          </button>
        </Link>
      </div>
      <div className="bannerRight"></div>
    </main>
  );
};

export default Banner;
