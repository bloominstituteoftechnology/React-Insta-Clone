import React from 'react';

import './search-bar.css';

class SearchBar extends React.Component {
  state = {
    search: ''
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSearch = event => {
    if (this.state.search.length === 1) return this.props.search('');

    return this.props.search(this.state.search);
  };
  render() {
    return (
      <div className='search-bar'>
        <p>
          <i className='instagram icon' />{' '}
        </p>
        <p className='insta'>Instagram</p>
        <form>
          <input type='text' onChange={this.handleChange} name='search' placeholde='search' onKeyDown={this.handleSearch} />
        </form>
      </div>
    );
  }
}
export default SearchBar;
