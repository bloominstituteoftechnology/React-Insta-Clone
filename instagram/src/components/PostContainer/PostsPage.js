import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import PostContainer from "../../components/PostContainer/PostContainer";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      searchInput: ""
    };
  }
  liked = (e, i) => {
    let array = this.state.posts;
    array[i].likes += 1;
    this.setState({
      posts: array
    });
  };
  sort = text => {
    let array = this.state.posts;
    let newArray = array.filter(e => {
      return e.username.includes(text);
    });
    this.setState({
      search: newArray
    });
  };
  search = e => {
    this.setState({
      searchInput: e.target.value
    });
    this.sort(this.state.searchInput);
  };
  componentDidMount() {
    this.setState({
      posts: dummyData.map(e => {
        return {
          username: e.username,
          thumbnailUrl: e.thumbnailUrl,
          imageUrl: e.imageUrl,
          likes: e.likes,
          timestamp: e.timestamp
        };
      }),
      search: this.state.posts,
      comments: dummyData.map(e => {
        return e.comments;
      })
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="brand">
            <span className="brand__logo">
              <i className="fas fa-camera-retro" />
            </span>
            <span className="brand__line">│</span>
            <span className="brand__title">Instaclone</span>
          </div>
          <SearchBar
            search={this.search}
            searchInput={this.state.searchInput}
          />
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </header>
        <PostContainer
          like={this.liked}
          posts={this.state.posts}
          searchInput={this.state.searchInput}
          comments={this.state.comments}
        />
      </div>
    );
  }
}

export default PostsPage;
