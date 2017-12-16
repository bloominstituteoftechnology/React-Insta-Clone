import React, { Component } from 'react'

class CommentSection extends Component {
  constructor(){
    super();
    this.state = {
      comments: [],
      newComment: ''
    }
  }

componentDidMount() {
  this.setState({comments: this.props.comments});
}



addComment = (event) => {
  event.preventDefault();
  const commentObj = {
    username: 'Csaba Balogh',
    text: this.state.newComment
  }
  const commentsArray = this.state.comments
  commentsArray.push(commentObj);
  this.setState({
    comments: commentsArray,
    newComment: ''
  });
}
    handleCommentInput = (event) => {
      this.setState({ newComment: event.target.value});
    }

render() {
  return(
    <div className='comment-section'>
      {this.state.comments ? this.state.comments.map((comment, i) => (
        <div className="comment" key={i}>
          <div className="comment-user"><b>{comment.username}</b></div>
          <div className="comment-text">{comment.text}</div>
        </div>
      )) : null}
      <div className="comment-input">
        <input type="text" placeholder="add comment" value={this.state.newComment} onChange={this.handleCommentInput}>
        </input>
        <button onClick={this.addComment}>Submit</button>
      </div>
    </div>
    )
  }
}

export default CommentSection;