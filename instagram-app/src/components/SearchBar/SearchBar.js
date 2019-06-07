import React from 'react';

import './search-bar.css';

class SearchBar extends React.Component {
  state = {
    search: ''
  };

  onHandleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSearch = event => {
    if (this.state.search.length === 0) return this.props.search('');

    return this.props.search(this.state.search);
  };
  render() {
    return (
      <div className='search-bar'>
        <div className='search'>
          <div clasName='icon'>
            <i className='big instagram icon' />
          </div>
          <div className='logo'>
            <p className='insta'>Instagram</p>
          </div>

          <form className='pd'>
            <input type='text' onChange={this.onHandleChange} name='search' placeholder='search' onKeyDown={this.handleSearch} className='form' />
          </form>

          <div className='left-icon'>
            <i class='large compass outline icon' />
            <i class='large heart outline icon' />
            <i class='large user outline icon' />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
