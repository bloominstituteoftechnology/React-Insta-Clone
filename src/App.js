import React, { Component } from "react";
import "./App.css";
import Header from "./instagram/SearchBar/Header";
import PostContainer from "./instagram/PostContainer/PostContainer";
import Post from "./instagram/PostContainer/Post";
import Comments from "./instagram/CommentSection/Comments";
import dummyData from "./dummy-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.nickname.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="App">
        <Header
          searchTerm={this.state.searchTerm}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dummyData: [],
//       search: ""
//     };
//   }
//   componentDidMount() {
//     this.setState({ dummyData: dummyData });
//   }

//   handleSearch = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   };

//   render() {
//     let data = this.state.dummyData.filter(
//       data => data.nickname.indexOf(this.state.search) !== -1
//     );

//     return (
//       <div className="App">
//         <Header input={this.state.search} handleSearch={this.handleSearch} />
//         {data.map((data, i) => (
//           <Post key={i} data={data} />
//         ))}
//         <Comments data={data} />
//       </div>
//     );
//   }
// }
// export default App;
