import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import './PostContent.css';
import PropTypes from 'prop-types';
// import moment from 'moment';
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
                {props.data.comments.map(item=>{
                    return <CommentSection key={`${item.username}${item.text}`} data={item}/>;
                })}
                <div className="time">
                    <p className="time-text">{props.data.timestamp}</p>
                    
                </div>
                <div className="add-comment">
                    <input type="text" className="input-comment" placeholder="Add a comment..."/>
                    <a href="">
                        <i className="fas fa-ellipsis-h settings"></i>
                    </a>
                </div>
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
        timestamp: PropTypes.string
    })
};

export default PostContent;