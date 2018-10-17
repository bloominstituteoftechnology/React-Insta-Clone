import React from 'react';


 const AddComment = props => {
     return(
         <div>
             <form onSubmit={event => props.addComment(event)}>
                <input type="text" name="newComment" onChange={props.changeHandler} id="" value={props.newComment}/>
             </form>
         </div>
     );
 }
 export default AddComment;


//  AddComment.propTypes = {
    
//  }