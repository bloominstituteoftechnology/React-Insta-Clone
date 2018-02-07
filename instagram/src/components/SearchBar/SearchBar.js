import React from 'react';
import './SearchBar.css';
import icon from './IG_icon.png';
import lettering from './instagram_lettering.png';
import compass from './compass.png';
import heart from './heart.png';
import profile from './profile.png';

function SearchBar(props) {
  return (
    <div className='block'>
      <div className="left">
        <img className="icon" src={icon} alt="instagram icon" />
        <img className="lettering" src={lettering} alt="instagram" />
      </div>
      <div className='form'>
        <form>
          <input
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
      <div className="right">
        <img className='compass' src={compass} alt="explore icon" />
        <img src={heart} alt="likes icon" />
        <img src={profile} alt="profile icon" />
      </div>
    </div>
  )
}

export default SearchBar;