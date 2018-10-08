import React from 'react';
import Comment from './CommentSection/Comment';

const Post= props => { 
    console.log(props.dummyData);
    return (
        <div>
            {props.dummyData.map(info => {
                return (
                <div>
                    <div>
                        <img src = {info.thumbnailUrl} alt = 'thumbnail'/>
                        <p>{info.username}</p>
                    </div>
                    <img src = {info.imageUrl} alt = 'post-image'/>
                    <p>{info.likes} likes</p>
                    <div>
                        <Comment comments={info.comments}/>
                    </div> 
                </div>
                );
            })}
        </div>
    );
}

export default Post;