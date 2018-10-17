import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-bar-wrap'>
        <div className='image'>
            <img alt='instagram logo' src={IGLogo} className='logo' />
              <i className="fab fa-instagram fa-5x" />
        </div>
        <div className='search'>
            <input type='text' placeholder='Search' onChange={props.searchPosts} />
        </div>
        <div className="social-wrap">
        <div className="social">
          <i className="far fa-compass fa-3x" />
        </div>
        <div className="social">
          <i className="far fa-heart fa-3x" />
        </div>
        <div className="social">
          <i className="far fa-user-circle fa-3x" />
        </div>
      </div>
    </div>
    );
};

export default SearchBar;