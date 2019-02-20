import React  from 'react';



const CommentInput = props {
    return(
        <div className="commentForum">
            <form className="forum"
                onSubmit={props.submitNewComment}>
                    <input className = "forumInput"
                        placeholder= "Have something to say?..."
                        onChange = {props.changeTheComment}
                        />
                </form>
        </div>
    );
};






export default CommentInput;