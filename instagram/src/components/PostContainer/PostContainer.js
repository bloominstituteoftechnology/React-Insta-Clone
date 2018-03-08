import React from 'react';
import CommentSection from '../CommentSection/CommentSection.js';
import '.PostContainer.css'

const PostContainer = ({ dummydata }) => {
    return (
        <article className="post">
            <header className="post__user">
                <img src={dummydata.thumbnailUrl} alt="user" className="post__User__thumbnail" />
                <div className="post__user-text"><b>{dummydata.username}</b></div>
            </header>
            <div>
                <img src={dummydata.imageUrl} alt="post" className="post__user__image" />
            </div>
            <div>
                <CommentSection comments={dummydata.comments} timestamp={dummydata.timestamp} likes={dummydata.likes} />
            </div>
            </article>
    );
}
 
export default PostContainer;