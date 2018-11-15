import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import parseDate from '../../helperFunctions/helper';
import './CommentSection.css';
import styled from 'styled-components';

import PostStat from './PostStat';
import Comment from './Comment';
import CommentForm from './CommentForm';

const StyledCommentSec = styled.div`
  width: 100%;
  padding: 0  1.2rem;
  font-size: 1.5rem;
`;

const Timestamp = styled.div`
  margin: 1rem 0;
  color: gray;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes : this.props.likes,
      liked: false,
      commentText: '',
    }
  }

  toggleLike(cb) {
    const likes = this.state.liked ? this.state.likes - 1 : this.state.likes + 1;
    cb(this.props.username, this.props.timestamp, likes);
    this.setState(prevState => ({
      likes: likes,
      liked: !prevState.liked
    }));
  }

  handleInputChange(e) {
    this.setState({
      commentText: e.target.value
    })
  }

  handleInputSubmit(e, cb) {
    e.preventDefault();
    cb(this.state.commentText);
    this.setState({
      commentText: ''
    })
  }

  render() {
    return (
      <StyledCommentSec className="post--comments">
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
        <Timestamp className="post--time-stamp">
          {moment(parseDate(this.props.timestamp)).fromNow()}
        </Timestamp>
        <CommentForm
          commentText={this.state.commentText}
          handleInputChange={(e) => this.handleInputChange(e)}
          handleInputSubmit={(e) => this.handleInputSubmit(e, this.props.submitComment)}
        />
      </StyledCommentSec>
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
  submitComment: PropTypes.func.isRequired,
  handleRemoveComment: PropTypes.func.isRequired,
}

export default CommentSection;