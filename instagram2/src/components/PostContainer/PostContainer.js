import React from 'react';
import './PostContainer.css';
import Post from './Post';




const PostContainer = props => {
    return (
        <div className="master-container">
            <div className="header">
                <div className="thumbnail-div">
                    <img src={props.thumbnailUrl} alt="thumbnail" className="thumbnail"/>
                </div>
                <div className="username">
                    {props.username}
                </div>
            </div>

            <div className="body">
                <div className="body-image">
                    {props.posts.map(item => <Post key={item.imageUrl} post={item} />)}
                </div>
            </div>
        </div>
    );
}
export default PostContainer;

// the props we are passing in are the posts from app and then mapping
// create new array of post components
//iterate over data
//pass each obj as prop to instance of PC