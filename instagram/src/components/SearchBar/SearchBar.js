import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <h2 className="searchbar_brand">
          {" "}
          <i className="fas fa-camera fa-1x" /> |{" "}
          <span className="searchbar_brand_text">Instant Grannies</span>
        </h2>
        <input
          className="searchbar_input"
          type="text"
          placeholder="Search..."
          onChange={this.props.handleChange}
          onSubmit={this.props.searchPost}
        />
        <div className="searchbar_icons">
          <i className="fa fa-compass fa-2x" />
          <i className="fab fa-gratipay fa-2x" />
          <i className="fa fa-user fa-2x" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
