import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';

const PostContainer = props => {
    return <div>
        <Post
            thumbnailUrl={props.post.thumbnailUrl}
            username={props.post.username}
            imageUrl={props.post.imageUrl}
            likes={props.post.likes}
        />

        <div>
            <p>{props.post.comments.map(comment => 
            <CommentSection 
                comment={comment}
                 />)}</p>
            <p>{props.post.timestamp}</p>
            <input value={props.inputText} onChange={props.handleInput} placeholder="Add a comment"></input>
        </div>
    </div>
};

export default PostContainer;