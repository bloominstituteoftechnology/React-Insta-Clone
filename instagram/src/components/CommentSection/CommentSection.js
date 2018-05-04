import React from 'react'
class CommentSection extends React.Component {
  render() {
    return this.props.comments.map(comment => (
      <div key={comment.text}>
        <h6>{comment.username}</h6>
        <p>{comment.text}</p>
      </div>
    ))
  }
}
export default CommentSection
