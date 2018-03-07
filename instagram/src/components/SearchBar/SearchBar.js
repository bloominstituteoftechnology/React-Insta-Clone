import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }
  render() {
    return (
      <img src='http://localhost:3000/instagram/src/components/SearchBar/ig_search_bar.png' alt="search img"/>
    )
  }
}

export default SearchBar;