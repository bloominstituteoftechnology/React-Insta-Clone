import React from 'react';
import PropTypes from 'prop-types';

import heart from '../../img/insta-heart.png';
import liked from '../../img/insta-heart-liked.png';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    }
  }

  likeComment = event => {
    this.setState((prevState) => {
          return {liked: !prevState.liked};
      });
  }

  render() {
    let likedIcon;

    if(this.state.liked) {
      likedIcon = liked;
    } else {
      likedIcon = heart;
    }

    return(
      <p><strong>{this.props.user}</strong> {this.props.text} <span className="comment-like"><img src={likedIcon} onClick={this.likeComment} alt="insta-heart" /></span></p>
    );
  }
}

Comment.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string
}

export default Comment;
