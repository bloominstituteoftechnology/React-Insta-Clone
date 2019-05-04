import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';
import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="full-post">
            
            <Post data={props.data} 
            likes={props.likes} 
            handleLikes={props.handleLikes} 
            index={props.index}/>
            
            <CommentSection 
            comments={props.comments} 
            data={props.data}
            addComment={props.addComment} 
            handleChange={props.handleChange}
            key= {props.index}
            likes={props.likes}
            timestamp={props.timestamp}
            index={props.index}/>
            
        </div>
    );
}

PostContainer.propTypes = {
    data: PropTypes.object,
    comments: PropTypes.array,
    addComment: PropTypes.func,
    handleChange: PropTypes.func,
    index: PropTypes.number,
    likes: PropTypes.number,
    timestamp: PropTypes.string
    
    
}
export default PostContainer;