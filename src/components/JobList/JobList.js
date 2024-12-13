import React from 'react';

import locationIcon from '../../images/location.svg'
import clockIcon from '../../images/clock.svg'
import labelIcon from '../../images/label.svg'

import { jobs } from '../../constants';

import './JobList.css';

//JobList functional component to show featured and recommended jobs
const JobList = (props) => {
    //props passed from App component, to show featured and recommended jobs, based on prop value
    return (
        <div className="job-listings mb-4">
            <div className="job-listings-header">
                <h5 className="title mb-2 mb-sm-0 neueHassGroteskDisplayRoman">{props.job} Jobs</h5>
                <a href="#" className="link">See {props.job} Jobs</a>
            </div>
            <div className="card-wrapper">
                {jobs.map((job) => (
                    <div className="card" key={job.id}>
                        <p className="mb-2 fw-bold">{props.job === "Featured" ? "Promoted": "" } </p>
                        <div className="d-flex align-items-center mb-2">
                            <div className="icon-wrapper">
                                <img src={job.icon} className="icon" alt="job_icon" />
                            </div>
                            <div>
                                <p className="text-truncate mb-0">{job.title}</p>
                                <p className="text-truncate mb-0">Teams</p>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="feature"><img src={locationIcon} className="icon" alt="location"/> {job.location}</div>
                            <div className="feature"><img src={clockIcon} className="icon" alt="clock" /> {job.date} | <span className="ms-1 text-primary"> {job.applicants} applicants</span></div>
                        </div>

                        <div className="d-flex justify-content-between">
                            <button className="btn btn-primary btn-md">Apply Now</button>
                            <button className="btn border-0 p-0">
                                <img src={labelIcon} className="labelIcon" alt="label" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobList;
