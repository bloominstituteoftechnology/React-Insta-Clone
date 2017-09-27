import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
  render() {
    return (
        <form>
           <input placeholder="search" className="form-control search" />
        </form>
    )
  }
}

export default SearchBar;