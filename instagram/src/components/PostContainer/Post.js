import React from 'react';
import './Post.css';
import CommentSection from '../CommentSection/CommentSection';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
    Card, CardText, CardBody, CardSubtitle, Row, CardImg
} from 'reactstrap';

const Post = props => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = '0';
    for (let i = 0; i < months.length; i++) {
        if (props.data.timestamp.includes(months[i])) {
            month += i + 1;
        }
    }

    let time = props.data.timestamp.replace('th', '').replace(months[month - 1], month);

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
                        <img onClick={() => props.likeComment(props.data.username)} className='heart-icon' src="https://png.icons8.com/metro/50/000000/like.png" alt='' />
                        <img className='chat-icon' src="https://png.icons8.com/metro/50/000000/topic.png" alt='' />
                    </Row>

                    <CardText className='post-likes'>
                        <strong>{props.data.likes} likes </strong>
                    </CardText>

                    <CardBody className='comment-section'>
                        {props.data.comments.map((comment, index) => <CommentSection key={comment.username + index} username={props.data.username} index={index} deleteComment={props.deleteComment} comment={comment} />)}
                    </CardBody>

                    <CardText className='time-commented'>
                        {moment(time, "MMDDYYYY").fromNow()}
                    </CardText>

                    <Row className='add-comment-section'>
                        <form className='add-comment-form' onSubmit={event => {
                            event.preventDefault();
                            props.addComment(props.data.username);
                        }}>
                            <input value={props.value(props.data.username)} onChange={props.onChange} type='text' name={props.data.username} className='add-comment' placeholder='Add a comment...' />
                            <img className='more-icon' src="https://png.icons8.com/metro/50/000000/more.png" alt='' />
                        </form>
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
        comments: PropTypes.array
    })
};

export default Post;