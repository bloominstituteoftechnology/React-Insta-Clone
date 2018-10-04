import React from 'react';

class PostFooter extends React.Component {
  render() {
    return (
      <div className="postFooter">
        <div>
          <i class="far fa-heart" />
          <i class="far fa-comment" />
        </div>
        <p>{this.props.likes} likes</p>
      </div>
    );
  }
}

export default PostFooter;
