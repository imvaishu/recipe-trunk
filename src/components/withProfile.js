import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import home from '../icons/home.jpeg';
import add from '../icons/add.jpeg';
import '../App.css';

const ProfileDiv = ({ profileUrl, setUser }) => {
  const [isVisible, setVisibility] = useState(false);
  const dropDownStyle = isVisible ? 'show' : 'hide';

  return (
    <div>
      <Link to="/category/all">
        <img src={home} alt="logo" style={{ width: '50px', height: '50px' }} />
      </Link>
      <Link to="/addRecipe">
        <img src={add} alt="logo" style={{ width: '50px', height: '50px' }} />
      </Link>
      <img
        className="ProfilePic"
        src={profileUrl}
        alt="profilePic"
        onClick={() => setVisibility(!isVisible)}
      />
      <Logout className={`${dropDownStyle} dropDown`} setUser={setUser} />
    </div>
  );
};

const withProfile = (Component, profilePic, setUser) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid lightgray',
      }}
    >
      <Component />
      <ProfileDiv profileUrl={profilePic} setUser={setUser} />
    </div>
  );
};

export default withProfile;
