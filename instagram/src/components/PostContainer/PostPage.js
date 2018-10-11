import React, { Component } from "react";
import dummyData from "../dummy-data";
import logo from "../img/ig-logo.png";
import PostContainer from "./PostContainer";
import SearchBar from "../Search Bar/SearchBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faCompass, faHeart, faUser);

class PostPage extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      holder: ''
    };
  }
  componentDidMount () {
    this.setState({
      dummyData: dummyData
    });
  }
  handleInput = e => {
    this.setState({
      holder: e.target.value
    });
  };

  handleSearch = e => {
    e.preventDefault();
    this.setState({
      dummydata: this.state.dummyData.filter(x => {
        return x.username.includes(this.state.holder);
      })
    });
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="logo-container">
            <img src={logo} className="logo" alt="logo" />
            <p className="title">Fake Instagram</p>
          </div>
          <SearchBar
            input={this.state.holder}
            handleInput={this.handleInput}
            handleSearch={this.handleSearch}
          />
          <div className="icon-container">
            <FontAwesomeIcon icon="compass" className="icon" />
            <FontAwesomeIcon icon="heart" className="icon" />
            <FontAwesomeIcon icon="user" className="icon" />
          </div>
        </header>
        <div className="post-container">
          <PostContainer dummyData={this.state.dummyData} />
        </div>
      </div>
    );
  }
}

export default PostPage;
