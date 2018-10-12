import React from 'react';
import propTypes from 'prop-types';

const Comments = (props)=> {
    return(
    <div className="posted">
        <div className="user">{props.values.username}</div>
        <div><p>{props.values.text}</p></div>
    </div> 
    )
}

Comments.propTypes = {
    comments: propTypes.string,
    username: propTypes.string
}

export default Comments;