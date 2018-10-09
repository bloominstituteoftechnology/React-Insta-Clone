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
        <div className="divider-top"></div>
        <div className="comment-section-footer">
          <input 
            placeholder="Add a comment..."/>
          <div className="three-dots"></div>
        </div>
      </div>
    )
  }
}

export default CommentSection;