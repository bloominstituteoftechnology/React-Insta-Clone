import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import PostHeader from '../PostContainer/PostHeader.js';
import './PostContainer.css';
import PropTypes from "prop-types";
import styled from 'styled-components';

const  Post = styled.div`
margin: 0 auto;
max-width: 600px;
background-color: white;
border: 1px solid black;
`


const PostContainer = props => {
    return (
        <div>
        {props.data.map(post => {
            return (
            <Post>
             <PostHeader username={post.username} thumbnail={post.thumbnailUrl} />
                
                    <img src={post.imageUrl} />
                
                <CommentSection comments={post.comments} likes={post.likes}/>
            </Post>
            )
        })}
        </div>
    )
    }
    PostContainer.propTypes = {
        data: PropTypes.shape({
            username: PropTypes.string,
            imageUrl: PropTypes.string,
            timestamp: PropTypes.string     
        }) 
}

export default PostContainer;
