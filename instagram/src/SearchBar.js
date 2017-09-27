import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <div className="Bar">
            <input className="Search" placeholder="search" />
        </div>
    )
  }
}

export default SearchBar;