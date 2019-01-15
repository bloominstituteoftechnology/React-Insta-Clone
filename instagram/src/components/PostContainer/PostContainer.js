import React from 'react';
import Post from './Post'


/*
Passed as props from App.js

posts = {this.state.instaData}
*/

const PostContainer = props => {
    return (
        <div>
            {props.posts.map( p => <Post key={ p.imageUrl } post={p} /> )}
        </div>
    )
}

export default PostContainer