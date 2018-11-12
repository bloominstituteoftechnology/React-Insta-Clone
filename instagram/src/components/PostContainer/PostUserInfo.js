import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const PostUserInfo = props => {
    return (
        <Container>
            <Row>
                <Col xs="1">
                    <img src={props.thumbnailUrl} alt="" />
                </Col>
                <Col xs="3">
                    <h2>{props.username}</h2>
                </Col>
            </Row>
        </Container>
    );
};

export default PostUserInfo;
