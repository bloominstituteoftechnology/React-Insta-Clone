import React from "react";

const CommentBox = props =>{
    return (
        <form className="comment-box">
            <input  value={props.text}
                    className="input" 
                    placeholder="Add A Comment..."
                    maxLength="100"
                    onChange={props.input}
                    // onKeyDown={(event) => {
                    //     if (event.keyCode === 13) {
                    //         props.add(props.postId)
                    //     }
                    // }}
                    onSubmit={(event) => {
                        console.log(event)
                        event.preventDefault()
                        if (event.keyCode === 13){
                            props.add(event, props.postId)
                            event.preventDefault()
                            }
                        } 
                    }
            >
            </input>
            <span className="dots">...</span>
        </form>
    );
}

export default CommentBox;