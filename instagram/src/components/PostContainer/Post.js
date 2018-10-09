import React from 'react';
import './Post.css' 
import CommentSection from './CommentSection/CommentSection';

const Post= props => { 
    console.log(props.dummyData);
    return (
        <div>
            {props.dummyData.map(info => {
                return (
                <div className = 'post'>
                    <div className = 'post-header'>
                        <img src = {info.thumbnailUrl} alt = 'thumbnail'/>
                        <p>{info.username}</p>
                    </div>
                    <img className = 'big-image' src = {info.imageUrl} alt = 'post-image'/>

                    <div className = 'comments'>
                        <div className = 'likes'>
                            <div className = "cl-buttons"></div>
                            <p>{info.likes} likes</p>
                        </div>
                        <CommentSection comments={info.comments}/> 
                    </div> 
                </div>
                );
            })}
        </div>
    );
}

export default Post;