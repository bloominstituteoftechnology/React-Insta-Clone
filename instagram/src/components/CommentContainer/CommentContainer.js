import React from "react";
import './CommentContainer.css';


const CommentContainer = props => {
    // console.log("Comments: ", props)
    return (
      <div className="comments">
        <div className="cusername">
          {props.propsInCC.username}
        </div>
        <div className="text">
          {props.propsInCC.text}
        </div>
        
        
      </div>

    )
     
  }

export default CommentContainer;