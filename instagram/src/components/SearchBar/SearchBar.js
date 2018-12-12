import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../img/insta-logo.png';
import title from '../../img/insta-title.png';

import compass from '../../img/insta-compass.png';
import heart from '../../img/insta-heart.png';
import profile from '../../img/insta-profile.png';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.data.map(obj => obj.username),
      prevState: this.props.data,
      newState: [],
    }
  }

  render() {
    return(
      <div className="search-bar">
        <div className="search-bar__logo">
          <img src={logo} alt="instagram logo" />
          <p>|</p>
          <img src={title} alt="Instagram" />
        </div>

        <input type="text" placeholder={"search..."} />

        <div className="icons">
          <img src={compass} alt="Instagram" />
          <img src={heart} alt="Instagram" />
          <img src={profile} alt="Instagram" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
