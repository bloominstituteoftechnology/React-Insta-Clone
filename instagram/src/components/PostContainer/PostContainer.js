import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className="custom-post">
            <div>
                <img src={props.dummyData.thumbnailUrl} alt="user thumbnail"/>
                <p>{props.dummyData.username}</p>
            </div>
            <div>
                <img src={props.dummyData.imageUrl} alt="post image"/>
            </div>
            <div>
                <p>{props.dummyData.likes}</p>
                <CommentSection dummyData={props.dummyData.comments} />
            </div>            
        </div>
    )
}
 
export default PostContainer;
