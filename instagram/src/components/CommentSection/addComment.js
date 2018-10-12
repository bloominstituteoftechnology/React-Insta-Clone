import React from 'react';

const AddComment = (props) => {
        
        return(
        <div>
            <form type="submit">

                <input 
                value={props.newComment}
                onClick={props.handleComment}
                onChange={props.addComment}
                type="text"
                placeholder="Comment here!"
                /><button onClick={props.submitComment} ></button>
            </form>
        </div>
        )    
}


export default AddComment;