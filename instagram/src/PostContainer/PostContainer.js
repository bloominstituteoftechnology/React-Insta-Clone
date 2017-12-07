//Each PostContainer component will then pass the array of comments on
//each post object as a prop to an instance of the CommentSection component.
import React from 'react';
import CommentSection from '../CommentSection/CommentSection';//go up two to source then can access Comment
import './PostContainer.css'; // stay on folder 

const PostContainer = ( postData) => {
    return (
        <div className= "post-container">
            <div className= "thumbnail">
                <img src={postData.thumbnailURL}/>
                <span><b>{postData.username}</b></span>
                </div>
                <div className="image">
                    <img src={postData.imageUrl}/>
                </div>
                <CommentSection comments={postData.comments}/>
        </div>
    );

}
export default PostContainer;
