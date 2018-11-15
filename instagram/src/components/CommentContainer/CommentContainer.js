import React from "react";

const CommentContainer = props => {
    // console.log("Comments: ", props)
    return <div>
   
    {props.propsInCC.username}
    {props.propsInCC.text}
    </div>;
  }

export default CommentContainer;