import React from 'react';
import './CommentsSection.css';

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.data,
      likes: props.likes
    }
  }

  incrementLikes = event => {
    let likes = this.state.likes;
    likes++;
    this.setState({ likes: likes });
  }

  addComment = event => {
    let currentComments = this.state.comments;
    currentComments.push({
      username: 'Joe Blow',
      text: event.target.value
    });
    event.target.value = '';
    this.setState({ currentComments });
  }

  render() {
    return(
      <div className='comment-container'>
        <h4>{this.state.likes} likes</h4>
        <div className='buttons'>
          <i className='far fa-heart' onClick={ this.incrementLikes } />
          <i className='far fa-comment' />
        </div>
        {this.state.comments.map((comment, i) => {
          return (
            <div key={i} className='comment'>
              <h1 className='username'>{comment.username}</h1>
              <p className='text'>{comment.text}</p>
            </div>
          )
        })}
        <input className='new-comment' placeholder='Comment...' onKeyPress={e => {if (e.charCode === 13) {
          this.addComment(e)
        }}} />
      </div>
    )
  }
}

export default CommentsSection;
