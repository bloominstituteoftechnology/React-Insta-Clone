import React from 'react';  

const AddNewComment = props => {
    return (        
        <form onSubmit={props.onSubmit}>
            <input className="addComment"
                    onChange={props.onChange}
                    type="text"
                    name="newComment"
                    placeholder="Add a new comment" 
                    value={props.commentField}
            />
        </form>
    );
};
  
export default AddNewComment; 