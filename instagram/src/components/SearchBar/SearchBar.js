import React from 'react';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  };

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const newTerms = {

    }

    this.setState({ searchTerm: '' })
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.searchTerm}
        onChange={this.handleInputChange} />
        <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default SearchBar;
