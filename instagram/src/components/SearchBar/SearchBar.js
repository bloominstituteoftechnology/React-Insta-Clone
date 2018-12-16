import React from "react";
import iglogo from "./iglogo.png";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { search: "" };

  submitSearch = event => {
    console.log("on submit");
    event.preventDefault();
    this.props.searchHandler(this.state.search);
  };

  render() {
    return (
      <div className="search-bar-wrapper">
        <div className="image-wrapper">
          <div className="social">
            <i className="fab fa-instagram" />
          </div>
          <img alt="instagram logo" src={iglogo} className="logo-image" />
        </div>
        <form onSubmit={this.submitSearch}>
          <input
            className="search"
            type="text"
            value={this.state.search}
            placeholder="Search"
            onChange={e => this.setState({ search: e.target.value })}
          />
        </form>
        <div className="social-wrapper">
          <div className="social">
            <i className="far fa-compass" />
          </div>
          <div className="social">
            <i className="far fa-heart" />
          </div>
          <div className="social">
            <i className="far fa-user-circle" />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
