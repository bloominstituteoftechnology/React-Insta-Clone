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
      searchText: "",
    };
  }

  hydrateStateWithLocalStorage() {
    if (localStorage.getItem("data")) {
      this.setState({ data: JSON.parse(localStorage.getItem("data")) });
    }
  }

  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.hydrateStateWithLocalStorage();
    } else {
      this.setState({ data: dummyData, filteredPosts: dummyData }, () =>
        localStorage.setItem("data", JSON.stringify(this.state.data))
      );
    }
  }

  updateSearchText = e => {
    this.setState({ searchText: e.target.value }, this.filterPosts);
    // this.filterPosts();
    localStorage.setItem(
      "filteredPosts",
      JSON.stringify(this.state.filteredPosts)
    );
  };

  filterPosts = e => {
    if (this.state.searchText.trim().length > 0) {
      console.log(this.state.searchText.trim().length);
      const filteredPosts = this.state.data.filter(d => {
        if (d.username.includes(this.state.searchText)) {
          return d;
        }
      });
      this.setState({ filteredPosts: filteredPosts });
      // }
    } else {
      this.setState({ filteredPosts: this.state.data });
    }
  };

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
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
  };

  render() {
    const posts =
      this.state.searchText === "" ? this.state.data : this.state.filteredPosts;
    return (
      <div>
        <SearchBar
          searchText={this.state.searchText}
          updateSearchText={this.updateSearchText}
          filterPosts={this.filterPosts}
          logout={this.logout}
        />
        <div className="Posts">
          {posts.map((post, idx) => (
            <PostContainer
              key={idx}
              id={post.id}
              post={post}
              likes={post.likes}
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
