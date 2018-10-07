import React, { Component } from 'react';
import Likes from './likes';
import UserComments from './UserComment.js';

class Comment extends Component {
    render() {
       
        return (
            <div className='comment'>
              <Likes />  
              <p>{this.props.likes} likes</p>
              <UserComments notes={this.props.comments} />
            </div>
        );
    }
}

export default Comment;
