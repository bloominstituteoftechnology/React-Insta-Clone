import React from "react";
import "./CommentSection.css";

const CommentInput = () => {
    return (
        <div className="addComment">
            <form>
                <input type="text" placeholder="add comment... " />
            </form>
        </div>
    );
};

export default CommentInput