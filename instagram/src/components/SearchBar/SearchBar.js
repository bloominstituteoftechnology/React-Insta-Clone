import React from 'react';
import classNames from 'classnames';

import IGLogo from '../../assets/IGLogo.png';
import Instagram from '../../assets/instagram.png';
import './SearchBar.css';

const STYLE_BASE = "search-bar_";

const SearchBar = () => {
  return (
    <div className={`${STYLE_BASE}container`} >
      <div className={`${STYLE_BASE}imageContainer`} >
        <img src={IGLogo} alt="IGLogo" className={`${STYLE_BASE}instaLogo`} />
        <img src={Instagram} alt="instagram" className={`${STYLE_BASE}instagram`} />
      </div>
      <div className={`${STYLE_BASE}searchFieldContainer`} >
        <input type="text" placeholder="Search" className={`${STYLE_BASE}searchField`} />
      </div>
      <div className={`${STYLE_BASE}iconContainer`} >
        <div className={classNames({
          [`${STYLE_BASE}social`]: true,
          [`${STYLE_BASE}compass`]: true,
        })}>
          <i className="fa fa-compass" aria-hidden="true" />
        </div>
        <div className={`${STYLE_BASE}social`}>
          <i class="fa fa-heart-o" aria-hidden="true" />
        </div>
        <div className={`${STYLE_BASE}social`}>
          <i class="fa fa-user-o" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar;