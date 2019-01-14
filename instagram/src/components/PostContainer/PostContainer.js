import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import '../../App.css'
import PropTypes from 'prop-types';

const PostContainer = props =>{
    console.log(props.post.comments);
    return (
      <div className="post">
        <div className="post-header">
            <img src={props.post.thumbnailUrl}/>
            <p>{props.post.username}</p>
        </div>
        <div className="post-img">
            <img src={props.post.imageUrl} alt=""/>
        </div>
            {console.log(props.post)}
            <CommentSection timeStamp={props.post.timestamp} likes={props.post.likes}  comments={props.post.comments} /> 
      </div>
    );
}

PostContainer.propTypes={
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
                username: PropTypes.string,
                text: PropTypes.string
    })),
    timeStamp: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number,
}


export default PostContainer;
