import React from 'react';
import Comment from '../Comment/Comment';
import './CommentsSection.css';

const CommentsSection = props => {
    return (
        <div>
            {props.comments.map(comment =>
                <Comment 
                    key={Math.random()}
                    comment={comment}
                />    
            )}
        </div>
    );
}

export default CommentsSection;