import React from 'react';


 const AddComment = props => {
     return(
         <div>
             <form action="">
                <input type="text" name="newComment" onChange={props.changeHandler} id="" value={props.newComment}/>
             </form>
         </div>
     );
 }
 export default AddComment;


//  AddComment.propTypes = {
    
//  }