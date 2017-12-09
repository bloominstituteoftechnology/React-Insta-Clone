import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
    console.log(this.state.input);
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar__icon SearchBar__icon-camera"></div>
        <div className="SearchBar__logo"></div>
        <div className="SearchBar__input">
          <input type="text" onChange={this.handleInput} value={this.state.input} placeholder="Search" />
        </div>
        <div className="SearchBar__iconset">
          <div className="SearchBar__icon SearchBar__icon-explore" />
          <div className="SearchBar__icon SearchBar__icon-like" />
          <div className="SearchBar__icon SearchBar__icon-user" />
        </div>
      </div>
    );
  }
}

export default SearchBar;