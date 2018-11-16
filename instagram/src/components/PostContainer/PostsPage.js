import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "./PostContainer";
import * as Icon from "react-feather";

const PostsPage = props => {
  return (
    <div className="App">
      <header className="App-header">
        <Icon.Instagram className="logo" />
        <img
          className="logo__text"
          src={require("../../images/logo-instagram.png")}
          alt="instagram logo"
        />
        <SearchBar
          className="search-bar"
          searchText={props.searchText}
          handleSearch={props.handleSearch}
        />
        <Icon.Compass className="link-compass" />
        <Icon.Heart className="link-heart" />
        <Icon.User className="link-user" />
      </header>
      {props.filtered.map(post => (
        <PostContainer
          key={post.timestamp}
          post={post}
          handleLikesProp={props.handleLikes}
          completedProp={props.completed}
        />
      ))}
    </div>
  );
};

export default PostsPage;
