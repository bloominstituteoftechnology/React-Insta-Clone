import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

// Creates a class component CommentSection with comments from the posts data. 
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }

  // If the comment exists in local storage mount it otherwise add it to local storage? 
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        // Common use of JSON is to exchange data to/from a web server.
        // When receiving data from a web server, the data is always a string.
        // Parse the data with JSON.parse(), and the data becomes a JavaScript object.
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }

  // When you finish doing your thing show me the comments? 
  componenetWillUnmount() {
    this.setComments();
  }

  // Add comments to local storage.
  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };

  //Sets comments state to the current types value
  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };

  //When the comment is submitted update the comment state data with the new text and username
  handleCommentSubmit = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: 'elvisibarra' };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
    setTimeout(() => {
      this.setComments();
    }, 500);
  };

  render() {
    return (
      <div>
        {/* For every comment in the state data make a comment component for each and one overall comment input functional component. */}
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

// Prop checking that our comment will be an array of objects with text and string fields that have strings.
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;
