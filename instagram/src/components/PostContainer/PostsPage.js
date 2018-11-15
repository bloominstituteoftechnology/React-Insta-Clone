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

  // saveStatetoLocalStorage() {
  //   for (let key in this.state) {
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  //   console.log(this.state.data)
  //   console.log('saving');
  // }

  hydrateStateWithLocalStorage() {
    if (localStorage.getItem("data")) {
      this.setState({ data: JSON.parse(localStorage.getItem("data")) });
    }
    // for (let key in this.state) {
    //   if (localStorage.hasOwnProperty(key)) {
    //     console.log('has', key);
    //     let value = localStorage.getItem(key);

    //     try {
    //       value = JSON.parse(value);
    //       this.setState({ [key]: value });
    //     } catch (e) {
    //       this.setState({ [key]: value });
    //     }
    //   }
    // }
  }

  componentDidMount() {
    if (localStorage.getItem("data")) {
      this.hydrateStateWithLocalStorage();
    } else {
      this.setState({ data: dummyData, filteredPosts: dummyData }, () =>
        localStorage.setItem("data", JSON.stringify(this.state.data))
      );
      // this.setState({ filteredPosts: dummyData });
      // localStorage.setItem(('data', this.state.data));
    }
    // window.addEventListener(
    //   "beforeunload",
    //   this.saveStatetoLocalStorage.bind(this)
    // );
  }

  // componentDidUpdate() {
  //   for (let key in this.state) {
  //     if (localStorage.getItem(key) !== this.state[key]) {
  //       localStorage.setItem(key, JSON.stringify(this.state[key]));
  //     }
  //   }
  // }

  updateSearchText = e => {
    this.setState({ searchText: e.target.value }, this.filterPosts);
    // this.filterPosts();
    localStorage.setItem(
      "filteredPosts",
      JSON.stringify(this.state.filteredPosts)
    );
  };

  filterPosts = e => {
    // if (this.state.searchText === "") {
    //   this.setState({ filteredPosts: this.state.data });
    // } else {
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

  toggleLikes = id => {
    console.log("click");
    console.log(id);
    // console.log(e.target.parentElement);
    const newData = this.state.data.map(d => {
      if (d.id === id) {
        console.log(d);
      }
    });
    //   if (this.state.liked) {
    //   this.setState((prevState) => {
    //     return {likes: prevState.likes + 1}
    //   })
    // } else {
    //   this.setState((prevState => {
    //     return {likes: prevState.likes -1}
    //   }))
    // }
    //   this.setState({ liked: !this.setState.liked})
  };
  // increaseLikes = e => {
  //   console.log(e);
  // const newData = this.state.data.map(d => {
  //   if (d.id === id) {
  //     console.log("found");
  //     d.likes++;
  //     return d;
  //   } else return d;
  // });
  // this.setState({ data: newData });
  // console.log(this.state.data);
  // };

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
              toggleLikes={this.toggleLikes}
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
