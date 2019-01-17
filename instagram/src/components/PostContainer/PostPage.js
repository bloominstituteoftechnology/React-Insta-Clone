/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import SearchBarContainer from "../SearchBar/SearchBarContainer";
import "../../App.css";
import PostContainer from "./PostContainer";

class PostPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <SearchBarContainer
          handleChange={this.props.handleChange}
          inputSearch={this.props.inputSearch}
        />
        <div className="post-container-container">
          {this.props.searchData.map((dataOnMap, index) => {
            return (
              <PostContainer
                comments={dataOnMap.comments}
                data={dataOnMap}
                username={dataOnMap.username}
                addComment={this.props.addComment}
                inputText={this.props.inputText}
                handleChange={this.props.handleChange}
                addLike={this.props.addLike[index]}
                searchData={this.props.searchData}
                handleClick={this.props.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostPage;
