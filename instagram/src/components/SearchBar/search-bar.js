import React from 'react';
import './search-bar.css';

const SearchBar = () => {
    return (
        <div className="header">
          <section className="sec">
            <img className="logo" alt="logo" src="./logo.png"/>
            <img alt="insta" src="./insta.svg"/>
          </section>
          <section className="sec">
            <input className="search" placeholder="Search"/>
	  </section>
          <section>
            <div className="topbutton nav"><span role="img" aria-label="compass">🧭</span></div>
            <span></span>
            <div className="topbutton heart"><span role="img" aria-label="heart">🖤</span></div>
            <div className="topbutton account"><span role="img" aria-label="account">👱</span></div>
          </section>
	</div>
    );
};

export default SearchBar;
