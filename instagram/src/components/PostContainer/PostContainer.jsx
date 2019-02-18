import React from 'react';
import CommentSection from "./components/CommentSection/CommentSection.jsx";
import "./PostContainer.css";

const PostContainer = () => {
    return (
        <div className="post-container">
            <div className="post-header">
                <img className="post-user-avatar" src="#" alt="User's avatar" />
                <h2 className="post-user-name">Instagram Username</h2>
            </div>
            <div className="post-image-container">
                <img className="post-image" src="#" alt=""/>
            </div>
            <CommentSection />
        </div>
    );
};

export default PostContainer;