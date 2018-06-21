import React from 'react'
import Comment from "./comment.js"

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.data,
      comment: ""
    }
  }

  addComment = e => {
    this.setState({comment: e.target.value})
  }

  commentSubmit = e => {
    e.preventDefault();
    const username = localStorage.getItem('user')
    const newComment = { text: this.state.comment, username};
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({comments: comments, comment: ""})
  }

  render() {
  return (
    <div className="comment-section">
    {this.state.comments.map(comment => (
      <Comment key={Math.random()} data={comment} />
    ))}
    <form onSubmit={this.commentSubmit}>
      <input onChange={this.addComment} type="text" placeholder="Add comment..." value={this.state.comment}></input>
    </form>
    </div>
  )
}
}

export default CommentSection;
