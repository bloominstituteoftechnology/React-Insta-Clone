import React from 'react';


 const AddComment = props => {
     return(
         <div className="form-box">
             <form onSubmit={event => props.addComment(event)} className="comment-form">
                <input type="text" name="newComment" onChange={props.changeHandler} className="add-comment" value={props.newComment} placeholder="Add a comment..."/>
             </form>
         </div>
     );
 }
 export default AddComment;


//  AddComment.propTypes = {
    
//  }