import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInstagram } from "@fortawesome/fontawesome-free-brands";
import {
  faComment,
  faHeart,
  faUser,
  faCompass,
  faTimesCircle
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH, faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(
  faInstagram,
  faComment,
  faHeart,
  faUser,
  faCompass,
  faEllipsisH,
  faSearch,
  faTimesCircle
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: dummyData,
      comment: ""
    };
  }

  addComment = (comment, id) => {
    this.setState(prevState => {
      return {
        post: prevState.post.map(currentPost => {
          if (currentPost.timestamp === id) {
            return {
              ...currentPost,
              comments: [
                ...currentPost.comments,
                {
                  username: "holdenSucks",
                  text: comment,
                  id: Date.now()
                }
              ]
            };
          } else {
            return currentPost;
          }
        })
      };
    });
  };

  render() {
    console.log(this.state.post);
    return (
      <div className="App">
        <SearchBar />
        {this.state.post.map(item => (
          <PostContainer
            key={item.timestamp}
            post={item}
            addComment={this.addComment}
            // handleChange={this.handleChange}
            // comments={this.state.comments}
          />
        ))}
      </div>
    );
  }
}

export default App;
