import React from 'react';

import side_profile_img from '../../images/side_profile_img.svg'
import logo from '../../images/logo.svg'
import search_grey from '../../images/search_grey.svg'

import './Header.css';


//Header functional component 
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow-sm px-1 px-sm-3">
          <div className="container-fluid">
            <a className="navbar-brand me-xl-5" href="#"><img src={logo} alt="Logo"/></a>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mt-2 mb-2 mt-md-0 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Find Jobs</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Top Companies</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Job Tracker</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">My Calendar</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Documents</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Messages</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Notifications</a>
                  </li>
                </ul>
                <button className="btn btn-primary btn-md w-100 mt-4 d-sm-none">Resume Builder</button>
              </div>
            </div>
            <button className="navbar-toggler ms-auto me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><span className="navbar-toggler-icon"></span>
            </button>
            <div className="d-flex">
              <div className="search-bar">
                <img src={search_grey} alt="search" className="search-icon"/>
                <input type="text" placeholder="Search"/>
              </div>
              <button className="btn btn-primary btn-sm ms-2 d-none d-sm-block">Resume Builder</button>
              <img src={side_profile_img} alt="Profile" className="ms-2 image_styles d-none d-sm-block d-lg-none d-xl-block" width="40" height="40"/>
            </div>
          </div>
        </nav>
    );
};

export default Header;
