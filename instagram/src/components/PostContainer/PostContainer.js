import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
    return (
        <div className='post-container'>
            {props.posts.map((item,i) => {
                return(
                    <div key={i}>
                    <div>{item.username}</div>
                    <img className ='thumbnail' src={item.thumbnailUrl} alt ='user thumbnail img'/>
                    <img className = 'post-img' src={item.imageUrl} alt='Post Img'/>
                    <div>{item.likes} likes</div>
                    <div><CommentSection comments={this.posts}/></div>
                    <div>{item.timestamp}</div>
                </div>
                )}
            )}
        </div>
    )
}

export default PostContainer;