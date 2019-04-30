import React from 'react';  

const AddNewComment = props => {
    return (        
        <form onSubmit={props.addNewComment}>
            <input className="addComment"
                    onChange={props.handleChanges}
                    type="text"
                    name="newComment"
                    placeholder="Add a new comment" 
            />
        </form>
    );
};
  
export default AddNewComment; 