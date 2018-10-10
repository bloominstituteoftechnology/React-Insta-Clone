import React, { Component } from "react";
import logo from "../img/ig-logo.png";
import PostContainer from "./PostContainer";
import SearchBar from "../Search Bar/SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faCompass, faHeart, faUser);

class PostPage extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
            <p className="title">Fake Instagram</p>
          </div>
          <SearchBar
            input={this.props.holder}
            handleInput={this.props.handleInput}
            handleSearch={this.props.handleSearch}
          />
          <div className="icon-container">
            <FontAwesomeIcon icon="compass" className="icon" />
            <FontAwesomeIcon icon="heart" className="icon" />
            <FontAwesomeIcon icon="user" className="icon" />
          </div>
        </header>
        <div className="post-container">
          <PostContainer dummyData={this.props.dummyData} />
        </div>
      </div>
    );
  }
}

export default PostPage;
