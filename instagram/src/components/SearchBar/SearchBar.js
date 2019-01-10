import React from 'react';
import './SearchBar.css';
import Input from '../StyledComponents/Input';
import Icon from '../StyledComponents/Icon';



const SearchBar = (props) => {
  return (
    <div className="header">
      <div className="header-bar">
        <div className="search-logos">
          <div className="insta-logo">
            <i className="fab fa-instagram"></i>
          </div>
          <div className="spacer-line"></div>
          <div className="insta-logo-text">
            <img src="https://i.imgur.com/wOWyaBc.png" alt="Instagram Text Logo" />
          </div>
        </div>
        <div className="search-bar-input">
          <form onSubmit={props.onSearch}>
            <Input type="text" placeholder="Search" onChange={props.handleNewSearch} value={props.searched}/>
          </form>
        </div>
        <div className="search-bar-icons">
          <Icon className="search-history search-icon">
          <i className="far fa-compass"></i>
          </Icon>
          <Icon className="search-likes search-icon">
            <i className="far fa-heart"></i>
          </Icon>
          <Icon className="search-profile search-icon">
            <i className="far fa-user"></i>
          </Icon>
          <Icon className="search-signout search-icon" onClick={props.onSignout}>
            <i className="fas fa-sign-out-alt"></i>
          </Icon>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;