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
      searchTerm: "",
      filtered: []
    };
  }

  componentDidMount() {
    this.fillStateWithLocalStorage();
    window.addEventListener("beforeunload", () => this.saveLocalStorage());
    this.saveLocalStorage();
  }

  componentWillUnmount() {
    window.addEventListener("beforeunload", () => this.saveLocalStorage());
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  fillStateWithLocalStorage() {
    for (let key in this.state) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          this.setState({ [key]: value });
        }
      }
    }
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  filterPosts = ev => {
    var updatedList = dummyData;
    updatedList = updatedList.filter(item => {
      return (
        item.username.toLowerCase().search(ev.target.value.toLowerCase()) !== -1
      );
    });
    this.setState({ post: updatedList, searchTerm: ev.target.value });
  };

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
        <SearchBar
          search={this.state.searchTerm}
          handleChange={this.handleChange}
          onChange={this.filterPosts}
        />
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
