import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup } from 'reactstrap';

const Comments = props => {
    return(
        <>
            comments go here
        </>
    )
}

Comments.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string, 
        username: PropTypes.string
    }))
}
export default Comments;