import React, { Component } from 'react';
import Likes from './likes';
import UserComments from './UserComment.js';

class Comment extends Component {
    render() {
       
        return (
            <div className='comment'>
              <div className="comment-container">
                <Likes />  
                <p>{this.props.likes} likes</p>
                <UserComments notes={this.props.comments} />
              </div>
              <input type='text' placeholder='Add a Comment' className="comment-input" />
            </div>
        );
    }
}

export default Comment;
