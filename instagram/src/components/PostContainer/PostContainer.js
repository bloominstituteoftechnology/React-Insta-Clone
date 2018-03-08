import React, { Component } from 'react';
import CommentSection from '../CommentSection/CommentSection'


class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>{this.props.posts.map( (post, index) => {
        return (
          <div key={post.username + index}>
            <div>
              <img src={post.thumbnailUrl} alt=" " />
              <h5>{post.username}</h5>
            </div>
            <img src={post.imageUrl} alt=" " />
            <div>
              <i className="far fa-heart fa-lg"></i>
              <i className="far fa-comment"></i>
            </div>
            <div>{post.likes} likes</div>
            <CommentSection comments={post.comments} />
            <div>{post.timestamp}</div>
          </div>
        );
      })}
      </div>
    );
  }
}

export default PostContainer