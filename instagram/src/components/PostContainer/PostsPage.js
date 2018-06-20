import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
const PostsPage = props => {
    return(
        <div>
        <PostContainer 
                    posts={props.posts} 
                    addComment={props.addComment} 
                    commentTemplate={props.commentTemplate} 
                    addCommentHandler={props.addCommentHandler}/>
        </div>
    );
}

export default PostsPage;