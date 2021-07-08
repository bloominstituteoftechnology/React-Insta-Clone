import React from 'react'
import PropTypes from "prop-types";
const Comment = props => {
    return (<div>
        <p><strong>{props.passedUser}</strong>&nbsp;&nbsp;{props.passedText}</p>
    </div>
    )
};

Comment.propTypes = {
    passedUser: PropTypes.string,
    passedText: PropTypes.string
};


export default Comment