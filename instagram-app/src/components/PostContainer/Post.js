import React from 'react'; 
import CommentSection from '../CommentSection/CommentSection'; 

const Post = props => {
    return(
        <div className="postWrapper">
            
            <div ClassName="postheader">
                <img className="thumbnail" src={props.post.thumbnailUrl}/>

                <p>{props.post.username}</p>
            </div>

            <img src= {props.post.imageUrl} />
            
            <div className="engagement">
            <p>{props.post.likes} likes </p>
            </div>



            <div className="comments">
            <CommentSection comments={props.post.comments}/>
            </div>
        </div>
    );
}; 

export default Post; 