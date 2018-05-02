import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="logo">Logo</div>
        <div className="brand">Instagram</div>
        <div className="searchBox">
          <div className="searchLogo"></div>
          <input name="searchInput" type="text" value=""/>
        </div>
        <div className="social">
          <div className="mapIcon"></div>
          <div className="heartIcon"></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
