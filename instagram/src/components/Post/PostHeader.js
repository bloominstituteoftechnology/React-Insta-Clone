import React from 'react';

class PostHeader extends React.Component {
  render() {
    return (
      <div className="postHeader">
        <img src={this.props.headerImage} />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default PostHeader;
