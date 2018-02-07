import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData, 
      newComment: '',
    };
  } 
  
  updateComment = (event) => {
    this.setState({
      posts: this.state.posts,
      newComment: event.target.value,
    });
  };

  addComment = (event) => {
    event.preventDefault();
    const index = Array.from(event.target.parent.children).indexOf(event.target);
    const posts = this.state.posts;
    this.setState({
      posts: [...posts.slice(0, index), {
          username: this.state.posts[index].username,
          thumbnailUrl: this.state.posts[index].thumbnailUrl,
          imageUrl: this.state.posts[index].imageUrl,
          likes: this.state.posts[index].likes,
          timestamp: this.state.posts[index].timestamp,
          comments: [...this.state.posts.comments,
            {
              username: "algorithmsrock",
              text: `${this.state.newComment}`,
            }
          ],
        }, ...posts.slice(index, posts.length)],
      newComment: '',
    });
    document.getElementById(`new-comment-${index}`).value = '';
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Russell and Eileen's Instagram Clone</h1>
          <SearchBar />
        </header>
        <p className="App-intro">
          Written in React.js.
        </p>
        <div>
          {this.state.posts.map((post, i) => {
            return (
              <div>
                <PostContainer key={i} username={post.username} thumbnailUrl={post.thumbnailUrl} 
                  imageUrl={post.imageUrl} likes={post.likes} timestamp={post.timestamp} 
                    comments={JSON.stringify(post.comments)} />
                <form onSubmit={this.addComment}>
                  <input id={`new-comment-${i}`} type="text" placeholder="Add a comment..." onChange={this.updateComment} />
                </form>
              </div>);
            })}
        </div>
      </div>
    );
  }
}

export default App;
