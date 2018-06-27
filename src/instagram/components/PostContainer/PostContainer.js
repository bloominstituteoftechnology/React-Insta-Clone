import React from 'react';
import PostUser from './PostUser';



const PostContainer = props => {
    console.log(props)
    return <div>
    <PostUser user={props.posts} />
    </div>
}
 
export default PostContainer;