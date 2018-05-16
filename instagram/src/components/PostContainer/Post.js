import React from 'react';
import { Card, CardImg, CardText, CardBody, CardSubtitle, Row } from 'reactstrap';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import Heart from '../../assets/heart.png';
import Message from '../../assets/message.png';
import * as moment from 'moment';

const Post = props => {
    return (
        <Card className="card">
            <CardBody>
                <Row className="first-row"><img style={{ borderRadius: 90 }} className="img-thumbnail" src={props.post.thumbnailUrl} alt="" /><CardSubtitle className="cardSubtitle">{props.post.username}</CardSubtitle></Row>
            </CardBody>
            <CardImg className="post_image" src={props.post.imageUrl} alt="" />
            <CardBody>
                <CardImg className="heart" src={Heart} alt="" />
                <CardImg className="message" src={Message} alt="" />
                <CardText>
                    <div className="likes">{props.post.likes} likes</div>
                </CardText>
                <CardText>
                    {props.post ? props.post.comments.map(comment => (<CommentSection comment={comment} />)) : null}
                </CardText>
                <CardText>
                    {moment(props.post.timestamp, "MMMM Do YYYY, h:mm:ss a").fromNow()}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default Post; 