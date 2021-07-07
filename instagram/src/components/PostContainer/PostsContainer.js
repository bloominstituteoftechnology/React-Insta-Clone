import React from 'react';
import Post from './Post';
import './Posts.css'
import {PostDivContainer } from './StyledPosts'

const PostsContainer = (props) => {
    return (
        <PostDivContainer>
            {props.posts.map( post => <Post key={post.imageUrl} post={post} />)}
        </PostDivContainer>
    )
}





export default PostsContainer;