import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components';

// Styled components:
const LikesContDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
`;
const LikesIcons = styled.div`
    padding-bottom: 10px;
`;

// Holds information for number of likes, and lets you 'like' a post

const LikesContainer = (props) => {
    // Takes in props:
    // likes: 200
    // likesHandler: fn()
    
    const likeHandler = () => {
        props.likesHandler(props.postId)
    }
        return (
        <LikesContDiv>
            <LikesIcons>
                <span onClick={likeHandler} >
                    <FontAwesomeIcon className='likesIconImage' icon={['far','heart']} size='3x' />
                </span>
                <FontAwesomeIcon className='likesIconImage' icon={['far','comment']} size='3x' />
            </LikesIcons>
            <div>
                {props.likes}{" "}likes
            </div>
        </LikesContDiv>
    );
};

export default LikesContainer;