import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import instaHeart2 from './insta-heart.png';
import instaReply from './insta-reply.png';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    console.log(props);
    return (
        <div className="postcontainer">
            <div className="user-info">
                <img src={props.data.thumbnailUrl} className="thumbnail" alt="data thumbnail"/>
                <p className="username">{props.data.username}</p>
            </div>
            <div>
                <img src={props.data.imageUrl} className="imageurl" alt="data url pic" />
            </div>
            <div className="png-images">
                <img className="insta-heart2" alt="instagram heart" src={instaHeart2} />
                <img className="insta-reply" alt="instagram reply" src={instaReply} />
            </div>
            <div>
                <p>{props.data.likes} likes </p>
            </div>             
                <CommentSection comments={props.data.comments} />              
                      
        </div>
    )
}

PostContainer.propTypes = {
    data: PropTypes.shape({
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