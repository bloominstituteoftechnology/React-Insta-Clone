import React from 'react';
import './PostContainer.css'
import CommentSection from '../CommentSection/CommentSection';
import styled from 'styled-components';

const Post = styled.div`{
    border: solid gray 3px;
    width: 640px;
    margin-top: 20px;
    margin-left: 25%;
}`;

const PostHead = styled.div`{
    height: 50px;
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    border: solid red 2px;
}`;

const PostImg = styled.div`{
    border-radius: 30px;
    width: 40px;
    height: 40px;
    align-self: center;
}`

const PostContainer = (props) => {
    return (
        <Post>
            <PostHead>
                <img id='post' src={props.data.thumbnailUrl} />
                <p> <span>{props.data.username}</span></p>
            </PostHead>
                <img src={props.data.imageUrl}/> 
            <CommentSection data={props.data}/>
        </Post>
    );
}

export default PostContainer;

