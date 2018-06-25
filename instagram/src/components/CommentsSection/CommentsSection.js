import React from 'react';
import './comments-section.css';

const CommentsSection= props =>{
    return (
        <div className="comments">
            <p>
                comments go here.
            </p>
            {props.comment.comments}
        </div>
    );
}

export default CommentsSection;