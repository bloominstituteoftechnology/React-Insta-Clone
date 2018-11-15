import React, { Component } from 'react';
// import './PostContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components'

const PostBox = styled.div`
    margin: 20px;
    border: 0.5px solid lightgray;
`;

const PostContainer = props => {
    
        return(
        <PostBox   >
            <Post data={props.data} addLike={props.addNewLike} id={props.id}/>
            <CommentSection comments={props.data.comments} />
        </PostBox>
    );
    
}

export default PostContainer;