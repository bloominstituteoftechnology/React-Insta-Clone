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

Message.propTypes = {
  message: PropTypes.object
}

// Message.propTypes = {
//   message: PropTypes.arrayOf(
//     PropTypes.shape({
//       username: PropTypes.string,
//       text: PropTypes.string
//     })
//   )
// };

export default Message;
