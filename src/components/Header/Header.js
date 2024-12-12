import React from 'react';

import side_profile_img from '../../images/side_profile_img.svg'
import logo from '../../images/logo.svg'
import search_grey from '../../images/search_grey.svg'

import './Header.css';


//Header functional component 
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img
          src={logo}
          alt="Logo"
          className="logo"
        />
        <nav className="nav-links">
          <a href="#" className="nav-link active">Find Jobs</a>
          <a href="#" className="nav-link">Top Companies</a>
          <a href="#" className="nav-link">Job Tracker</a>
          <a href="#" className="nav-link">My Calendar</a>
          <a href="#" className="nav-link">Documents</a>
          <a href="#" className="nav-link">Messages</a>
          <a href="#" className="nav-link">Notifications</a>
        </nav>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <img
          src={search_grey}
          alt="search"
          className="search-icon"
        />
          <input type="text" placeholder="Search" />

        </div>
        <button className="resume-builder">Resume Builder</button>
        <img
          src={side_profile_img}
          alt="Profile"
          className="image_styles"
        />
      </div>
    </header>
  );
};

export default Header;
