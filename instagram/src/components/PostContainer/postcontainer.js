import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import styles from './postcontainer.css';

const PostContainer = (props) =>{
    return (
        <div className = "post-container">
            <div className="user-header"><div ><img src={props.dummyObj.thumbnailUrl} className="thumbnail" /></div><div className="username">{props.dummyObj.username}</div></div>
            <div><img className="main-image" src={props.dummyObj.imageUrl} /></div>
            
            <div className="likes">{props.dummyObj.likes} likes</div>
            <CommentSection key={props.dummyObj.key} comments ={props.dummyObj.comments}/>
        </div>
    );
}

export default PostContainer;