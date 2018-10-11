import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
    }
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      })
    } else {
      this.setComments();
    }
  }

  componenetWillUnmount() {
    this.setComments();
  }

  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  commentHandler = event => { 
    this.setState({ comment: event.target.value });
  };

  commentSubmit = event => {
    event.preventDefault();
    const NewComment = {text: this.state.comment, username: 'Gemma FP'};
    const comments = this.state.comments.slice();
    comments.push(NewComment);
    this.setState({ comments, comment: '' });
    setTimeout(() => {
      this.setComments();
    }, 500)
  }

  render() {
    return (
      <div className='comment-wrapper'>
        {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        <CommentInput 
        comment={this.state.comment}
        submitHandler={this.commentSubmit}
        commentHandler={this.commentHandler} 
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
};

export default CommentSection;