import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';
import Span from '../Styles/Styles';

const Comment = props => {
    return(
    <Row>
        <Col><Span weight={700}>{props.comment.username}</Span></Col>
        {props.comment.text}
    </Row>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  };

export default Comment;
