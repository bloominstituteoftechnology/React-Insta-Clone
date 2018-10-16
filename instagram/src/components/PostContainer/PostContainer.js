import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import TimeStamp from './TimeStamp';
import PostImage from './PostImage';


const PostContainer = props => {
    return(
        <div className="post-container">
            <div className="user-container">
                <img src={props.usrData.thumbnailUrl} alt=""/>
                <h1>{props.usrData.username}</h1> 
            </div>
            <PostImage image={props.usrData.imageUrl} />
            <LikeSection likes={props.usrData.likes}/>
            <CommentSection usrData={props.usrData} />
            <TimeStamp timestamp = {props.usrData.timestamp} />
        </div>
    );
}

export default PostContainer;


PostContainer.propTypes = {
    usrData: PropTypes.object,
    username: PropTypes.number,
    comments: PropTypes.array,
    likes: PropTypes.number
}