import React, { Component } from 'react';

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state= { 
      username: 'gakko',
      comments: [],
      newCommentText: []
    }
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comments
    });
  }

  updateCommentText = (event) => {
    this.setState({
      newCommentText: event.target.value
    });
  }

  submitComment = (event) => {
    if (event.keyCode === 13) {
      const newComment = {
        username: this.state.username,
        text: this.state.newCommentText
      }

      this.setState({
        comments: [...this.state.comments, newComment],
        newCommentText: ''
      })
    }
  }

  render() {
    return (
      <div className='commentSection'>
        <div className='commentSection__container'>
          {this.state.comments.map((comment, index) => {
            return(
              <div className='commentSection__text' key={index}>
                <h4 className='commentSection__comment-user'>{comment.username}</h4>
                <p className='commentSection__comment-body'>{comment.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default CommentSection;