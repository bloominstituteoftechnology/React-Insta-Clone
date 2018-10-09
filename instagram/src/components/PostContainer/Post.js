import React from 'react';
import Comment from './CommentSection/Comment';
import './Post.css' 

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
                        <Comment comments={info.comments}/>
                    </div> 
                </div>
                );
            })}
        </div>
    );
}

export default Post;