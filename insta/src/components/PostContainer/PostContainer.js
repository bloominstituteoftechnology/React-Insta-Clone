import React from 'react';

const PostContainer = props =>{
    return(
            <div>
                <div className="post-header">
                    <img src={props.obj.thumbnailUrl} />
                    <h1>{props.obj.username}</h1>
                </div>
                <div className="post-img-container">
                    <img src={props.obj.imageUrl} />
                </div>
            </div>
    )
        
}
export default PostContainer;