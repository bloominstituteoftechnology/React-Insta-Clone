import React from 'react';
import postData from './application-data';
import CommentSection from './CommentSection';

const PostContainer = (props) => {
    return (
        <div className="post-card" key={props.postData.username}>
            <div className="post-header">
                <li><div className="image-div"><img key={props.postData.thumbnailURL} className="prof-pic" src={props.postData.thumbnailUrl}/></div><div className="username">{props.postData.username}</div></li>
            </div>
            <div className="image-border">
                <img className="image" key={props.postData.imageURL} src={props.postData.imageUrl} alt="picture" />
            </div>
            <CommentSection comments={props.postData.comments} likes={props.postData.likes} time={props.postData.timestamp} changeModalState={props.changeModalState}/>
        </div>
    );
}

export default PostContainer;