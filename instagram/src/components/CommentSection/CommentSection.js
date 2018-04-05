import React from "react";
import './CommentSection.css';

const CommentSection = props => {
    console.log(props);
    return(
        <div className = "Comment">
        {props.commentList.map((commentsList, index) => {
            return(
                <div className='Comment__Id' key={(commentsList.username + index)}>
                    <h5 className="Comment__Username" key={index + commentsList.username}>{commentsList.username}</h5>
                    <p className="Comment__Text" key={index + 'commentText'}>{commentsList.text}</p>
                </div>
            );
        })}
        <h5 className="Comment__AddComment">Add a comment...</h5>
        </div>
    )
};

export default CommentSection;