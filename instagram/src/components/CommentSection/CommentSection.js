import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
    return (
    <div>
        <div>
            <div className="user-name">
            {props.usersdata.username}
            </div>
            <div className="user-thumbnail">
            <img src={props.usersdata.thumbnailUrl} alt='thumbnail' />
            </div>
        </div>

        <div className="instagram-image">
            <img src={props.usersdata.imageUrl} alt='main-image'/>
        </div>

        <div className="likes">
            {props.usersdata.likes}
        </div>

        <div>
            <div className="user-name">
                {props.usersdata.comments.username}
            </div>
            <div className="comment-text">
                {props.usersdata.comments.text}
            </div>
        </div>

        <div className="timestamp">
            {props.usersdata.timestamp}
        </div>

    </div>
    )
}

CommentSection.propType = {
    user: PropTypes.shape({
        username: PropTypes.string,
        thumbnailURL: PropTypes.element,
        imageURL: PropTypes.element,
        likes: PropTypes.number,
        comments: PropTypes.arrayOf(PropTypes.string),
        timestamp: PropTypes.string
    })
}

export default CommentSection;
