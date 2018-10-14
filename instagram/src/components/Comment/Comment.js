import React from 'react';
import styles from './Comment.css';
import PropTypes from 'prop-types';


const Comment=(props)=>{
    let comment=props.comment;
    return(

        <p class="comment">
        <span>{comment.username}</span>
        &nbsp;
        {comment.text}
        </p>
    )

}

Comment.propTypes={
    commentObject: PropTypes.shape({
        username:PropTypes.string,
        text:PropTypes.string,
    }
    )
}

export default Comment;