import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import cameraImage from '../../Images/Header/header-camera.png';
import dividerImage from '../../Images/Header/header-divider.png';
import logoImage from '../../Images/Header/header-Instagram.png';
import circleDiamondImage from '../../Images/Header/header-circle-diamond.png';
import heartImage from '../../Images/Header/header-heart.png';
import personImage from '../../Images/Header/header-person.png';
import './Style.css';

const Header = props => {
  return (
  <div className="header">
    <div className="header-left-side">
      <img className="header-icons" src={cameraImage} alt="" />
      <img src={dividerImage} alt="" />
      <img src={logoImage} alt="" />
    </div>
    <SearchBar />
    <div className="header-right-side">
      <img className="header-icons" src={circleDiamondImage} alt="" />
      <img className="header-icons" src={heartImage} alt="" />
      <img className="header-icons" src={personImage} alt="" />
    </div>
  </div>
  );
}

export default Header;