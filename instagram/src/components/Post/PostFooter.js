import React from 'react';
import PropTypes from 'prop-types';

class PostFooter extends React.Component {
  render() {
    return (
      <div className="postFooter">
        <div>
          <i className="far fa-heart" />
          <i className="far fa-comment" />
        </div>
        <p>{this.props.likes} likes</p>
      </div>
    );
  }
}

PostFooter.propTypes = {
  likes: PropTypes.number.isRequired
};

export default PostFooter;
