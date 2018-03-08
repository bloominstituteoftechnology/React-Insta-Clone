import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentField: '',
    };
  };

  handleListInput = event => {
    this.setState({
      commentField: event.target.value,
    });
  };

  addComment = event => {
    event.preventDefault();
    let newComment = {username: 'dummy', text:this.state.commentField};
    let commentsList = this.state.comments;
    commentsList.push(newComment);
    this.setState({
      comments: commentsList,
      commentField: ''
    });
  }


  render() {
    return (
      <div>
        {this.state.comments.map(comment => {
          return (
            <div>

              <h4>{comment.username}</h4>
              <p>{comment.text}</p>

            </div>

          )
        })}

        <form onSubmit={this.addComment}>
          <input
            type="text"
            onChange={this.handleListInput}
            placeholder="Add a comment"
            value={this.state.commentField}
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
