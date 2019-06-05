import React from 'react';
import './SearchBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCompass, faHeart, faUser} from '@fortawesome/free-regular-svg-icons';
import instaFont from "./instaFont.jpg";

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
          <FontAwesomeIcon icon={faInstagram} className="instalogo" />
          <div className="vertical_line" />
          <img className="instaFont" src={instaFont} />
        </div>
        <div className="input">
        <input className="search-input"
          type="text"
          placeholder="Search"
          onChange={this.props.searchPostHandler}/>
        </div>
        <div className="search-component-navigation">
          <FontAwesomeIcon icon={faCompass} className="topCompass" /> 
          <FontAwesomeIcon icon={faHeart} className="topHeart" />
          <FontAwesomeIcon icon={faUser} className="topUser" />
        </div>
          <FontAwesomeIcon icon="fas fa-ellipsis-h" />
      </div>
    )
  }
}

export default SearchComponent;