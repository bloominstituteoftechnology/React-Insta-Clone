import React from 'react';
import './SearchBar.css';


  class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="nav-container">
        <div className="nav">
                <div className="navtitle">
                  <img className="logo" src="https://image.ibb.co/jOzNHy/insta.png"/>
              </div>
              <div className="search">
                <form>
                  <input type="text" placeholder="Search"/>
                </form>
              </div>
              <div className="links">
                <img src="https://image.ibb.co/kpcTPd/logo.png"/>
                <img src="https://image.ibb.co/cpSTPd/explorelink.png"/>
                <img src="https://image.ibb.co/iArYqJ/profilelink.png"/>
              </div>
            </div>
      </div>
    );
  }
}

export default SearchBar;
