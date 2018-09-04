import React, {Component} from 'react';
import logo from './ig.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, fas } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar-container">
        <div className="flex-start">
        <div className="logo-container">
          <img src={logo} alt="Instagram Icon" width="30"/>
        </div>
        <h1 className="title">Instagram</h1>
        </div>
        <input className="input" type="search" placeholder="search" />
         <div className="right-icons">
           <FontAwesomeIcon className="icon" icon={faKey} />
           <FontAwesomeIcon className="icon" icon={faHeart} />
           <FontAwesomeIcon className="icon" icon={faUser} />
         </div>
      </div>
    )
  }
}

export default SearchBar;