import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';

import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row
} from 'reactstrap';

const Post = props => {
    return (
        <div>
            <Card className='post-container'>
                <CardBody className='top-content'>
                    <Row>
                        <img className='post-thumb-img' src={props.data.thumbnailUrl} alt='' />
                        <CardSubtitle className='post-username'><strong>{props.data.username}</strong></CardSubtitle>
                    </Row>
                </CardBody>
                <img width="100%" src={props.data.imageUrl} alt='' />
                <CardBody className='bottom-content'>
                    <Row className='comment-imgs'>
                        <img className='heart-icon' src="https://png.icons8.com/metro/50/000000/like.png" />
                        <img className='chat-icon' src="https://png.icons8.com/metro/50/000000/topic.png" />
                    </Row>
                    <CardText className='post-likes'>
                        <strong>{props.data.likes} likes </strong>
                    </CardText>
                    {props.data.comments.map(comment => <CommentSection comment={comment} />)}
                    <CardText className='time-commented'>
                        2 hours ago
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default Post;