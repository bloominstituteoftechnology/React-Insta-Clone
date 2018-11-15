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
                <div className="post__bottom--likes">{props.post.likes} likes</div>
            </PostBottom>
            <CommentsSection 
                comments={props.post.comments}
                removeComment={props.removeComment}
                parentIndex={props.index}
            />
            <div className="post__time">{moment(props.post.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow().toString()}</div>
            <form className="post__add-new-comment" onSubmit={event => props.addNewComment(event, props.index)}>
                <input 
                    className="post__add-new-comment-input"
                    placeholder="Add a comment ..."
                    type="text"
                    name={props.index}
                    value={props.commentText[props.index]}
                    onChange={props.handleInputChangeComment}
                />           
            </form>
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
