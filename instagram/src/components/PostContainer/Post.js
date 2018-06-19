import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import dummyData from '../../dummy-data';
import CommentSection from '../CommentSection/Comment';

const PostContainer = props => {
    return (
        <div className='post-container container-fluid'>
            <Card className='card'>
                <div className="card-header">
                    <img className="thumbnail" src={props.userData.thumbnailUrl} />
                    <span className="bold-text">{props.userData.username}</span>
                </div>
                <CardImg top width="100%" src={props.userData.imageUrl} alt="Card image cap" />
                <CardBody>
                    <div>
                        <i className="far fa-heart fa-lg mr-3"></i>
                        <i className="far fa-comment fa-lg fa-flip-horizontal"></i>
                    </div>
                    <p className='bold-text mt-2 mb-2'>{props.userData.likes + ' likes'}</p>
                    <CommentSection comments={props.userData.comments} />
                </CardBody>
            </Card>
        </div>

    )
}

export default PostContainer;