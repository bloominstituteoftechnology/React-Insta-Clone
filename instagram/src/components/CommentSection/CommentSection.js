import React from "react";
import PropTypes from "prop-types";
import CommentContent from "./CommentContent";

const CommentSection = props =>{
    return (
        props.comments.map(comment => {
            return (
                <CommentContent comment={comment}/>
            );
        })
    )
}

CommentSection.propTypes = {
    comment: PropTypes.arrayOf(PropTypes.object)
  };

export default CommentSection;