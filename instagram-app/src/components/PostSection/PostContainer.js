import React from 'react';
import Post from './Post';

const PostContainer = props => {
    return (
        <div>
            {/* Mapping through the posts array for dummyData
                uses the imageURL as the unique key for the map
                call.
            */}
            {props.posts.filter(post => post.username.includes(props.text)).map(post => <Post key={post.imageUrl} post={post} />)}
        </div>
    );

}

export default PostContainer;