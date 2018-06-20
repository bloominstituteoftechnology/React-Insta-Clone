import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import PropTypes from 'prop-types';

import {
    Card, CardBody, CardSubtitle, Row, CardImg
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

                    <Row>
                        <LikeSection id={props.id} likes={props.data.likes} />
                    </Row>

                    <CardBody className='comment-section'>
                        <CommentSection timestamp={props.data.timestamp} id={props.id} name={props.data.username} comments={props.data.comments} />
                    </CardBody>

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
        liked: PropTypes.boolean,
        timestamp: PropTypes.string,
        comments: PropTypes.array
    })
};

export default Post;