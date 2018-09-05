import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  addNewComment = event => {
    event.preventDefault();
      this.setState({
        comments: [
          ...this.state.comments,
          { text: this.state.newComment, username: "Luisan"}
          ],
        newComment: ""
      });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // SAME AS this.setState({newComment: event.target.value});
  };

  render() {
    return (
      <div>
        {this.state.comments.map((item, index) => <Comment key={index} comment={item} />)}
        <CommentInput 
          addNewComment={this.addNewComment} 
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
