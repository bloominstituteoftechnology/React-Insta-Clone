import React from "react";

const Comment = props => (
    <div className="comment-container"> {/*Container which contains the entire post content*/}
        <div className="comment-username">{props.username}</div>
        <div className="comment-text">{props.text}</div>
    </div>
);

{/*VALIDATING PASSED PROP TYPES*/}
Comment.propTypes = {
        username: PropTypes.string,
        text: PropTypes.string
};

export default Comment