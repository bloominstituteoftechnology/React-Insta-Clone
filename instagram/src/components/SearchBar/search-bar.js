import React, { Component } from 'react';
import './search-bar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className='search'>
        <form>
          <input className='search__input' type='text' placeholder='Search Here'/>
        </form>
      </div>
    );
  }
}

export default SearchBar;