import React from 'react';

import man_profile from '../../images/man_profile.svg'
import background_img from '../../images/background_img.svg'

import './ProfileBar.css';

//Profile Sidebar functional component
const Sidebar = () => {
  return (
    <div className="profile-sidebar">
      <div className="profile-header">
        <img
          className="profile-background"
          src={background_img}
          alt="Background"
        />
        <div className="profile-picture">
          <img
            src={man_profile}
            alt="Profile"
          />
        </div>
        <h2 className="profile-name">Albert Flores</h2>
        <p className="profile-role">
          Senior Product Designer | UI/UX 
        </p>
        <p className="profile-role">
           Designer | Graphic Designer | Web...
        </p>
        <p className="profile-location">Clinton, Maryland</p>
      </div>

      <div className="profile-stats">
        <div className="stat-item">
        <ul className="list-group">
        <li className="list-group-item">Profile Visitors <span className="badge float-end">140</span></li>
        <li className="list-group-item">Resume Views <span className="badge float-end">20</span></li>
        <li className="list-group-item">My Jobs <span className="badge float-end">88</span></li>
      </ul>
        </div>
      </div>

      <div className="profile-calendar">
        <h3>My Calendar</h3>
        <p className="calendar-text">Upcoming Interviews</p>
      </div>
    </div>
  );
};

export default Sidebar;
