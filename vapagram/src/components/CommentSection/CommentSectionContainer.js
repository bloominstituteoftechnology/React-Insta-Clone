import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment: '',
      heartCount: 0
    };
  }

  addNewComment = event => {
    event.preventDefault();
    if (this.state.newComment) {
      this.setState({
        comments: [
          ...this.state.comments,
          { text: this.state.newComment, username: 'SomeUser' }
        ],
        newComment: ''
      });
    }
  };
  heartCount = () => {
    console.log(this.state.heartCount);
    this.setState(prevState => {
      return {
        heartCount: prevState.heartCount + 1
      };
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state.newComment);
    });
  };
  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <div className="heart" onClick={this.heartCount}>
          ♥<span>{this.state.heartCount}</span>
        </div>
        <CommentInput
          addComment={this.addNewComment}
          handleChange={this.handleChange}
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
