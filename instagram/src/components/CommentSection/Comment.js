import React from 'react';
import PropTypes from 'prop-types';

import { ListGroupItem } from 'reactstrap';

const Comment = props => {
    return(
        <ListGroupItem><strong>{props.comment.username}:</strong> {props.comment.text}</ListGroupItem>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })
}

export default Comment;