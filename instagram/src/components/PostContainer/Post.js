import React from 'react';
import PropTypes from 'prop-types';
import {
    Card, CardImg, CardBody
} from 'reactstrap';
import CommentSection from '../CommentSection/Comment';

const PostContainer = props => {
    return (
        <div className='post-container container-fluid'>
            <Card className='card'>
                <div className="card-header">
                    <img className="thumbnail" src={props.userData.thumbnailUrl} alt="thumbnail"/>
                    <span className="bold-text">{props.userData.username}</span>
                </div>
                <CardImg top width="100%" src={props.userData.imageUrl} alt="Card image cap" />
                <CardBody>
                    <div>
                        <i className="far fa-heart fa-lg mr-3"></i>
                        <i className="far fa-comment fa-lg fa-flip-horizontal"></i>
                    </div>
                    <p className='bold-text mt-2 mb-2'>{props.userData.likes + ' likes'}</p>
                    <CommentSection onChange={props.onChangeHandler} comments={props.userData.comments} />
                </CardBody>
            </Card>
        </div>

    )
}

PostContainer.propTypes = PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
}).isRequired;

export default PostContainer;