import React from 'react';
import Post from './post';
import Comments from '../CommentSection/comments';

const PostContainer = props => {
    return (
        <div>
            {props.data.map((post) => {
                return (
                    <div>
                    <Post key={post.id} post={post} />
                    <Comments key={post.id} post={post} />
                    </div>
                ) 
            })}
            
        </div>
    )
}


export default PostContainer;