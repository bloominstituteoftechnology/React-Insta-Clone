import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Holds information for number of likes, and lets you 'like' a post

const LikesContainer = (props) => {
    return (
        <div className='likesContainer'>
            <div className='likesIcons'>
                <FontAwesomeIcon className='likesIconImage' icon={['far','heart']} size='2x' />
                <FontAwesomeIcon className='likesIconImage' icon={['far','comment']} size='2x' />
            </div>
            <div className='likes'>
                {props.likes}{" "}likes
            </div>
        </div>
    );
};

export default LikesContainer;