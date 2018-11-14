import React from 'react';

import './SearchBar.scss';

import logo from './logo.png';

export default class SearchBar extends React.Component {

  constructor() {

    super();

    this.state = {

      searchText: ''

    }

  }

  handleChange = e => {

    this.setState({searchText: e.target.value}, () => this.props.searchFunc(this.state.searchText));

  }

  render() {

    return (

      <div className='search-bar'>

        <div>

          <p className="fab fa-instagram"></p>
          <p className='divider'>|</p>
          <img className='logo' src={logo} alt='logo'></img>

        </div>

        <div>

          <div className='input'>

            <input type='text' placeholder='Search' onChange={this.handleChange} value={this.state.searchText} />
            <p className={this.state.searchText === '' ? 'fas fa-search' : 'invisible'}></p>

          </div>

        </div>

        <div>

          <p className='right far fa-compass'></p>
          <p className='right far fa-heart'></p>
          <p className='right far fa-user' onClick={() => this.props.setUsername('')}></p>

        </div>

      </div>

    );

  }

}
