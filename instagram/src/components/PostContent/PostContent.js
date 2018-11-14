import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import LikesContainer from './LikesContainer';
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
                
                <LikesContainer likes={props.likes}/>

                <CommentSection data={props.data} comments={props.comments}/>
                
                {/* {props.data.comments.map(item=>{
                    return <CommentSection key={`${item.username}${item.text}`} data={item}/>;
                })}
                <div className="time">
                    <p className="time-text">{props.data.timestamp}</p>
                    
                </div>
                <form  className="add-comment" onSubmit={props.addItem}>
                    <input 
                    className="input-comment" 
                    placeholder="Add a comment..."
                    type="text" 
                    name="inputText"
                    value={props.inputText}
                    onChange={props.handleChange}
                    />
                    <a href="">
                        <i className="fas fa-ellipsis-h settings"></i>
                    </a>
                </form> */}
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