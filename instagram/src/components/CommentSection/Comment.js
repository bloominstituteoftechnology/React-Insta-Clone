import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col} from 'reactstrap';

const Comment = props => {
    return (
        <Row>
        <Col>
            {props.comment.text}
        </Col>
        <Col>
            {props.comment.username}
        </Col>
    </Row>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
    })

}

export default Comment;