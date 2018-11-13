import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import './PostContent.css';
import PropTypes from 'prop-types';
const PostContent = props => {
    
    return(
        <div className="content-container">
            <div className="user">
                <div className="user-thumbnail">
                    <img src={props.data.thumbnailUrl} alt=""/>
                </div>
                <div className="user-name">
                    <h2>{props.data.username}</h2>
                </div>
            </div>
            <div className="main-img">
                <img src={props.data.imageUrl} alt=""/>
            </div>
            <div className="comments-container">
                <div className="buttons">
                <a href="">
                    <i className="far fa-heart icon" />
                </a>
                <a href="">
                    <i className="far fa-comment"></i>
                </a>
                </div>
                <div className="likes">
                    <p>{props.data.likes}</p>
                </div>
                 <CommentSection data={props.data} comments={props.comments}/>
            </div>
            
        </div>
    );
};
 PostContent.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        comments: PropTypes.array.isRequired,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
     })
};
 export default PostContent; 