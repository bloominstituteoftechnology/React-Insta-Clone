import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import PropTypes from "prop-types";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredPosts: [],
      searchText: ""
    };
  }

  saveStatetoLocalStorage() {
    console.log("saving");
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  hydrateStateWithLocalStorage() {
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

  componentDidMount() {
    this.setState({ data: dummyData });
    this.setState({ filteredPosts: dummyData });
    window.addEventListener(
      "beforeunload",
      this.saveStatetoLocalStorage.bind(this)
    );
    // this.hydrateStateWithLocalStorage();
  }

  componentDidUpdate() {
    for (let key in this.state) {
      if (localStorage.getItem(key) !== this.state[key]) {
        localStorage.setItem(key, JSON.stringify(this.state[key]));
      }
    }
  }

  updateSearchText = e => {
    this.setState({ searchText: e.target.value });
    this.filterPosts();
  };

  filterPosts() {
    if (this.state.searchText === "") {
      this.setState({ filteredPosts: this.state.data });
    } else {
      const filteredPosts = this.state.data.filter(d => {
        if (d.username.includes(this.state.searchText)) {
          return d;
        }
      });
      this.setState({ filteredPosts: filteredPosts });
    }
  }

  increaseLikes = id => {
    const newData = this.state.data.map(d => {
      if (d.id === id) {
        d.likes++;
        return d;
      } else return d;
    });
    this.setState({ data: newData });
  };

  logout = e => {
    console.log("click");
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

  render() {
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          updateSearchText={this.updateSearchText}
          filterPosts={this.filterPosts}
          logout={this.logout}
        />
        <div className="Posts">
          {this.state.filteredPosts.map((post, idx) => (
            <PostContainer
              key={idx}
              id={post.id}
              post={post}
              username={this.state.username}
              increaseLikes={this.increaseLikes}
            />
          ))}
        </div>
      </div>
    );
  }
}

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  ),
  searchText: PropTypes.string,
  updateSearchText: PropTypes.func,
  logout: PropTypes.func,
  username: PropTypes.string,
  increaseLikes: PropTypes.func
};

export default PostsPage;
