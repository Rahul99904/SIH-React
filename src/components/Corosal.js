import React from 'react'

export default function Corosal() {
  return (
    <>

<div id="carouselExampleControls" className="carousel slide mt-3 ml-3 mr-3 shadow" data-ride="carousel">
  <div className="carousel-inner rounded">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://source.unsplash.com/2700x900/?healthcare" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/2700x900/?medicine" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://source.unsplash.com/2700x900/?medical" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>






    </>
  )
}
