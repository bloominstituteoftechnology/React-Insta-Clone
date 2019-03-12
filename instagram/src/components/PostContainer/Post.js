import React, { Component } from 'react';
import './PostContainer.css';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const PostHeader = styled.div`
    display: flex   
`;
const PostHeadImg = styled.img`
    width: 50px;
    height: 50px;
    margin: 20px 10px 20px 20px;
    border-radius: 100px;
`;
const PostHeadText = styled.h3`
    align-self: center;
`;

const Likes = styled.div`
    text-align: left;   
    margin-left: 10px;
`;
const FooterIcons = styled.div`
    display: flex;
    align-items: center;
`;
const LikesIcon = styled.h1`
    margin: 0 10px 0 0;
    cursor: pointer;
    user-select: none;
    ${props => (props.type === "liked" ? `color:red; font-size:43px;` : `color:black`)}

`;
const CommentIcon = styled.h1`
    font-size: 22px;
`;


const Post = props => {

    return(
        <div >
            <PostHeader > 
                <PostHeadImg src={props.data.thumbnailUrl}/>
                <PostHeadText>{props.data.username}</PostHeadText>
            </PostHeader>
            <img src={props.data.imageUrl} />
            <Likes >
            <FooterIcons >
                <LikesIcon onClick={props.addLike} id={props.id} type={props.likedBool}>♡</LikesIcon>
                <CommentIcon >🗨️</CommentIcon>
            </FooterIcons>
                
                <p>{props.data.likes} likes</p>
            </Likes>
            
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username:PropTypes.string,
            text: PropTypes.string,
        }))
    })
}

export default Post;