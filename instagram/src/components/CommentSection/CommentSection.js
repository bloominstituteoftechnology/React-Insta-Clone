import React from 'react';
import PropTypes from 'prop-types'
import './commentSection.scss';
import moment from 'moment';

const CommentSection = props => {
    return (
        <>
            <p className='commentContent'>
                <span className='commentUsername'>{props.comment.username}</span>
                {props.comment.text}
                <sup onClick={() => props.deleteComment(props.postIndex, props.comment.id)}>X</sup>
            </p>
            <p
                className='time'
                style={{ display: props.comment.timestamp ? 'block' : 'none' }}
            >
                {moment(props.comment.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
            </p>
        </>
    )
}

CommentSection.propTypes = {
    comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default CommentSection;