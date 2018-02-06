import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (<div className="container">
    <div className="container__box container__box-1">
      <div>hi</div>
      <div>hello</div>
      <div>hey</div>
    </div>
    
    <div className="container__box container__box-2">
      <form>
        <input type="text" placeholder="Search"/>
      </form>
    </div>

    <div className="container__box container__box-3">
      <div>hey</div>
      <div>hi</div>
      <div>hello</div>
    </div>

  </div>);
}

export default SearchBar;