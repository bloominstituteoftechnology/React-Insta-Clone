import React, { Component } from 'react'
//import { Button } from 'reactstrap';
import './SearchBar.css';

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  render () {
    return (
      <div className='nav-wrapper'>
      <div className='searchbar-container'>
      <form><input type='text'size='45'placeholder='Search Instagram...'/></form>
      </div>
      </div>
    )
  }
}

export default SearchBar;