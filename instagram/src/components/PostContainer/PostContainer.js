import React, { Component } from 'react';
import Card from './Card.js';
import CommentSection from '../CommentSection/Comment.js';

class PostContainer extends Component {
    render() {
        
        return(
            <div className='post-container'>
               <Card key={this.props.card.timestamp} card={this.props.card} />
               <CommentSection key={this.props.card.timestamp} comments={this.props.card.comments} likes={this.props.card.likes}  />
            </div>
        );
    }
}

export default PostContainer;
