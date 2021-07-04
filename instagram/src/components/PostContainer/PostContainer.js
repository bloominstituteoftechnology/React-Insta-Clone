import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    return (
        <div className="post-container">
        
        {props.postData.map((post, id) => {
            if(props.currentSearch === null || 
                props.currentSearch.trim() === "" || 
                    (post.username.includes(props.currentSearch.trim()) && 
                        props.currentSearch.trim().length >= 3 )) {
            return (
            <div key={'container-' + id} id={id} className="post">
                <PostHeader 
                username={post.username} 
                thumbnail={post.thumbnailUrl} 
                key={'post' + id}
                />
                
                <div className="content-img">
                    <img src={post.imageUrl} alt="post"/>
                </div>

                <CommentSection 
                key={'comments-' + id} 
                id={'comments-' + id} 
                likes={post.likes} 
                comments={post.comments} 
                timestamp={post.timestamp}
                />
            </div>
            )
          }
        return null;
        }
        )}
      </div>

    );
}

export default PostContainer;