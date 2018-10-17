import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import LikeSection from './LikeSection';
import TimeStamp from './TimeStamp';
import PostImage from './PostImage';
import UserPostHeader from './UserHeader';



const PostContainer = props => {
    return(
        <div className="post-container">
            <UserPostHeader thumbnailUrl={props.usrData.thumbnailUrl} username={props.usrData.username} />
            <PostImage image={props.usrData.imageUrl} />
            <LikeSection likes={props.usrData.likes}/>
            <CommentSection comments={props.usrData.comments} idx={props.idx} />
            <TimeStamp timestamp = {props.usrData.timestamp} />  
        </div>
    );
}

export default PostContainer;


PostContainer.propTypes = {
    usrData: PropTypes.object.isRequired,
    username: PropTypes.number,
    comments: PropTypes.array,
    likes: PropTypes.number
}