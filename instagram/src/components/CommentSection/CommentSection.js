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

  toggleLike() {
    this.setState({
      likes: this.state.liked ? this.state.likes - 1 : this.state.likes +1,
      liked: !this.state.liked
    });
  }

  render() {
    return (
      <div className="post--comments">
        <PostStat
          likes={this.state.likes}
          liked={this.state.liked}
          toggleLike={() => this.toggleLike()}
        />
        {
          this.props.comments.map(
           (comment,i) => (
             <Comment
              key={i + this.props.username}
              comment={comment} />
        ))}
        <div className="post--time-stamp">
          {moment(parseDate(this.props.timestamp)).fromNow()}
        </div>
        <CommentForm
          commentText={this.props.commentText}
          username={this.props.username}
          timestamp={this.props.timestamp}
          onCommentFormChange={(e, u, t) => this.props.onCommentFormChange(e, u, t)}
          onCommentFormSubmit={(e, u, t) => this.props.onCommentFormSubmit(e, u, t)}
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
  timestamp: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired, 
  onCommentFormChange: PropTypes.func.isRequired,
  onCommentFormSubmit: PropTypes.func.isRequired,
}

export default CommentSection;