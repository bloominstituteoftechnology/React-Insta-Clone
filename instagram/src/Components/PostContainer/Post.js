import React from 'react';


const Post = props => {
    return (
        <div>
            <div className="post-header"> 
                <img src= {props.post.thumbnailUrl} alt="thumbphoto" className="logo"/>
                {props.post.username}
            </div>
                <img src= {props.post.imageUrl} alt="postphoto" />
            
        </div>
    );
};

export default Post;    