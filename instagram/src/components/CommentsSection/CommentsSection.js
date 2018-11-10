import React from 'react';
import Comment from '../Comment/Comment';
import './CommentsSection.css';

const CommentsSection = props => {
    return (
        <div className="comments">
            {props.comments.map(comment =>
                <Comment 
                    key={Math.random()}
                    comment={comment}
                />    
            )}
            <div className="comments__time">2 HOURS AGO</div>
            <div className="comment__add-new">Add a comment ...</div>
        </div>
    );
}

export default CommentsSection;