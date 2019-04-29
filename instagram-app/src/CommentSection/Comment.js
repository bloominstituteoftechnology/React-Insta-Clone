import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import PropTypes from 'prop-types';

const Comment = props => {
    return (
        <div>
        {console.log(props.username)}
            <h4>{props.username}</h4>
            <p>{props.text}</p>
        </div>
    );
}

Comment.propTypes = {
    username: PropTypes.string.isRequired
}

export default Comment;