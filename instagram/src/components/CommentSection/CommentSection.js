import React from 'react'
import './CommentSection.css'

const Comment = (props) => {
  return (
    <div className="comment">
      <span className="username">
        {props.comment.username}
      </span>
      <span className="comment-text">
        {props.comment.text}
      </span>
    </div>
  )
}


class CommentSection extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      comments: this.props.comments,
      commentValue: ''
    }
    this.handleComment = this.handleComment.bind(this)
    this.addComment = this.addComment.bind(this)
  }
  componentDidUpdate() {
    // this.setState({
    //   comments: this.props.comments
    // })
  }
  handleComment(e) {
    this.setState({
      commentValue: e.target.value
    })
  }
  addComment() {
    const newComment = {
      username: 'test',
      text: this.state.commentValue
    }
    this.setState({
      comments: [...this.state.comments, newComment]
    })
  }
  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map( (comment, i) => {
          return (
            <div className="comment">
              <Comment comment={comment} />
            </div>
          )
        })}
        <div className="timestamp">
          {this.props.timestamp}
        </div>
        <div className="divider-top"></div>
        <div className="comment-section-footer">
          <input 
            placeholder="Add a comment..."
            value={this.state.commentValue}
            onChange={this.handleComment}
            />
          <div className="submit" onClick={this.addComment}>submit</div>
          <div className="three-dots"></div>
        </div>
      </div>
    )
  }
}

export default CommentSection;