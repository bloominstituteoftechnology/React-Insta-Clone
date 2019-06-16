//post input
import React from 'react';

const PostInput = props => {
  return(
  <div className="form">
    <form>
      <input type="text" value={props.comment} onChange={props.changeHandler} placeholder="Add comment" name="comment"/>
    </form>
    <button onClick={props.change}>Click</button>
  </div>

  );

  }

export default PostInput;
