import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';

import './PostContainer.css';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.user,
      thumbnail: props.thumbnail,
      image: props.image,
      time: props.time,
      likes: props.likes,
      comments: props.comments
    }
  }

  render() {

    return(
      <div className="post">
        <div className="post__user">
          <img src={this.state.thumbnail} alt="thumbnail"/>
          <p>{this.state.username}</p>
        </div>

        <img className="post__thumbnail"src={this.state.image} alt="thumbnail"/>

        <CommentSection time={this.state.time}
                        likes={this.state.likes}
                        comments={this.state.comments}
                        id={this.state.likes}
                        />
      </div>
    );
  }
}

PostContainer.propTypes = {
  user: PropTypes.string,
  thumbnail: PropTypes.string,
  image: PropTypes.string,
  time: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default PostContainer;
