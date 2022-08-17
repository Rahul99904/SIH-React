/* eslint-disable */
import React from 'react';
//import "../Style/bootstrap.css"

export default function appbar() {

  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded-bottom shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Vaidya-Setu</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
    <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">logout</a>
        </li>
        </ul>
      
    </div>
  </div>
</nav>

  

    </>
  )
}
