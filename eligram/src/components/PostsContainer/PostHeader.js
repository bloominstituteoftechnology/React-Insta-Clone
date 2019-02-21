import React from 'react';



const PostHeader = props => {
    return (
         <div className = "post-header">
            <div className= "tiny-image">
                <img className="thumbnail" src = {props.thumbnailURL} alt="Thumbnail">

                </img>
            </div>
        // what html you want for header, src = {props.thumbnailURL}
            <div className = "header-username">{props.username}</div>
        </div>
    );
};

export default PostHeader;