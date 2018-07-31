import React from 'react';
import  './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="Post-Container">
            Hello from Post Container
            {props.values.comments.map(comment => <CommentSection key={this.timestamp} comment={comment} />)}
            <CommentSection />
            </div>
    );
}


export default PostContainer ;