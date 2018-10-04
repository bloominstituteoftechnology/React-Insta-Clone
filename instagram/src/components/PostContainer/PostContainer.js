import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader'
import PropTypes from "prop-types";
import './post.css';

const PostContainer = (props) => {
    return (
        <section className="post-container">
            <section className="post-header">
                <PostHeader thumbnail={props.thumbnail} username={props.username}/>
            </section>
            <section>
                <img src={props.image} alt="instagram" />
            </section>
            <section className="comment-container">
                <CommentSection timestamp={props.timestamp} likes={props.likes} comments={props.comments}/>
            </section>
        </section>
    )
}

PostContainer.propTypes = {
    username: PropTypes.string.isRequired,
    likes: PropTypes.number,
    image: PropTypes.image,
    thumbnail: PropTypes.image,
    comments: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
    }))
};

export default PostContainer;