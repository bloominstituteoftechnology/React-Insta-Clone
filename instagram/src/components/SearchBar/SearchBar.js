import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <i className="fab fa-instagram fa-lg"></i>
        <span fontStyle="romanesco">Instagram</span>
        <input type="text" placeholder="            Search"/>
        <i className="far fa-compass fa-lg"></i>
        <i className="far fa-heart fa-lg"></i>
        <i className="far fa-user fa-lg"></i>
      </div>  
    )
  }
}

export default SearchBar