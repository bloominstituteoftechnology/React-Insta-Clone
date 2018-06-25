import React from "react";
import { CardText } from "reactstrap";
// import PropTypes from "prop-types";
import Username from "../Styles/Reusables/Username";

const Comment = props => {
  return (
    <CardText>
      <Username>{props.username}</Username> {props.text}
    </CardText>
  );
};

// Comment.propTypes = {
//   comment: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired
//   })
// };

export default Comment;
