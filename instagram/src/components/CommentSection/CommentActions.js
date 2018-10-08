import React, { Component } from 'react';

import PropTypes from 'prop-types';

class CommentActions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  handleMouseEnter = () => {
    this.setState({ hover: true })
  }

  handleMouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    return (
      <div className="post-comment-actions">
        <i
          style={{ display: 'inline-block', cursor: 'pointer' }}
          className={this.props.liked || this.state.hover ? 'fas fa-heart' : 'far fa-heart'}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.props.onClick} />
        <i 
          className="far fa-comment" />
      </div>
    );
  }
}

CommentActions.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
}

export default CommentActions;
