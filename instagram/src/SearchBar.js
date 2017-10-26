import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = {};
    this.searchBox;
  }

  componentDidMount() {
    this.searchBox = document.getElementById('searchBox');
  }

  search() {
    console.log('hi');
  }

  render() {
    return (
      <div>
        <div className="NavBar">
          <div className="NavBar__child">Logo</div>
          <div className="NavBar__child">Instagram Text</div>
          <input
            id="searchBox"
            type="text"
            className="NavBar__child"
            placeholder="search"
            onChange={this.search}
          />
          <div className="NavBar__child">compass</div>
          <div className="NavBar__child">heart</div>
          <div className="NavBar__child">person</div>
        </div>
      </div>
    );
  }
}
