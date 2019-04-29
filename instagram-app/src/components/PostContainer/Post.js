import React from 'react'; 
import CommentSection from '../CommentSection/CommentSection'; 

const Post = props => {
    return(
        <div className="postWrapper">
            <div ClassName="postContent">
                <p>{props.post.username}</p>
            </div>

            <div className="comments">
            <CommentSection comments={props.post.comments}/>
            </div>
        </div>
    );
}; 

export default Post; 