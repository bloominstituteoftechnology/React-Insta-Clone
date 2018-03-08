import React, { Component } from 'react';

class CommentSection extends Component {

    constructor(props) {
    super(props);
      this.state = {
        comments: [],
        newComment:'',
      };
  }

  // componentDidMount() {
  //   this.setState({comments: newComments}) ;
  // }
addComment = (event) => {
  event.preventDefault();
  this.setState({
      comments: [...this.state.comments, this.state.newComment],
      newComment: '',
  })
}

handleCommentInput = (event) => {
  this.setState({newComment: event.target.value});
};

  render() {
    return (
      <div>{this.props.comments.map((comment, index) => {
        return (
          <div key={comment.username + index}>
            <p>
              <span>{comment.username}</span> <span>{comment.text}</span>
            </p>
          </div>
        );
      })}
        <form onSubmit={this.addComment}>
          <input type="text" onChange={this.handleCommentInput} value={this.state.newComment} placeholder="Comment here ..." />
        </form>
      </div>
    )
  }
}

export default CommentSection
