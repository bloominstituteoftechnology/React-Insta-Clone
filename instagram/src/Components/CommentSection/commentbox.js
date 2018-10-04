import React from "react";

const CommentBox = props =>{
    return (
        <div className="comment-box">
            <input  value={props.text}
                    className="input" 
                    placeholder="Add A Comment..."
                    maxLength="100"
                    onChange={props.input}
                    onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                            props.add()
                        }
                    }} 
            >
            </input>
            <span className="dots">...</span>
        </div>
    );
}

export default CommentBox;