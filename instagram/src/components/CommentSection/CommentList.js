import React from 'react'
import Comment from './Comment';
import CommentInput from './CommentInput'
import PropTypes from 'prop-types';
import './Comment.css'

class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      comments: props.comments,
      comment: ''
    }
  }

  inputHandler = e => {
    this.setState({comment: e.target.value })
  }

  submitHandler = e => {
    e.preventDefault();
    let newComment = {text: this.state.comment, username:'randomuser'}
    this.setState({comments: [...this.state.comments, newComment], comment: ''})
  }

  render() {
    return(
      <div>
        {this.state.comments.map((comment) => <Comment key={comment.text} comment={comment}/>)}
        <p className='timeStamp'>{this.props.timeStamp}</p>
        <CommentInput inputHandler ={this.inputHandler} submitHandler={this.submitHandler} value={this.state.comment}/>
      </div>
    )
  }
}

CommentList.proptypes = {
  comment: PropTypes.object
}

export default CommentList