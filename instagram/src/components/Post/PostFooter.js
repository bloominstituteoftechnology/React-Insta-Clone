import React from 'react';
import PropTypes from 'prop-types';
import { PFooter } from './../Styled/styled';

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
    } else {
      this.setState({
        likes: this.state.likes - 1,
        liked: false
      });
    }
  };

  toggleLiked = () => {};

  render() {
    let liked = 'liked fas';
    if (!this.state.liked) {
      liked = 'far';
    }
    return (
      <PFooter>
        <div>
          <i className={`${liked} fa-heart`} onClick={this.likePost} />
          <i className="far fa-comment" />
        </div>
        <p>{this.state.likes} likes</p>
      </PFooter>
    );
  }
}

PostFooter.propTypes = {
  likes: PropTypes.number.isRequired
};

export default PostFooter;
