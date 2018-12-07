import React from 'react';
import PropTypes from 'prop-types';
import deleteIcon from '../../assets/insta-delete.png';
import './Comment.css';

const Comment = props => (
    <div className="comment-instance">
        <p><span>{props.name}</span> {props.text}</p>
        <img src={deleteIcon} onClick={props.onDelete} alt="Delete button" title="Delete" />
    </div>
)

Comment.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    onDelete: PropTypes.func,
};

export default Comment;