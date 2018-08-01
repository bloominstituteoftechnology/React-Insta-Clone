import React from 'react';
import './comment-section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import { faHeart as faSHeart } from '@fortawesome/free-solid-svg-icons/faHeart'
import { faComment } from '@fortawesome/free-regular-svg-icons'
import { faComment as faSComment } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment.js';

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      likes: props.likes,
      input: '',
      shouldAddLike: false,
      shouldAddComment: false
    }
  }

  handleChange = e => this.setState({ input: e.target.value });

  addLike = () => {
    this.setState(prevState => {
      if (!this.state.shouldAddLike) {
        return {
          likes: prevState.likes + 1,
          shouldAddLike: !prevState.shouldAddLike
        };
      } else {
        return {
          likes: prevState.likes - 1,
          shouldAddLike: !prevState.shouldAddLike
        };
      }
    })
  }

  shouldAddComment = () => {
    this.setState(prevState => {
      return {shouldAddComment: !prevState.shouldAddComment};
    })
  }

  addComment = (e) => {
    let comments = this.state.comments.slice();
    comments.push({
      username: 'anonymous',
      text: this.state.input,
    });
    this.setState({ comments: comments, input: '' });
    e.preventDefault();
  }

  render() {
    return (
      <div className="comment-section">
        <div className="comment-section__icons-likes">
          <div className="comment-section__icons">
            <div className="comment-section__icon--like">
              <FontAwesomeIcon onClick={this.addLike} icon={this.state.shouldAddLike ? faSHeart : faHeart} />
            </div>
            <div className="comment-section__icon--comment">
              <FontAwesomeIcon onClick={this.shouldAddComment} icon={this.state.shouldAddComment ? faSComment : faComment} />
            </div>
          </div>
          <div className="comment-section__likes">
            <p><strong>{this.state.likes} likes</strong></p>
          </div>
        </div>
        {this.state.comments.map((comment, index) => <Comment key={index} username={comment.username} text={comment.text} />)}
        <div className="comment-section__timestamp">
          <p><strong>{this.state.timestamp}</strong></p>
        </div>
        {this.state.shouldAddComment ? 
          <form className="comment-section__input-container" onSubmit={this.addComment}>
            <input 
              onChange={this.handleChange}
              placeholder="Add comment..." 
              value={this.state.input}
              type="text" 
              className="comment-section__input" 
            />
            <span>...</span>
          </form> 
        : null}
      </div>
    );
  }
}

export default CommentSectionContainer;