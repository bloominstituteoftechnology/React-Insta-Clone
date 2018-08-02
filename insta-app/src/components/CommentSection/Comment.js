import React from "react";

const Comment = props => {
  return (
    <form onSubmit={props.handleSubmitBtn}>
      <input
       className="input-1"
       onChange={props.handleChangeComment}
       type="text" 
       value={props.value}
       placeholder="Add comment... " 
       />
    </form>
  );
};

export default Comment;
