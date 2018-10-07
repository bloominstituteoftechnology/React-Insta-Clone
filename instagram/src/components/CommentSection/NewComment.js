import React from 'react';
import './NewComment.css';

const NewComment = props => {
    return (
        <div className="newComment">
            <input id="newCmt" type="text" placeholder="Add a comment..."/>
            <label htmlFor="newCmt">...</label>
        </div>
    );
}

export default NewComment;