import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';

import {
    Card, CardText, CardBody, CardSubtitle, Row, CardImg
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
                <CardImg width="100%" src={props.data.imageUrl} alt='' />
                <CardBody className='bottom-content'>
                    <Row className='comment-imgs'>
                        <img className='heart-icon' src="https://png.icons8.com/metro/50/000000/like.png" alt='' />
                        <img className='chat-icon' src="https://png.icons8.com/metro/50/000000/topic.png" alt='' />
                    </Row>
                    <CardText className='post-likes'>
                        <strong>{props.data.likes} likes </strong>
                    </CardText>
                    {props.data.comments.map(comment => <CommentSection key={Math.random()} comment={comment} />)}
                    <CardText className='time-commented'>
                        {props.data.timestamp}
                    </CardText>
                    <Row className='add-comment-section'>
                        <input className='add-comment' type='text' placeholder='Add a comment...' />
                        <img className='more-icon' src="https://png.icons8.com/metro/50/000000/more.png" alt='' />
                    </Row>
                </CardBody>
            </Card>
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
    })
};

export default Post;