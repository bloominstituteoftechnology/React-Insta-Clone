import React from 'react';
import PostUser from './PostUser';
import Comments from '../CommentSection/Comments';
import CommentAdd from '../CommentSection/CommentAdd';

const PostContainer = props => {
    console.log(props)
    return <div>
    <PostUser user={props.posts} />
    
    <Comments />
    <CommentAdd />
    </div>
}
 
export default PostContainer;