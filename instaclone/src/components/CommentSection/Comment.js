import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Username from '../Styles/Reusable';

const Comment = props => {
    return(
        <div className="comment">
            <Username>{props.comment.username}</Username>
            {props.comment.text}
        </div>
    )
}

Comment.propTyes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;