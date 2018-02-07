import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (<div className="container">
    <div className="container__box">
      <div className="container__box-1"></div>
      <div className="container__box-2"></div>
      <div className="container__box-3">Insta<s>gram</s></div>
    </div>
    
    <div className="container__box">
      <form>
        <input type="text" placeholder="Search"/>
      </form>
    </div>

    <div className="container__box">
      <div className="container__box-4"></div>
      <div className="container__box-5"></div>
      <div className="container__box-6"></div>
    </div>

  </div>);
}

export default SearchBar;