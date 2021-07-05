import React from "react";
import "./SearchBar.css";
class SearchBar extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      dropdownOpen: false
    };
  }

  handleLogoutDropdown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <div className="search-bar-container">
        <div className="search-bar">
          <div className="search-logo">
            <i className="fab fa-instagram" />
            <span className="search-line" />
            <h1>Instagram</h1>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Search"
              onChange={this.props.handleSearchInput}
              value={this.props.filterTarget}
              name="filterTarget"
            />
          </form>
          <div className="search-icons">
            <i className="far fa-compass" />
            <i className="far fa-heart" />
            <i className="far fa-user" onClick={this.handleLogoutDropdown} />
            <div
              className="log-out"
              style={
                this.state.dropdownOpen
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <h3 onClick={this.handleClearLocalStorage}>Log out</h3>
              <h3 onClick={() => this.setState({ dropdownOpen: false })}>
                Cancel
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
