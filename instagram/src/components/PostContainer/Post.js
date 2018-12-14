import React from "react";
import CommentSection from './../CommentSection/CommentSection';
import moment from './../../../node_modules/moment';
import PropTypes from 'prop-types';
import './Post.css'

const Post = props => {
    return(
        <div className="post-container container">
            <div className="user-info ">
                <div><img src={props.thumbnailUrl} alt=""/></div>
                <div>{props.username}</div>
            </div>
            <div className="post-image">
                <img src={props.imageUrl} alt=""/>
            </div>  
            <div className="likes container">
                <div className="icons">
                    <i className="fa fa-heart-o"></i>
                    <i className="fa fa-comment-o"></i>
                </div>
                <div className="count">
                {props.likes} likes </div>
            </div>
            <div className="comments">
                <CommentSection comments={props.comments}/>
            </div>    
            <div className="timestamp">
                {moment().startOf('hour').fromNow()}
            </div>
        </div>
    )
}
Post.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        links: PropTypes.number
    }) 
};
export default Post;