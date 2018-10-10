import React from 'react';
import './SearchBar.css';
import InstaLogo from './Img/insta-logo.jpeg';
import InstaText from './Img/instagram_text.png';
import NavIcon from './Img/nav-icon.png';
import HeartIcon from './Img/heart-icon.png';
import UserIcon from './Img/user-icon.png';

const SearchBar = props => {
  return(
  <div className='header'>
      <div className='left-logo'>
        <img src={InstaLogo} alt='camera'  className='insta-logo'/>
        <img src={InstaText} alt='instagram' className='insta-text'/>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search'/>
      </div>
      <div className='right-logo'>
        <img src={NavIcon} alt='compass' className='nav-icon'/>
        <img src={HeartIcon} alt='heart' className='heart-icon'/>
        <img src={UserIcon} alt='user' className='user-icon'/>
      </div>
  </div>
  );
}

export default SearchBar;

