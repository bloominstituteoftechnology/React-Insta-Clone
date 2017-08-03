/* eslint-disable no-unused-vars */

// TODO: Truncate comments on next line, add commenting and liking functionality.
// TODO: Double clicking photo counts as like.

import React, { Component } from 'react';
import Data from './application-data';
import Comments from './Comments';
import Social from './Social';
import './Post.css';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      comments: [],
    }
  }

  // addToState(post) {
  //   this.setState({
  //     likes: {post.likes},
  //     comments: {post.comments},
  //   });
  // }

  render() {
    return (
      <div className="parentContainer">
        {
          Data.map((post, i) => {
            return (
              <div key={i} className="post">

                <header>
                  <img title={post.username} alt={post.username} src={post.thumbnailUrl} />
                  <p>{post.username}</p>
                </header>

                <img title={post.comments[0].text} alt={post.comments[0].text} className="main" src={post.imageUrl} />

                <footer>
                  <Social likes={post.likes} />

                  <Comments comments={post.comments} time={post.timestamp} />

                </footer>

              </div>
            )
          })
        }
      </div>
    )
  }

}

export default Post;
