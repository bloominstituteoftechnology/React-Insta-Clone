import React from 'react';
import './SearchBar.css'

const SearchBar = () => {
    return <div className="searchBar">
        <div className="left">
          <i className="fab fa-instagram fa-2x left" />
          <div className="verticalLine left" />
          <div className="appText">Instagram</div>
        </div>
        <div className="middle">
          <input type="text" className="fontControl" placeholder="&#xf002; Search" />
        </div>
        <div className="right">
          <i className="far fa-compass" />
          <i className="far fa-heart rightitems" />
          <i className="far fa-user rightitems" />
        </div>
      </div>;
}

export default SearchBar;