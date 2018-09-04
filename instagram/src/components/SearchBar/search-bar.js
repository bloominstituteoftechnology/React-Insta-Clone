import React from 'react';
import './search-bar.css';

const SearchBar = () => {
    return (
        <div class="header">
          <section class="sec">
            <img class="logo" alt="logo" src="../../../assets/logo.svg"/>
            <img alt="insta" src="../../../assets/insta.svg"/>
          </section>
          <section class="sec">
            <input class="search" placeholder="Search"/>
	  </section>
          <section>
            <div class="topbutton nav">🧭</div>
            <div class="topbutton heart">🖤</div>
            <div class="topbutton account">👱</div>
          </section>
	</div>
    );
};

export default SearchBar;
