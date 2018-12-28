import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {  
  
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
            <form onSubmit={this.props.onSearch}>
              <input type="text" placeholder="Search" onChange={this.props.handleNewSearch} value={this.props.searched}/>
            </form>
          </div>
          <div className="search-bar-icons">
            <div className="search-history search-icon">
            <i className="far fa-compass"></i>
            </div>
            <div className="search-likes search-icon">
              <i className="far fa-heart"></i>
            </div>
            <div className="search-profile search-icon">
              <i className="far fa-user"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchBar;