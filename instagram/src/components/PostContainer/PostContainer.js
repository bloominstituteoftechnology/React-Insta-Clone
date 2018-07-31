import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, FormGroup, Input, Container } from 'reactstrap';
import './PostContainer.css';

const PostContainer = props => {
    const { username } = props.postProp;
    const { likes } = props.postProp;
    const { thumbnailUrl } = props.postProp;
    const {imageUrl} = props.postProp;
    return (
        <Container  >
            <Row>
                <Col>
                    <img className="profile-img" src={thumbnailUrl} />
                </Col>
                <Col>
                    {username}
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={imageUrl} rounded />
                </Col>
            </Row>
            <Row>
                <Col>
                    {likes}
                </Col>
            </Row>
        </Container>);
}

export default PostContainer;