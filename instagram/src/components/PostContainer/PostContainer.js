import React from 'react';
// import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';
import Post from './Post';


const PostContainer = props => {
    return(
        <div className="post-container">{
            props.posts.map(post => 
                <Post 
                    key={post.timestamp}
                    post={post}
                    addNewComment={props.addNewComment}
                    handleInputComment={props.handleInputComment}/>
            )}
        </div>
    )
}

export default PostContainer;


