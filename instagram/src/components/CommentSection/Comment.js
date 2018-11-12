import React from 'react';
import PropTypes from 'prop-types';
const Comment=props =>{
    return(
    <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
    );
}
Comment.propTypes ={
    comment:PropTypes.shape({
        text:PropTypes.string,
        username:PropTypes.string,
    })
}
export default Comment;