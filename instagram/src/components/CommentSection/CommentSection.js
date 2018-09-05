import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  state = {
    comments: [],
    username: '',
    inputText: '',
  };

  componentDidMount() {
    // const id = this.props.post.imageUrl;
    // this.addNewComment();
    this.setState({ comments: this.props.comments });
  }

  addNewComment = (event) => {
    event.preventDefault();
    if (this.state.inputText) {
      this.setState({
        // users: this.state.users,
        // inputText: this.state.inputText,
        comments: [
          ...this.state.comments,
          { text: this.state.inputText, username: 'bob' },
        ],
        inputText: '',
      });
    }
    event.target.reset();
  };

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="commentSection">
        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.text} />
        ))}
        <form onChange={this.handleInput} onSubmit={this.addNewComment}>
          <input name="inputText" type="text" placeholder="Add comment..." />
        </form>
      </div>
    );
  }
}
export default CommentSection;

CommentSection.propTypes = {
  postData: PropTypes.shape({
    comments: PropTypes.array,
    timestamp: PropTypes.string,
  }),
};