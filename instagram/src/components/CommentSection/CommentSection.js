import React from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  


  commentHandler = event => {
    this.setState({ comment: event.target.value });
  };

  addNewComment = event => {
    event.preventDefault();
    this.setState({
      comments: [
        ...this.state.comments,
        {
          text: this.state.comment,
          username: "MindySueasaurus"
        }
      ],
      comment: ""
    });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((comment, index) => {
          return <Comment key={index} comment={comment} />
        })}
        <CommentInput
          changeHandler={this.commentHandler}
          comment={this.state.comment}
          submitHandler={this.addNewComment}
        />
      </div>
    );
  }
}

CommentSection.defaultProps = {
  comments: []
}
CommentSection.proptypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
}
export default CommentSection;