import React from 'react';
import PropTypes from 'prop-types';

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

PostHeader.propTypes = {
  headerImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default PostHeader;
