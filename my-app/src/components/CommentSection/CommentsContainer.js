import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }
    
  componentWillMount() {
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

    handleCommentSubmit = event => {
      event.preventDefault();
      const newComment={text: this.state.comment, username: 'Lucas Beemer' };
      const comments = this.state.comments.slice();
      comments.push(newComment);
      this.setState({ comments, comment: ''});
      setTimeout(() => {
        this.setComments();
      }, 500);
      };

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => <Comment key={i} comment={c} />)}
        <CommentInput 
        comment={this.state.comment}
        submitComment={this.handleCommentSubmit}
        changeComment={this.commentHandler}
        />
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentsContainer;
