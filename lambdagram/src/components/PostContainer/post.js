import React from 'react';
import PropTypes from 'prop-types';
// import './postcontainer.css';
import Styled from 'styled-components';

import heart from '../../assets/heart.png';
import commentbubble from '../../assets/comment.png';

const PostHead = Styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    margin: auto;
`;
const UserImg = Styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    margin: 5px;
`;
const PostImg = Styled.img`
    width: 100%;
`;
const PostFooter = Styled.div`
    width: 95%;
    margin: auto;
`;

function Post(props) {
    return (
        <div>
            <PostHead>
                <UserImg src={props.postData.thumbnailUrl} alt={`${props.postData.username}'s profile`} />
                <h4>{props.postData.username}</h4>
            </PostHead>
            <div>
                <PostImg src={props.postData.imageUrl} alt={`Posted by ${props.postData.username} on ${props.postData.timestamp}`} />
            </div>
            <PostFooter>
                <div>
                    <img src={heart} alt='Heart' onClick={ (e) => props.handleLikes(e, props.index) } />
                    <img src={commentbubble} alt='Comment' />
                </div>
                <p>{`${props.postData.likes} likes`}</p>
            </PostFooter>
        </div>
    );
}

Post.propTypes = {
    postData: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired
    }).isRequired,
    handleLikes: PropTypes.func.isRequired,
    index: PropTypes.number
}

export default Post;
