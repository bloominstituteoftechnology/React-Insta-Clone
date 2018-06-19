import React, { Component } from 'react';
import './CommentSection.css';

class CommentSectionForm extends Component {
  constructor(props) {
    super();
    this.state = {
      commentToAdd: ''
    }
  }

  onCommentChange = e => {
    this.setState({commentToAdd: e.target.value});
  }

  render() {
    return (
      <form className="comment-section__form" onSubmit={(e) => this.props.addNewComment(e, this.state.commentToAdd, this.props.postIndex)}>
        <input type="text" className="comment-section__input" placeholder="Add a comment..." value={this.state.commentToAdd} onChange={this.onCommentChange} />
      </form>
    );
  }
}

export default CommentSectionForm;