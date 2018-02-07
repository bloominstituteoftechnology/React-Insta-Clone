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
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    const posts = this.state.posts;
    this.setState({
      posts: [...posts.slice(0, index), {
          username: posts[index].username,
          thumbnailUrl: posts[index].thumbnailUrl,
          imageUrl: posts[index].imageUrl,
          likes: posts[index].likes,
          timestamp: posts[index].timestamp,
          comments: [...posts[index].comments,
            {
              username: "algorithmsrock",
              text: `${this.state.newComment}`,
            }
          ],
        }, ...posts.slice(index + 1, posts.length)],
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
                <form key={i} onSubmit={this.addComment}>
                  <input key={i} className="new-comment" id={`new-comment-${i}`} type="text"
                    placeholder="Add a comment..." onChange={this.updateComment} />
                </form>
              </div>);
            })}
        </div>
      </div>
    );
  }
}

export default App;
