import React from 'react';

class PostImage extends React.Component {
  render() {
    return <img className="postImage" src={this.props.image} />;
  }
}

export default PostImage;
