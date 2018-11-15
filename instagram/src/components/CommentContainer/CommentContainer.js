import React from "react";

const CommentContainer = props => {
    // console.log("Comments: ", props)
    return <div>
    CommentContainer is good to go
    {props.propsInCC.username}
    {props.propsInCC.text}
    </div>;
  }

export default CommentContainer;