import React from 'react';
import FaBeer from 'react-icons/lib/fa/beer';
import 'bootstrap/dist/css/bootstrap.css'; 
import './CommentSection.css';

const CommentSection = props => {
    return (
        <div className="Comment-container">
            <div className="likeAndTalk">
            <i class="far fa-heart"></i>

            </div>
            <div className="Usernames">
                {props.comments.map(comment => (
                    <div className="Comments">
                    <span className="Username"> {comment.username}</span> {comment.text}
                    </div>
                    ))}
                    <input
                    type='text'
                    placeholder='Add a comment...'
                    onChange={props.change}
                    value={props.value}
                    />
                    <button onClick={props.submit}>Add Comment</button>

            </div>
        </div>
    )
}

export default CommentSection;