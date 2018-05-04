import React, { Component } from 'react';
import './SearchBar.css';
import FaInstagram from 'react-icons/lib/fa/instagram';


class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'Search',
      submitTerm: '',
      update: '',
    }
  }
  render() {
    return (
      <nav className="search-bar navbar navbar-light justify-content-between my-4 pb-4">
        <a className="navbar-brand"><FaInstagram /> | <img src="./assets/instaword.png" alt="instagram" width="120" height="40" /></a>
        <form className="form-inline">
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
        </form>
        <div className="social-media">
          <img src="./assets/discover.png" alt="discover" height="30" width="30" />
          <img src="./assets/like.png" alt="like" height="30" width="30" />
          <img src="./assets/profile.png" alt="profile" height="30" width="30" />
        </div>
      </nav>
    );
  }
}

export default SearchBar;
