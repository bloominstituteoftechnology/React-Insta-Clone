import React from 'react';  

const AddNewComment = props => {
    return (        
        <input className="addComment"
                type="text"
                name="newComment"
                placeholder="Add a new comment" 
        />
    );
};
  
export default AddNewComment; 