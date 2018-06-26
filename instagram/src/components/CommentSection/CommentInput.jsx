import React from "react";
import "./CommentStyles.css";

const CommentInput = (props) => {
    return (
        <div className="addComment">
            <form onSubmit={props.addNewComment}>
                <input 
                    type="text" 
                    placeholder="add comment... " 
                    value={props.comment}
                    onChange={props.changeComment}
                />
            </form>
        </div>
    );
};

export default CommentInput