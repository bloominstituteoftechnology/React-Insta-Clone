import React from 'react';
import './CommentSection.css'

const CommentInput = props => {
    return(
        <div className="inputArea">
            <input value="Add a comment..." />
            <img className="optionsIcon" src="https://image.flaticon.com/icons/svg/54/54175.svg" alt="options logo" />
        </div>
    );
}
export default CommentInput;