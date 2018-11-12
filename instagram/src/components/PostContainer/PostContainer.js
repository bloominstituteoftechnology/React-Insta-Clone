import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';

const PostContainer = props => {
    return(
        <article>
            <div className="post__wrapper">
            <img className="post__thumbnail" src={props.post.thumbnailUrl} alt= {'icon of '+ props.post.username}/>
            <h1 className="post__poster">{props.post.username}</h1>
            </div>
            <img className="post__image" src={props.post.imageUrl} alt="coffee"/>
        <CommentSection  className="post__comments" comments = {props.post.comments}/>
        </article>
    )
}
PostContainer.propTypes ={
    post: PropTypes.object
}
export default PostContainer;