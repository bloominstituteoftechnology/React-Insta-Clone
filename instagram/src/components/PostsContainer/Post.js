import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';
import styled from 'styled-components';

const FullPost = styled.div `
margin: 20px 0px;
    border: 1px solid lightgray;
    border-radius: 5px;
`

const PostImage = styled.div `
    img{
    width: 100%;
    }
`


const Post = props => {
    return (
       <FullPost>

        <PostHeader username={props.post.username} thumbnailUrl={props.post.thumbnailUrl} />

        <PostImage>
        <img src = {props.post.imageUrl} alt='post' />
        </PostImage>

        <CommentSection comments={props.post.comments} likes={props.post.likes}/>

        </FullPost>
    )

}

export default Post;