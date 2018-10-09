import React from 'react';
import './NewComment.css';

const NewComment = props => {
    return (
        <form className="newComment" onSubmit={(event) => props.addNewComment(event, props.index)}>
            <input id="newCmt" name="newComment" value={props.newComment} type="text" placeholder="Add a comment..." onChange={props.changeHandler}/>
            <label className="commentLabel" htmlFor="newCmt">...</label>
        </form>
    );
}

export default NewComment;