import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
    return   (
        <div>
            <strong>{props.c.username}</strong> {props.c.text}
        </div>
    )     
}

Comment.propTypes = {
    c: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    })
};


export default Comment;