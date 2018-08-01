import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div className="comment">
            <p>
                <span className="user">{props.user}</span> 
                &thinsp; {props.text} 
                <i onClick={() => props.delete(props.id)} className="far fa-times-circle" />
            </p>
        </div>
    );
};

Comment.propTypes = {
    text: PropTypes.string,
    user: PropTypes.string
};

export default Comment;