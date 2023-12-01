import React from "react";
import { Link } from "react-router-dom";
import './TopNavigation.css';

const TopNavigation = () => {
    return (
        // <nav className="top-nav">
        //     <ul>
        //         <li><Link to='/'>Home</Link></li>
        //         <li><Link to='/about'>About</Link></li>
        //         <li><Link to='/contact'>Contact</Link></li>
        //         <li><Link to='/projects'>Projects</Link></li>
        //     </ul>
        // </nav>


<nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
    <div className="container">
      <Link className="navbar-brand" href="#">𝓢𝓪𝓷𝓳𝓪𝔂</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>

          {/* Add more menu items as needed */}
          
        </ul>
      </div>
    </div>
  </nav>


    );
};

export default TopNavigation;