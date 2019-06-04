import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

class SearchComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchInput: '',
    }
  }

  render() {
    return (
      <div className="search-component-container">
        <div className="search-component-instagram-logo">
        <FontAwesomeIcon icon={faInstagram} />
          {/* <img className="icons instagram_icon" alt="instagram icon" src="./../img/instagram-logo.png" /> */}
          <div className="vertical_line"></div>
          {/* <img className="instagram_logo" alt="instagram logo" src="./../img/instagram.png" /> */}
        </div>
        <div className="input">
        <input className="search-input"
          type="text"
          placeholder="Search"
          onChange={this.props.searchPostHandler}/>
        </div>
        <div className="search-component-navigation">
          <img className="icons" alt="browse" src="./../img/compass.png" />
          <img className="icons" alt="likes" src="./../img/heart.png" />
          <img className="icons" alt="profile" src="./../img/profile.png" />
        </div>

      </div>
    )
  }
}

export default SearchComponent;