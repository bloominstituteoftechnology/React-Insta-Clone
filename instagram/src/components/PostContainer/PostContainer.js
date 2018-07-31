import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

const PostContainer = props => {
    const { username } = props.postProp;
    const { likes } = props.postProp;
    const { thumbnailUrl } = props.postProp;
    const { imageUrl } = props.postProp;
    return (
        <Container className="custom-container" >
            <Row className="flex-start">
                <Col sm={1}>
                    <img className="profile-img" alt="profilepic" src={thumbnailUrl} />
                </Col>
                <Col sm={1}>
                    {username}
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src={imageUrl} alt="instapost" className="post-img" />
                </Col>
            </Row>
            <Row>
                <Col sm={2} className="flex-evenly">
                    <FontAwesomeIcon icon={faHeart} className="custom-icon" />
                    <FontAwesomeIcon icon={faComment} className="custom-icon" />
                </Col>
            </Row> 
            <Row>
                <Col sm={2}>
                    {likes} likes
                </Col>
            </Row>
            <CommentSection comments={props.postProp.comments} />
        </Container>

    );
}

export default PostContainer;