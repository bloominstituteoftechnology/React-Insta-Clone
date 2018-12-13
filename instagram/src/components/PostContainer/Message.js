import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

const Message = props => (
  <div className="messageContainer">
    <div className="message">
      <span className="username">{props.message.username}</span>
      <span className="text">{props.message.text}</span>
    </div>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(PropTypes.object)
};

export default Message;
