import React from 'react'; 
import PropTypes from 'prop-types'; 
import dummyData from '../../dummy-data'; 

//what is going on in the code
//I am creating a object called CommentSection. 

const CommentSection = props =>{
    return(
    <div className="comment-container">
    {props.comments.map((comments, data) =>
    <div key = {data}>
    <div className="comment-section">
        <p className="comment user">{comments.username}</p>
        <p className="comment">{comments.text}</p>
    </div>
    </div>
    )}
    </div>
    )
}

export default CommentSection; 