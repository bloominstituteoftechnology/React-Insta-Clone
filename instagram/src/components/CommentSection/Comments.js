import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'reactstrap';

import Comment from './Comment';

const Comments = props => {
    return(
        <ListGroup>
            {props.comments.map((c, i) => <Comment comment={c} key={i}/>)}
        </ListGroup>
    )
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string, 
        username: PropTypes.string
    }))
}
export default Comments;