import React, { Component } from 'react';
import Comment from './Comment';
import './CommentSection.css'

class CommentSection extends Component {
  render() {
    return (
      <div className='comment-container'>
        <div className='comment-icon-container'>
          <div className='heart-speech-upload'>
              <img src='https://png.icons8.com/ios/48/000000/hearts.png' alt=''/>
              <img src='https://png.icons8.com/ios/48/000000/speech-bubble.png' className='comment-speech-bubble' alt='' />
              <img src='https://png.icons8.com/ios/48/000000/upload.png' alt='' />
          </div>
          <div>
            <img src='https://png.icons8.com/ios/48/000000/bookmark-ribbon.png' alt='' />
          </div>
        </div>
        <div className='likes-count'>{this.props.post.likes} likes</div>
        {this.props.comments.map(comment => {
          return (
            <Comment key={comment.text} comment={comment} dummyData={this.props.dummyData} />
          )
        })}
        <div className='time-stamp'>{this.props.post.timestamp}</div>
        <form>
          <input placeholder='Add a comment...' />
        </form>
      </div>
    )
  }
}

export default CommentSection;