import React from 'react';

import searchIcon from '../../images/search-icon.svg'

import './JobSearch.css';

//JobSearch functional component
const JobSearch = () => {
  return (
    <>
     <h4 class="fw-bold">Find your Dream Job, <span class="text-primary">Albert!</span></h4>
      <p>Explore the latest job openings and apply for the best opportunities available today!</p>
    <div className="job-search p-3 bg-white">
      <div className="d-md-flex">
        <input type="text" className="form-control me-2 mb-3 mb-md-0" placeholder="Job Title, Company, or Keywords" />
        <select className="form-select d-none d-lg-block">
          <option>Select Location</option>
        </select>
        <select className="form-select d-none d-lg-block">
          <option>Job Type</option>
        </select>
        <button className="btn btn-primary mx-auto mx-md-0"><img src={searchIcon} class="icon" alt="search" />Search</button>
      </div>
    </div>
    <div className="suggestions">
        <span className="me-3 pt-3">Similar:</span>
        <button className="btn btn-outline-dark btn-sm me-2">Frontend</button>
        <button className="btn btn-outline-dark btn-sm me-2">Backend</button>
        <button className="btn btn-outline-dark btn-sm">Graphic Designer</button>
      </div>
    </>
  );
};

export default JobSearch;
