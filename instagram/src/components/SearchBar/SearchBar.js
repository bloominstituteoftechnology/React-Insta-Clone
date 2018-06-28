import React from "react";
import "./SearchBar.css";
import styled from "styled-components";
import { InstaTitle } from "../Styles/Styles";
import PostPage from "../PostContainer/PostsPage";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div className="search-bar">
        <InstaTitle>Instagram </InstaTitle>
        <form onSubmit={this.props.startSearch}>
          <input
            onChange={this.props.newSearch}
            value={this.props.input}
            className="fa"
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
