import React from "react";

//comment box presents the "add comment" section for each post
const CommentBox = props =>{
    return (
        <form className="comment-box">
            <input  
                    value={props.text}
                    className="input" 
                    placeholder="Add A Comment..."
                    maxLength="100"
                    onChange={props.input}
                    // onKeyDown={(event) => {
                    //     if (event.keyCode === 13) {
                    //         event.preventDefault()
                    //         props.add()
                    //     }
                    // }}
                    // onSubmit={(event) => {
                    //     props.add(event)
                    //     console.log(event)
                    //     if (event.keyCode === 13){
                    //             event.preventDefault()
                    //         props.add(event)
                    //         }
                    //     }
                    // }
            >
            </input>
            <span className="dots">...</span>
        </form>
    );
}

export default CommentBox;