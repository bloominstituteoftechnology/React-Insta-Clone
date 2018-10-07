import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  render() {
    if (!this.state.posts.length) {
      return <h2>Loading ...</h2>;
    }
 
    return (
      <div className="App">
        <div className="container">
          <h1>Insta-message</h1>

            {this.state.posts.map(post => {
              return (
              <div key={post.timestamp} className="post">
                <p>
                  <img className="post-thumb" src={post.thumbnailUrl} alt="thumbnail" />
                  {post.username}
                </p>
                <img className="post-img" src={post.imageUrl} alt="image" />
                <div className='like-symbol'>
                  <span className="far fa-heart"></span>
                  <span className="far fa-comment fa-flip-horizontal"></span>
                </div>
                <div className='like-count'>
                  {post.likes} likes
                </div>
              </div>
              );
            })}
          
        </div>
      </div>
    )
    ;
  }
}

export default App;
