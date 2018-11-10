import React from 'react';
import Comment from '../Comment/Comment';

const CommentsSection = props => {
    return (
        <div>
            {props.comments.map(comment =>
                <Comment 
                    key={Date.now()}
                    comment={comment}
                />    
            )}
        </div>
    );
}

export default CommentsSection;