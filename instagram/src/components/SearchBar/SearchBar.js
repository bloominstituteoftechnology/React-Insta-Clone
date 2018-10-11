import React from 'react';
import InstagramIcon from '../../assets/003-instagram.png'
import InstagramLogo from '../../assets/instagram-logo.png';
import Compass from '../../assets/001-compass.png';
import Heart from '../../assets/005-heart.png';
import Profile from '../../assets/002-profile.png';
import './SearchBar.css';
import { Image35 } from '../../Styles';

const SearchBar = props => {
  console.log(props)
  return (
    <div className='search-container'>
      <div className='logo-left'>
        <Image35 src={InstagramIcon} alt='Instagram Icon' />
        <Image35 src={InstagramLogo} alt='Instagram Logo' />
      </div>
      <div className='search-center'>
        <input 
        className='search-input'
        type='text' 
        placeholder=' &#x1F50D; Search' 
        value={props.filterTarget} 
        onChange={props.changeHandler}
        name='filterTarget'
        />
        
      </div>
      <div className='icons-right'>
        <img className='insta-compass' src={Compass} alt='Compass Icon' />
        <img className='insta-heart' src={Heart} alt='Heart Icon' />
        <img className='insta-profile' src={Profile} alt='Profile Icon' />
      </div>
    </div>
  );
}


export default SearchBar;
