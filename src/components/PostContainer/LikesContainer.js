import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Holds information for number of likes, and lets you 'like' a post

const LikesContainer = (props) => {
    // Takes in props:
    // likes: 200
    // likesHandler: fn()
    
    const likeHandler = () => {
        props.likesHandler(props.postId)
    }
        return (
        <div className='likesContainer'>
            <div className='likesIcons' >
                <span onClick={likeHandler} >
                    <FontAwesomeIcon className='likesIconImage' icon={['far','heart']} size='3x' />
                </span>
                <FontAwesomeIcon className='likesIconImage' icon={['far','comment']} size='3x' />
            </div>
            <div className='likes'>
                {props.likes}{" "}likes
            </div>
        </div>
    );
};

export default LikesContainer;