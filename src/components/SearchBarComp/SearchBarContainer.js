import React from 'react';
import './search-bar.css';
import SearchBar from './SearchBar';

const SearchBarContainer = () => {
  return (
    <header className="main-header-container">
      <div className="main-header__logos">
        <div className="main-header__logo-container">
          <img className="main-header__logo" src="#" alt="instagram logo"/>
        </div>
        <div className="main-header__logo-container">
          <img className="main-header__logo" src="#" alt="instagram logo"/>
        </div>
      </div>

      <SearchBar />
      
      <div className="main-header__icons-container">
        
      </div>
    </header>
  );
}

