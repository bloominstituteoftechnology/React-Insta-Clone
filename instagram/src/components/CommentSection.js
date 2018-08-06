import React from "react";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div>
      {props.comments.map(each => {
        return <div key={each.id}>{each.text}</div>;
      })}
    </div>
  );
};

CommentSection.propTypes = {
    comments:  PropTypes.arrayOf(PropTypes.object),
};

export default CommentSection;
