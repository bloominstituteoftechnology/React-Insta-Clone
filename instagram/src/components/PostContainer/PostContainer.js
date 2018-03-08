import React, { Component } from 'react';
// import CommentSection from './components/CommentSection/CommentSection'


class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>{this.props.posts.map((post, index) => {
        return (
          <div>
            <h2 key={post.username + index}>{post.username}</h2>
            <img src={post.imageUrl} />
            <div>{post.likes}</div>
            {/* <CommentSection comments= {post.comments} /> */}
            <div>{post.timestamp}</div>
          </div>
        );
      })}
      </div>
    );
  }
}

export default PostContainer