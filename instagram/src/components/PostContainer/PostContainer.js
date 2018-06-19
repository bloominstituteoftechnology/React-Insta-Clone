import React from 'react';
import Post from '../PostContainer/Posts';

import './Posts.css';

const PostContainer = props => {
    return (
        <div className="posts-container-wrapper">
      {props.posts.map(p => <Post 
                                    key={p.imageUrl} 
                                    index={p.imageUrl}
                                    post={p} 
                                    addComment={props.addComment} 
                                    commentTemplate={props.commentTemplate}
                                    addCommentHandler={props.addCommentHandler}
                                    />)}
    </div>
        );    
}

export default PostContainer;