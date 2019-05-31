import React from 'react';

import { CardBody } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const LikeSection = props => {
	return (
        <CardBody style={{paddingBottom: '0'}}>
            <div
                className='heart-n-comment'
                key='likes-icons-container'
            >

                <FontAwesomeIcon
                    className={`post-heart${props.isLiked ? ' liked' : ''}`}
                    icon={faHeart}
                    size='lg'
                    onClick={props.addClass.bind(this)}
                    onClick={props.toggleLike}
                />
                <FontAwesomeIcon className='post-comment' icon={faComment} size='lg' />
                { console.log(props.isLiked) }
            </div>
            <div className='likes'>
                <strong>{props.likes} likes</strong>
            </div>
        </CardBody>
	);
};

export default LikeSection;