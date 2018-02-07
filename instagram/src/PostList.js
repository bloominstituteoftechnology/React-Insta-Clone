import React from 'react';
import PostInfo from './PostInfo';

const PostList = (props) => {
    return (
        <div>
            {props.post.map((info, i) => {
                return <PostInfo key={i} post={info}/>
            })}
        </div>
    )
}
export default PostList;