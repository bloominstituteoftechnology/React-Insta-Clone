import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';

import moment from 'moment'; 
import PropTypes from 'prop-types';

import './PostContainer.css';

const PostContainer = props => {
    
    var timeJ = moment(props.post.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow().toString();

    return (
        <div className="post">
            <div className="post__top">
                <img className="post__top--thumb" src={props.post.thumbnailUrl} alt={props.post.username}/>
                <div className="post__top--user">{props.post.username}</div>
            </div>
            <img className="post__img" src={props.post.imageUrl} alt="Post"/>
            <div className="post__bottom">
                <div className="far fa-heart"></div> &nbsp;&nbsp;
                <div className="far fa-comment"></div>
                <div className="post__bottom--likes">{props.post.likes} likes</div>
            </div>
            <CommentsSection 
                comments={props.post.comments}
            />
            <div className="post__time">{timeJ}</div>
            {/* props.post.timestamp,  "MMMM Do YYYY[,] HH:MM:SS a").fromNow( */}
            <div className="post__add-new-comment">Add a comment ...</div>
        </div>
    );
}


PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired
    })
};

export default PostContainer;
