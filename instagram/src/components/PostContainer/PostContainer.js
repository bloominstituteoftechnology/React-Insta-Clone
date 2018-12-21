import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import instaHeart2 from './insta-heart.png';
import instaReply from './insta-reply.png';
import CommentSection from '../CommentSection/CommentSection';
import AddComment from '../CommentSection/AddComment';

const PostContainer = props => {
    console.log(props);
    return (
        <div className="postcontainer">
            <div className="user-info">
                <img src={props.dummy.thumbnailUrl} className="thumbnail" alt="dummy thumbnail"/>
                <p className="username">{props.dummy.username}</p>
            </div>
            <div>
                <img src={props.dummy.imageUrl} className="imageurl" alt="dummy url pic" />
            </div>
            <div className="png-images">
                <img className="insta-heart2" alt="instagram heart" src={instaHeart2} />
                <img className="insta-reply" alt="instagram reply" src={instaReply} />
            </div>
            <div>
                <p>{props.dummy.likes} likes </p>
            </div>
                {props.dummy.comments.map(comment => (
                <CommentSection key={comment.text} comment={comment} />
                ))}
            <div>
                <AddComment />
            </div>             
        </div>
    )
}

PostContainer.propTypes = {
    dummy: PropTypes.shape({
        username: PropTypes.string,
        timestamp: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        likes: PropTypes.number,
        imageUrl: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;