import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    const { username } = props.postProp;
    const { likes } = props.postProp;
    const { thumbnailUrl } = props.postProp;
    const { imageUrl } = props.postProp;
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
                    <img src={imageUrl} />
                </Col>
            </Row>
            <Row>
                <Col>
                    {likes}
                </Col>
            </Row>
            <CommentSection comments={props.postProp.comments}/>
        </Container>
        
    );
}

export default PostContainer;