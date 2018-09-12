import React from 'react';
import CommentContainer from '../CommentSection/CommentContainer';


 const Post = props => {
   
    return (
        <div>
            <div className="post-header"> 
                <img src= {props.post.thumbnailUrl} alt="thumbphoto" className="logo"/>
                {props.post.username}
            </div>
            <div>
                <img src= {props.post.imageUrl} alt="postphoto" />
            </div>
            {props.post.timestamp}
            <CommentContainer comments = {props.post.comments}/>
        </div>
    );
};

export default Post;    