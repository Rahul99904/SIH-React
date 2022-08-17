import React from 'react'

function Corosal2() {
  return (
    <>
      <div id="carouselExampleControls" className="carousel slide mt-3 shadow rounded" style={{ height: "400px", width: "400px", marginLeft: "60px" }} data-bs-ride="carousel" data-bs-interval="false">
        <div className="carousel-inner" style={{}}>
          <div className="carousel-item active">
            <div className="card text-white bg-dark mb-3" style={{ height: "345px" }}>
              <div className="card-header">Header1</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div style={{marginLeft:"180px"}}>
            <a href="#" style={{color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg></a>
            </div>
          
          </div>

          <div className="carousel-item">
            <div className="card text-white bg-dark mb-3" style={{ height: "345px" }}>
              <div className="card-header">Header2</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div style={{marginLeft:"180px"}}>
            <a href="#" style={{color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg></a>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card text-white bg-dark mb-3" style={{ height: "345px" }}>
              <div className="card-header">Header3</div>
              <div className="card-body">
                <h5 className="card-title">Dark card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div style={{marginLeft:"180px"}}>
            <a href="#" style={{color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  fill="currentColor" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg></a>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Corosal2