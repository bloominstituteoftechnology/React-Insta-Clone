import React from 'react';
import instaComment from './insta-comment.png';
import './CommentSection.css'

const AddComment = props => {
    console.log(props)
    return(
        <div className="addComment">
            <div>
                <input className="comment-input" type="text" placeholder="Add a comment..."></input>
            </div>
            <div>
                <img className="insta-comment" alt="instagram comment" src={instaComment} />
            </div>

        </div>
    )
}
export default AddComment;