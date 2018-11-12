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
      post: [],
      searchTerm: ""
    };
  }

  componentDidMount() {
    this.setState({
      post: dummyData
    });
  }

  addComment = (comment, id) => {
    this.setState(prevState => {
      return {
        post: prevState.post.map(current => {
          if (current.timestamp === id) {
            return {
              ...current,
              comments: [
                ...current.comments,
                {
                  username: "holdenSucks",
                  text: comment,
                  id: Date.now()
                }
              ]
            };
          } else {
            return current;
          }
        })
      };
    });
  };

  addLike = (like, id) => {
    this.setState(prevState => {
      return {
        post: prevState.post.map(current => {
          if (current.timestamp === id) {
            return {
              ...current,
              likes: (like += 1)
            };
          } else {
            return current;
          }
        })
      };
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.post.map(item => (
          <PostContainer
            key={item.timestamp}
            post={item}
            addComment={this.addComment}
            like={this.addLike}
          />
        ))}
      </div>
    );
  }
}

export default App;
