import React from 'react';


const Post = props => {
    return(
        <div className="post"> 
            <div className="thumbnail-profile">
                <img src={props.thumbnail} alt="thumbnail"/>
                <p>{props.username}</p>
            </div>

            <div className="image">
                <img src={props.image} alt="user-pic" />
            </div>
        </div>
    );
}

export default Post;
