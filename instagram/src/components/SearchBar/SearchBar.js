import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-bar-wrap'>
        <div className='image'>
            <img alt='instagram logo' src={IGLogo} className='logo' />
        </div>
        <div className='search'>
            <input type='text' placeholder='Search' onChange={props.searchPosts} />
            <button type="submit"><i className="fa fa-search"></i></button>
        </div>
        <div className="social-wrap">
        <div className="social">
          <i className="fa fa-compass" />
        </div>
        <div className="social">
          <i className="fa fa-heart" />
        </div>
        <div className="social">
          <i className="fa fa-user-circle" />
        </div>
      </div>
    </div>
    );
};

export default SearchBar;