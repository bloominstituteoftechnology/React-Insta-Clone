import React, { Component } from 'react';
import './SearchBar';

class SearchBarForm extends Component {
  constructor(props) {
    super();
    this.state = {
      searchTerm: ''
    }
  }

  onSearchChange = e => {
    this.setState({searchTerm: e.target.value});
  }

  render() {
    return (
      <form className="search-bar-form" onSubmit={(e) => this.props.searchPosts(e, this.state.searchTerm)}>
        <input type="text" className="search-bar-form__input" placeholder="Search" value={this.state.searchTerm} onChange={this.onSearchChange} />
      </form>
    );
  }
}

export default SearchBarForm;