import React, { Component } from 'react';
import Comment from '../Comment/comment.js';
import './comment-section.css';

class CommentSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          {this.props.comments.map((val, i) => <Comment key={i} comment={val} />)}
          <form>
            <input className='comment__input' type='text' placeholder='Add a comment...'/>
          </form>
      </div>
    );
  }
}

export default CommentSection;
