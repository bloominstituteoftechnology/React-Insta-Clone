import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <li className="comments">
            <span style="font-weight: bold">{props.username}</span>
            {props.text}
             </li>
        );
    };

export default Comment;