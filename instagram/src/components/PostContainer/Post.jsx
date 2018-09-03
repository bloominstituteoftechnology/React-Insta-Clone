import React from 'react';

class Post extends React.Component {
  state = {
    likes: this.props.post.likes
  }

  // TODO: some logic for adding likes
  like = () => {};

  render() {
    return (
      <div className="post-wrapper">
        <div className="post-header-wrapper">
          <img src={this.props.post.thumbnailUrl} alt={"Profile thumb."} />
          <div className="username">{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} alt={"post"} />
        <p>{this.state.likes} likes</p>
      </div>
    );
  }
};

export default Post;