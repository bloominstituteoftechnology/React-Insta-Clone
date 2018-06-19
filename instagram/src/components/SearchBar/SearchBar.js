import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="searchbar">
        {/* <span class="fa fa-search"></span> */}
        <input placeholder="Search"></input>
      </div>
    );
  }
}

export default SearchBar;
