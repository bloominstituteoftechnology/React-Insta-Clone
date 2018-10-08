import React from 'react';
import PropTypes from 'prop-types';

class PostFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      liked: false
    };
  }

  likePost = () => {
    if (!this.state.liked) {
      this.setState({
        likes: this.state.likes + 1,
        liked: true
      });
      this.style = { color: red };
    } else {
      this.setState({
        likes: this.state.likes - 1,
        liked: false
      });
    }
  };

  toggleLiked = () => {};

  render() {
    return (
      <div className="postFooter">
        <div>
          <i className="far fa-heart" onClick={this.likePost} />
          <i className="far fa-comment" />
        </div>
        <p>{this.state.likes} likes</p>
      </div>
    );
  }
}

PostFooter.propTypes = {
  likes: PropTypes.number.isRequired
};

export default PostFooter;
