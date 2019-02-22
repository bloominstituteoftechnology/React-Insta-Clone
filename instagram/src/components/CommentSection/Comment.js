import React from "react";
import PropTypes from "prop-types";
import "./Comment.css"

const Comment = props => (
    <div className="comment-container"> {/*Container which contains the entire post content*/}
        <div className="comment-username title-font">{props.username}</div>
        <div className="body-font">{props.text}</div>
    </div>
);

// eslint-dsiable-next-line
{/*VALIDATING PASSED PROP TYPES*/}
Comment.propTypes = {
        username: PropTypes.string,
        text: PropTypes.string
};

export default Comment