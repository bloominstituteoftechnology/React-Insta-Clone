import React from 'react';
import Post from './post';
import './postcontainer.css';

let PostContainer = props => {
    return(
        <div className="posts-container-wrapper">
        {props.values.comments.map(comment => <CommentSection key={this.timestramp} comment={comment} />)}
        </div>
    );
};

export default PostContainer