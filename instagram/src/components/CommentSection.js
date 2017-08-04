import React, { Component } from 'react'

class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      comment: ''
    }
    this.handleSetComment = this.handleSetComment.bind(this);
    this.submitComment = this.submitComment.bind(this);
  }
  componentDidMount() {
    this.setState({comments: this.props.comments});
  }
  handleSetComment(event) {
     this.setState({comment: event.target.value});
  }
  submitComment() {
    const comments = this.state.comments
    const text = this.state.comment;
    const newComment = {
      username: "Anonymous",
      text
    }
    comments.push(newComment);
    this.setState({comments, comment: ''})

  }
  render() {
    return (
      <div>
        <ul>
        {this.state.comments.map((obj) => {
          return (
            <li>{obj.username}:{obj.text}</li>
            )
        })}
        </ul>
        <input placeholder="Add a comment" type="text" onChange={this.handleSetComment} value={this.state.comment} />
        <button type="submit" onClick={this.submitComment}>Submit</button>
      </div>
    )
  }
}

export default CommentSection;
