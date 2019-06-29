import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import CommentHeader from './CommentHeader';
import './CommentSection.css';
import PropTypes from 'prop-types';
// import { renderComponent } from 'recompose';

class CommentSection extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        comments: props.comments,
        timestamp: props.timestamp,
        likes: props.likes,
        newComment: '',
        redHeart: false
    };
}

changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

addNewComment = event => {
    event.preventDefault();
      this.setState({
        comments: [
          ...this.state.comments,
          { comment : this.state.newComment, 
            id: Date.now(), 
            text: this.state.newComment, 
            username: 'username',
        }],
        newComment: ''
      })
  };

addLike = () => {
    this.setState({
        ...this.state.likes,
        likes: this.state.likes + 1,
    })
};


render() {
    return (
    <div className='comment-container'>

        <div className='comment-header'>
        <CommentHeader
        likes={this.state.likes}
        addLike={this.addLike}
        />
        </div>

        {this.state.comments.map((comment, index) =>
        <Comment
        key={index}
        comment={comment}
        />)}

        <div className='time-stamp'>
        {this.state.timestamp}
        </div>

        <CommentInput
        addNewComment={this.addNewComment}
        changeHandler={this.changeHandler}
        newComment={this.state.newComment}
        />
    </div>
    );
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            username: PropTypes.string,
        })
    )
}

export default CommentSection;