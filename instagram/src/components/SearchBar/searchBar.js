import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
  state = {
    value: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({value: ''});
  }
  handleInput = (event) => {
    this.setState({value: event.target.value});
  }

  render() {
  return (
    <div className="searchBar">
    <img className="logo" src='https://c1.staticflickr.com/6/5515/10094221256_eb08c5088d_b.jpg' alt="logo"/>
    <form onSubmit={this.handleSubmit}>
      <input 
        type="text" 
        value={this.state.value} 
        onChange={this.handleInput}
      /> 
    <button type="submit">Search</button>
  </form></div>
  )
}
}

export default SearchBar;