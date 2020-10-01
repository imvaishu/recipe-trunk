import React from 'react';
import { getUser, logout } from '../RecipeApi';

export default (props) => {
  const handleClick = () => {
    logout().then(res => {
      if (res.status) {
        getUser().then(props.setUser(null));
      }
    });
  };

  return (
    <div
      className={props.className}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      Logout
    </div>
  );
};
