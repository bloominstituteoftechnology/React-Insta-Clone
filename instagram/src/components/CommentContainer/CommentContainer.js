import React from "react";
import './CommentContainer.css';
import PropTypes from 'prop-types';

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


  CommentContainer.propTypes = {
    propsInCC: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string,
        
    })
  }
export default CommentContainer;