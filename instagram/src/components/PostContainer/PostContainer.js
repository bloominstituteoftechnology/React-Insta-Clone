import React from 'react';
import activity from '../SearchBar/activity.png';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div>
            Posts
            {props.data.map((post, index) => (
                <div key={post.username + index}>
                    <div>
                        <img src={post.thumbnailUrl}/>
                        {post.username}
                    </div>
                    <div>
                        <img src={post.imageUrl}/>
                    </div>
                    <div>
                        <button><img src={activity}/></button>
                    </div>
                    <div className="likes">
                        {post.likes}
                    </div>                    
                    <CommentSection comments={post.comments} />
                    <div className="timestamp">
                        {post.timestamp}
                    </div>                    
                </div>
            ))}
        </div>
    );
};

export default PostContainer;