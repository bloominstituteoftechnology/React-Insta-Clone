import React from 'react'
import './CommentSection.css'

const Comment = (props) => {
  return (
    <div className="comment">

    </div>
  )
}


class CommentSection extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      commentValue: ''
    }
    this.handleComment = this.handleComment.bind(this)
  }

  handleComment(e) {
    this.setState({
      commentValue: e.target.value
    })
  }
  render() {
    return (
      <div className="comment-section">
        {this.props.comments.map( (comment, i) => {
          return (
            <div className="comment">
              <span className="username">
                {comment.username}
              </span>
              <span className="comment-text">
                {comment.text}
              </span>
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
          <div className="three-dots"></div>
        </div>
      </div>
    )
  }
}

export default CommentSection;