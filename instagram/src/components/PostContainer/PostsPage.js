import React from "react";
import "./PostContainer.css";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

class PostsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      comments: [],
      filteredPosts: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: dummyData,
        comments: dummyData.map(data => data.comments)
      });
    }, 800);
  }

  searchPostHandler = e => {
    e.preventDefault();
    const posts = this.state.data.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    console.log(posts);
    this.setState({ filteredPosts: posts });
  };

  render() {
    // console.log(this.state.comments);
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar searchPost={this.searchPostHandler} />
        </header>
        <PostContainer
          key={Math.random()}
          // data={this.state.data}
          data={
            // this.state.filteredPosts
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.data
          }
        />
      </div>
    );
  }
}

export default PostsPage;
