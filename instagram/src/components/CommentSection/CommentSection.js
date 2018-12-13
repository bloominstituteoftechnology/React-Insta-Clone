import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import './comment.css';


class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      commentInput: ""
    }
  }

  changeInput = event => {
    this.setState({ commentInput: event.target.value })
  }

  addComment = event => {
    event.preventDefault();
    this.setState(prevState => {
      let comments = prevState.comments.slice();
      comments.push({
        username: "sign-in",
        text: this.state.commentInput
      });

      return {
        comments: comments,
        commentInput: "",
      };
    });

    
  }

  render() {
    return (
      <div className="comment-container">
        <div className="comments">
          {this.state.comments.map(entry => <Comment comment={entry} key={entry.text} />)}
        </div>
        <div className="comment-form">
          <form onSubmit={this.addComment}>
            <input onChange={this.changeInput} type="textarea" value={this.state.commentInput} placeholder="Add a comment..."></input>
          </form>
        </div>
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default CommentSection;