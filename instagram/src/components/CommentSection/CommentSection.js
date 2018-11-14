import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import parseDate from '../../helperFunctions/helper';
import './CommentSection.css';

import PostStat from './PostStat';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes : this.props.likes,
      liked: false,
    }
  }

  toggleLike(cb) {
    const likes = this.state.liked ? this.state.likes - 1 : this.state.likes + 1;
    cb(this.props.username, this.props.timestamp, likes);
    this.setState({
      likes: likes,
      liked: !this.state.liked
    });
  }

  render() {
    return (
      <div className="post--comments">
        <PostStat
          likes={this.state.likes}
          liked={this.state.liked}
          toggleLike={() => this.toggleLike(this.props.updateLikes)}
        />
        {
          this.props.comments.map(
           (comment,i) => (
             <Comment
              key={i + this.props.username}
              comment={comment}
              handleRemoveComment={() => this.props.handleRemoveComment(i)}
            />
        ))}
        <div className="post--time-stamp">
          {moment(parseDate(this.props.timestamp)).fromNow()}
        </div>
        <CommentForm
          commentText={this.props.commentText}
          onCommentFormChange={(e) => this.props.onCommentFormChange(e)}
          onCommentFormSubmit={(e) => this.props.onCommentFormSubmit(e)}
        />
      </div>
    );
  }
} 

CommentSection.propTypes = {
  username: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })).isRequired,
  likes: PropTypes.number,
  liked: PropTypes.bool,
  timestamp: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired, 
  onCommentFormChange: PropTypes.func.isRequired,
  onCommentFormSubmit: PropTypes.func.isRequired,
  handleRemoveComment: PropTypes.func.isRequired,
}

export default CommentSection;