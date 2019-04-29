import React from 'react';
import PostContainer from '../PostContainer/PostContainer';

const Comment = props => {
    return (
        <div>
            <h4>{props.username}</h4>
            <p>{props.text}</p>
        </div>
    );
}

export default Comment;