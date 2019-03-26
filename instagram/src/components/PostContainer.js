import React from 'react';
import './Postcontainer.css';

import CommentSection from './CommentSection';
import heart from '../assets/heart.png';
import heart_on from '../assets/heart_on.png';
import comment from '../assets/comment.png';
import send from '../assets/send.png';

import PropTypes from 'prop-types';

class PostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes
    };
  }

  onButtonClick = () => {
    if (this.props.likes < this.state.likes) {
      return this.setState({
        likes: this.state.likes - 1
      });
    }
    return this.setState({
      likes: this.state.likes + 1
    });
  };
  render() {
    return (
      <div className="PostContainer">
        <div className="container post">
          <div className="post-header">
            <div className="thumbnail">
              <img src={this.props.thumbnail} alt="thumbnail" />
            </div>
            <h6>{this.props.username}</h6>
          </div>
          <div className="post-image">
            <img src={this.props.img} alt="" />
          </div>
          <div className="ui-controls">
            <button onClick={this.onButtonClick}>
              <img
                src={`${
                  this.props.likes === this.state.likes ? heart : heart_on
                }`}
                alt=""
                className="heart"
              />
            </button>
            <button>
              <img src={comment} alt="" className="comment" />
            </button>
            <button>
              <img src={send} alt="" className="send" />
            </button>
          </div>
          <p className="likes">{this.state.likes} likes</p>
          <CommentSection
            comments={this.props.comments}
            date={this.props.date}
            onChange={this.props.onChange}
            onSubmit={this.props.onSubmit}
            id={this.props.id}
            text={this.props.text}
          />
        </div>
      </div>
    );
  }
}

PostContainer.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string,
  likes: PropTypes.number,
  comments: PropTypes.string,
  newComment: PropTypes.string,
  onChange: PropTypes.func
};

export default PostContainer;
