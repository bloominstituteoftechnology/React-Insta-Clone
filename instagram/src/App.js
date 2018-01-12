import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      internal: [],
      likedPosts: {},
    }

    this.updateLike.bind(this);
  }

  componentDidMount() {
      const data = [];
      const internal = [];
      dummyData.forEach(postData => {
        data.push(postData);
        internal.push(postData);
      });

      const likedPosts = {};
      dummyData.forEach(postData => {
        const emptyLikedPost = {};
        const key = postData.timestamp;
        likedPosts[key] = false;
      })
      console.log('componentDidMount');

      this.setState({
        data,
        internal,
        likedPosts,
      });
  }

  filterResults(event) {
    const query = event.target.value;
    const data = this.state.internal.slice(0);
    if (query) {
      this.setState({
        data: data.filter((post) => post.username.includes(query)),
      });
    } else {
      this.setState({
        data,
      });
    }
  }

  updateLike(timestamp) {
    const likedPosts = this.state.likedPosts;
    likedPosts[timestamp] = !likedPosts[timestamp];

    this.setState( { likedPosts } );
  }

  render() {
    // console.log(this.state.likedPosts)
    return (
      <div className="App">
        <SearchBar filterResults={this.filterResults.bind(this)}/>
        <div className="PostsContainer">
          {this.state.data.map((post, i) => {
            return (
              <PostContainer
                key={i}
                postData={post}
                isLiked={this.state.likedPosts[post.timestamp]}
                likePost={this.updateLike.bind(this)}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
