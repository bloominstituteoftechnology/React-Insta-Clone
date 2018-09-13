import React from 'react';
import EachComment from './EachComment.js';
import './CommentSection.css';

const CommentInput = (props) => {
  console.log(props);
   return(
     <div className="Comment">
{props.userData.map(userData => <EachComment userData={userData} />)}
       <input type='text' name="text" onChange={props.handleChange} />
       <button onClick={props.addNewComment}>Submit</button>

</div>
)}
export default CommentInput
