import React from "react";
import "./CommentStyles.css";

const CommentInput = (props) => {
    return (
        <div className="addComment">
            <form>
                <input 
                    type="text" 
                    placeholder="add comment... " 
                    name="comment"
                    onChange={props.addNewComment}
                
                
                />
            </form>
        </div>
    );
};

export default CommentInput