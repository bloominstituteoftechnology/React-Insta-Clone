import React from 'react';
const LikingPost = props =>{
    return [
        <div>
        <div className="like-s"
        key="likes-icons-container"
        onClick={props.incrementLike}
        > </div>
            <div className="like-s-wrapper">
                <i className="far fa-heart"/> //AWESOME!!
        </div>

        <div className="like-s-wrapper">
            <i className="far fa-comment"/> 
                    </div>

        <div className="like-s" key="likes-container">
            <div className="like-s-wrapper">{props.likes}</div>
        </div>
        </div>
    ];
};

export default LikingPost;