import React from 'react';
import PropTypes from 'prop-types'; 
import CommentList from '../CommentSection/CommentList.js';
import './Post.css';
import style from 'styled-components';
import moment from 'moment';

const PostContainer = style.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-top: 5px;
    border: 1px solid black;
`;

const PostHeader = style.header`
     width: 100%;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    align-items: center;
`;

const PostImg = style.img`
      width: 100%;
    height: 616px;
    background: gray;
    margin-top: 5px;
`;

const PostUserAvatar = style.img`
      width: 50px;
    height: 50px;
    background: gray;
`;

const PostUserHandle = style.div`
     height: 50px;
    width: 100px;
    line-height: 3.2;
`

const LikesContainer = style.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
`;

const LikesHeart = style.div`
    height: 48px;
    width: 48px;
    border: 1px solid gray;
`;

const PostBubble = style.div`
     height: 48px;
    width: 48px;
    border: 1px solid gray;
`;

const LikesCount = style.div`
     text-align: start;
    width: 100%;
    height: 20px;
`;

const Timestamp = style.div`
    width: 100%;
    height: 50px;
    font-size:100;
    display:block;
`;




const Post = (props) => {
    
let timestamp = moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow();
    
    return (
        <PostContainer>
            <PostHeader>
                <PostUserAvatar src={props.post.thumbnailUrl}></PostUserAvatar>
                <PostUserHandle>{props.post.username}</PostUserHandle>
            </PostHeader>
            <PostImg src={props.post.imageUrl}></PostImg>
            <LikesContainer>
                <LikesHeart onClick={() => { props.handleLike(props.post.timestamp) }}></LikesHeart>
                <PostBubble></PostBubble>
            </LikesContainer>
            <LikesCount>{props.post.likes} likes!</LikesCount>
            <CommentList comments={props.post.comments}/>
            <Timestamp>{timestamp}</Timestamp>
        </PostContainer>
    )
}

Post.propTypes = {
    thumbnailUrl : PropTypes.string,
    username: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.string,
    comments: PropTypes.string,
}

export default Post;