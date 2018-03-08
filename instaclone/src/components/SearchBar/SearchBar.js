import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor() {
    super();
    this.state = { searchTerm: '' };
  }

render() {
  return <input onChange={event => this.setState({ searchTerm: event.target.value })} />;
}

}