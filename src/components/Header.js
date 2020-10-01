import React from 'react';
import logo from '../icons/recipe.png';

const Header = props => (
  <div style={{ display: 'flex' }}>
    <img src={logo} alt="logo" style={{ width: '100px', height: '50px' }} />
    <div style={{ textAlign: 'center', fontSize: '35px', paddingLeft: '15px' }}>
      Recipe-Trunk
    </div>
  </div>
);

export default Header;
