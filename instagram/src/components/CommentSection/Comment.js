import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const Comment = props => {
    return (
        <Row>
            <Col sm={2}>
                {props.comment.username}
            </Col>
            <Col sm={5}>
                {props.comment.text}
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