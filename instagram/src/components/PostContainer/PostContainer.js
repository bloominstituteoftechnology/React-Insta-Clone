import React from 'react';
import PostHeader from './PostHeader';
import Likes from './Likes';
import CommentSection from '../CommentSection/CommentSection';
import moment from 'moment';
import PropTypes from 'prop-types';

let PostContainer = props => {
    return (
        <div className="post">
            <PostHeader post={props.post}/>
            <img className="postImage" alt="post" src={props.post.imageUrl}></img>
            <Likes post={props.post}/>
            <CommentSection comments={props.post.comments} />
            <p className='timestamp'>{moment(props.post.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
            <div>
                <i className="fas fa-ellipsis-h"></i>
                <input type='text' placeholder="Add a comment..."></input>
            </div>
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.object),
    })
}

export default PostContainer;