import React from 'react';
import './comment-section.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Comment from './Comment.js';

class CommentSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      timestamp: props.timestamp,
      likes: props.likes,
      input: ''
    }
  }

  handleChange = e => this.setState({ input: e.target.value });

  addLike = () => {
    this.setState(prevState => {
      return {likes: prevState.likes + 1};
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
              <FontAwesomeIcon onClick={this.addLike} icon={faHeart} />
            </div>
            <div className="comment-section__icon--comment">
              <FontAwesomeIcon icon={faComment} />
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
      </div>
    );
  }
}

export default CommentSectionContainer;