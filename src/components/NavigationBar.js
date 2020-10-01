import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = props => {
  const navigationBar = props.types.map(type => (
    <NavLink to={`/category/${type}`} activeClassName="currentLink" key={type}>
      {type}
    </NavLink>
  ));
  return (
    <div
      style={{
        height: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        padding:'1%',
        borderBottom: '1px solid lightgray',
      }}
    >
      {navigationBar}
    </div>
  );
};

export default NavigationBar;
