import React, { Component } from 'react';
import './AddComment.css';

export default class AddComment extends Component {
  
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  }

  addComment = (e) => {
    e.preventDefault();
    this.props.addComment(this.state.inputText);
  }

  render() {
    return (
      <form onSubmit={this.addComment} className="add-comment-container">
        <input className="input" type="text" placeholder="Comment Here" />
        <button onClick={this.addComment} className="submit" type="submit">Submit</button>
      </form>
    )
  }
}