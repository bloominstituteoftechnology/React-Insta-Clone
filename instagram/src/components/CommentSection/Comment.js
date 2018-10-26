import React from 'react';
import './CommentSection.css'
import PropTypes from 'prop-types';


const Comment = (props) => {
    console.log(props)
    return(
        <div className='CommentSection'>
        {props.comments.map((comment, index) => <div key={index}>
            <span>{comment.username}</span>
            <span>{comment.text}</span>
        </div>)}
      
        </div>
    )

}

export default Comment