import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    input: ''
  }

  updateSearch = (event) => {
    let stateCopy = this.state;
    stateCopy.input = event.target.value;
    this.setState({input: stateCopy.input});
  }


  render() {
    return (
      <div>
        <img src = './assets/ig_search_bar.png' alt= 'search bar' />
        <form className= 'SearchBar__field'>
          <input type = 'text' value = {this.state.input} onChange = {this.updateSearch} placeholder = 'search' />
        </form>
      </div>
    );
  };
};

export default SearchBar;