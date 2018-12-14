import React from 'react';
import './AddComment.css';

const AddComment = props =>{
 return(
      <div className="new-comment">
        <form>
            <input type="text" value={props.comment} onChange={""} placeholder="Add a comment..." />
        </form>
        <span className="dots">...</span>
      </div>
 )
}

export default AddComment;