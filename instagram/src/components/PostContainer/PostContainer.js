import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import instaHeart2 from './insta-heart.png';
import instaReply from './insta-reply.png';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="postcontainer">
            <div className="user-info">
                <img src={props.dummy.thumbnailUrl} className="thumbnail" alt="dummy thumbnail"/>
                <p className="username">{props.dummy.username}</p>
            </div>
            <div>
                <img src={props.dummy.imageUrl} className="imageurl" alt="dummy url pic" />
            </div>
            <div>
                <img className="insta-title" alt="instagram title" src={instaReply} />
                <img className="insta-title" alt="instagram title" src={instaHeart2} />
            </div>
            <div>
                <p>{props.dummy.likes} likes </p>
            </div>
            {props.dummy.comments.map(comment => (
                    <CommentSection key={comment.text} comment={comment} />
                ))}
            <div>

            </div>             
        </div>
    )
}

PostContainer.propTypes = {
    dummy: PropTypes.shape({

        username: PropTypes.string
    })
}

export default PostContainer;