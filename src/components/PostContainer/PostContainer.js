import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col, ListGroup } from 'reactstrap';
import './PostContainer.css';

const PostContainer = props => {

    const post = props.post;

        return (
        <div key={post.username + post.thumbnailUrl + post.imageUrl + post.likes + post.timestamp}>
            {/* anytime we have an array of elements, REACT NEEDS A KEY! for each elem*/}
             <Row>
             <Col className="side">
             </Col>
                <Col className="post-sides">
                <Card body>
                <div className="post-top">
                <CardTitle className="user-name1">{post.username}</CardTitle> 
                <img className="thumb-nail" src={post.thumbnailUrl}/> 
                </div>
                <CardImg class="col" src={post.imageUrl}/>
                <div class="post-bottom">
                <span class="likes">{post.likes} likes</span>
                </div>
                <ListGroup>
                <CommentSection comments={post.comments}/>
                </ListGroup>
                <span class="time">{post.timestamp}</span>
                </Card>
                </Col>
                <Col className="side">
                </Col>
            </Row>
        </div>
    );
}
    



export default PostContainer;