import React from 'react';
import PostHeader from '../PostHeader/PostHeader';
import CommentsSection from '../CommentsSection/CommentsSection';
import './post-container.css';


const PostContent= props => {
    return (
        <div>
            <PostHeader
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <img
                    alt="Thumbnail"
                    className="post-image"
                    src={props.post.imageUrl}
                />
            </div>
            {/* <CommentsSection 
                comments={props.post.comments} */}
            />
        </div>
    );
}

export default PostContent;