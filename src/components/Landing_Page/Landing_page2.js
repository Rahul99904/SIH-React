import React from 'react'

import bg_img from "../../assets/Arogya_setu.gif"
export default function Landing_Page2() {

  const myStyle = {
    height:"100vh",
    marginTop:'-70px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/Arogya_setu.gif'})`,
  };

  return (
    <>
      <div class="has-bg-img">

        <div style={{ position: "absolute", left: "1400px", top: "5px", textDecoration: "none",  }}>
          <a href=""><b>Login</b></a>
        </div>
        <div style={{ position: "absolute", left: "30px", top: "400px" }}>
          <h1><b>Vaidya Setu</b></h1>
          <h3><b>Secure your health data</b></h3>
          <button type="button" className="btn btn-info w-5" style={{ width: "300px", height: "40px" }}>Get Started</button>
        </div>

        <div style={{ position: "absolute", left: "30px", top: "900px" }}>
          <h4><b>AboutUs:</b></h4>
          <p><b>Blockchain.com is a cryptocurrency financial services company. The company began as the first Bitcoin blockchain explorer in 2011 and later created a cryptocurrency wallet that accounted for 28% of bitcoin transactions between 2012 and 2020.</b></p>
        </div>

        <img class="bg-img" src={bg_img} alt="..."></img>
      </div>


    </>
  )
}
