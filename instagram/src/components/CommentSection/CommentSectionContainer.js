import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      user: '',
      comment: '',
    }
  }

  componentDidMount() {
    setTimeout(() => {this.setState({comments: this.state.comments})}, 800)
  }


  commentHandler = event => { // commentHandler using comment instead of text
    this.setState({ comment: event.target.value });
  };

  commentSubmit = event => {
    event.preventDefault();
    const NewComment = {text: this.state.comment, username: 'Gemma FP'};
    const comments = this.state.comments.slice();
    comments.push(NewComment);
    this.setState({ comments, comment: '' })
  }

  render() {
    return (
      <div className='comment-wrapper'>
        {this.state.comments.map((comment, index) => <Comment key={index} comment={comment} />)}
        <CommentInput 
        submitHandler={this.commentSubmit}
        commentHandler={this.commentHandler} 
        comment={this.state.comment}
        />
      </div>
    );
  }
}



CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;