import React from 'react';
import CommentSection from './CommentSection';
import './PostContainer.css'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContainerDiv = styled.div`
    border: 1px solid black;
    margin: 30px 0;
    width: 100%;
`;



function PostContainer(props) {
    return (
        <PostContainerDiv className='postContainer'>
            <header className='postHeader'>
                <img className='userThumbnail' src={props.postData.thumbnailUrl} alt=''/>
                <h2 className='username'>{props.postData.username}</h2>
            </header>
            <img className='posterImg' src={props.postData.imageUrl} alt='post'/>
            <div className='actionIcons'>
                <img className='actionIcon heart' id={props.postData.timestamp} onClick={props.incrementLikes} src='https://openclipart.org/image/2400px/svg_to_png/234835/heart-outline.png' alt='heart'/>
                <img className='actionIcon' src='https://st2.depositphotos.com/4335005/8479/v/950/depositphotos_84799002-stock-illustration-outline-icon-of-speech-bubble.jpg' alt='speechBubble'/>
            </div>
                <div className='likeNumber'>{props.postData.likes} likes</div>
            <div className='likes'></div>
            <CommentSection postComments={props.postData.comments} />
            <div className='timestamp'>{props.postData.timestamp}</div>

            <form onSubmit={props.addNewComment} id={props.postData.timestamp}>
                <input placeholder='Add a comment...' 
                        value={props.commentInput} 
                        onChange={props.commentInputHandler}/>
            </form>
        </PostContainerDiv>
    )
}

PostContainer.propTypes = {
    postData: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
}

export default PostContainer;