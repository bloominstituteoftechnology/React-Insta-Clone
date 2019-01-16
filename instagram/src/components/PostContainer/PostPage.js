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
        <SearchBarContainer />
        <div className="post-container-container">
          {this.props.data.map(dataOnMap => {
            return (
              <PostContainer
                comments={dataOnMap.comments}
                data={dataOnMap}
                username={dataOnMap.username}
                addComment={this.props.addComment}
                inputText={this.props.inputText}
                handleChange={this.props.handleChange}
                addLike={this.props.addLike}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostPage;
