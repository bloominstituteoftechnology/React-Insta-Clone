import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';

import moment from 'moment'; 
import PropTypes from 'prop-types';

import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post">
            <div className="post__top">
                <img className="post__top--thumb" src={props.post.thumbnailUrl} alt={props.post.username}/>
                <div className="post__top--user">{props.post.username}</div>
            </div>
            <img className="post__img" src={props.post.imageUrl} alt="Post"/>
            <div className="post__bottom">
                <div 
                    className="far fa-heart post__bottom--heart" 
                    onClick={event => props.addLike(event, props.index)}></div> &nbsp;&nbsp;
                <div className="far fa-comment"></div>
                <div className="post__bottom--likes">{props.post.likes} likes</div>
            </div>
            <CommentsSection 
                comments={props.post.comments}
                removeComment={props.removeComment}
                parentIndex={props.index}
            />
            <div className="post__time">{moment(props.post.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow().toString()}</div>
            <form className="post__add-new-comment" onSubmit={event => props.addNewComment(event, props.index)}>
                <input 
                    className="post__add-new-comment-input"
                    placeholder="Add a comment ..."
                    type="text"
                    name={props.index}
                    // { `commentText[${props.index}]` }
                    value={props.commentText[props.index]}
                    onChange={props.handleInputChangeComment}
                />           
            </form>
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
