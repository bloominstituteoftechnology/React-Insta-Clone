import React from 'react';
import PropTypes from 'prop-types';
import './comment-section.css';
import Comments from './comments';
import CommentInput from './comment-input';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      comments: props.comments,
      comment: '',
      timestamp: props.timestamp
    };
  }

  incrementLikes = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  }

  addComment = event => {
    let newComment = {
      username: 'evali',
      text: this.state.comment
    }
    this.setState({
      comments: [...this.state.comments, newComment],
      comment: ''
    })
    event.preventDefault();
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  render() {
    return(
      <div className='comment-container'>
        <div className='icons'>
          <div className='sprite-post' id='heart' onClick={this.incrementLikes} />
          <div className='sprite-post' id='bubble' />
        </div>
        <div className='like-comment'>
          <p>{this.state.likes} likes</p>
        </div>
        <div className='data-comments'>
          {this.state.comments.map(comment => <Comments key={comment.username} comment={comment} />)}
        </div>
        <div className='time-stamp'>
          <p>{this.state.timestamp}</p>
        </div>
        <hr />
        <CommentInput handleInput={this.handleInput} addComment={this.addComment} commentValue={this.state.comment} />
      </div>
    );
  }


};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string, 
      text: PropTypes.string 
    })
  )
};

export default CommentSection;