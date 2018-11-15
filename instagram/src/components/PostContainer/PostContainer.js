import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';

import moment from 'moment'; 
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import './PostContainer.css';

const Post = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    max-width: 640px;
    border: 1px solid lightgrey;
    align-items: flex-start;
    margin-bottom: 20px;
`;

const PostTop = styled.div`
    display: flex;
    align-items: center;

    ${props => props.user && css`

    `}
`;

const PostTopThumb = styled.img`
    border-radius: 100%;
    height: 40px;
    margin: 10px;

    &:hover{
        cursor: pointer;
    }
`;

const PostTopUser = styled.div`
    font-weight: bold;
    
    &:hover{
        cursor: pointer;
    }
`;

const PostImg = styled.img`
    margin-bottom: 10px;
    width: 100%;
`;

const PostBottom = styled.div`
    font-weight: bold;
    font-size: 2.6rem;
    min-width: 84px;
    text-align: left;
`;

const PostBottomLikes = styled.div`
    font-size: 1.8rem;
    margin: 10px;
`;

const PostTime = styled.div`
    margin: 0 10px;
    margin-bottom: 5px;
    color: lightgrey;
    font-weight: bold;
    font-size: 1.6rem;
    padding-bottom: 5px;
    border-bottom: 1px solid lightgrey;
    width: 96.75%;
    text-align: left;
`;

const PostAddNewComment = styled.form`
    width: 96.75%;
    margin-left: 10px;
`;

const PostAddNewCommentInput = styled.input`
    margin-top: 5px;
    margin-bottom: 15px;
    font-weight: bold;
    color: grey;
    border: none;
    text-decoration: none;
    font-size: 1.6rem;
    text-align: left;
    min-width: 98%;
`;

const PostContainer = props => {
    return (
        <Post>
            <PostTop>
                <PostTopThumb src={props.post.thumbnailUrl} alt={props.post.username}/>
                <PostTopUser>{props.post.username}</PostTopUser>
            </PostTop>
            <PostImg src={props.post.imageUrl} alt="Post"/>
            <PostBottom>
                <div 
                    className="far fa-heart post__bottom--heart" 
                    onClick={event => props.addLike(event, props.index)}></div> &nbsp;&nbsp;
                <div className="far fa-comment"></div>
                <PostBottomLikes>{props.post.likes} likes</PostBottomLikes>
            </PostBottom>
            <CommentsSection 
                comments={props.post.comments}
                removeComment={props.removeComment}
                parentIndex={props.index}
            />
            <PostTime>{moment(props.post.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow().toString()}</PostTime>
            <PostAddNewComment onSubmit={event => props.addNewComment(event, props.index)}>
                <PostAddNewCommentInput 
                    placeholder="Add a comment ..."
                    type="text"
                    name={props.index}
                    value={props.commentText[props.index]}
                    onChange={props.handleInputChangeComment}
                />           
            </PostAddNewComment>
        </Post>
    );
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired
    })
};

export default PostContainer;
