import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { Row, Col, Container } from 'reactstrap';
import './PostContainer.css';

const LikeSection = props => {
  return [
    <Container>
      <Row key="likes-icons-container">
        <Col sm={2} className="flex-evenly">
          <FontAwesomeIcon icon={faHeart} className="custom-icon" onClick={props.incrementLike} />
          <FontAwesomeIcon icon={faComment} className="custom-icon" />
        </Col>
        </Row>
        <Row key="likes-container">
        <Col sm={2}>
          {props.likes} likes
        </Col>
      </Row>
    </Container>
  ];
};

export default LikeSection;
