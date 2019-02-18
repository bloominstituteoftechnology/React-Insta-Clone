import React from 'react';


/*
Passed as Props from Post.js

username = {this.state.data.username}
thumbnailUrl = {this.state.data.thumbnailURL}
imageUrl = {this.state.data.imageUrl}
*/


const PostHeader = props => {
    return (
        <div>
            <div className="post-header">
                <img className="thumbnail-img" src={props.thumbnailUrl} alt="posting user's profile thumbnail" />
                <h3>{props.username}</h3>
            </div>

            
        </div>
    )
}


export default PostHeader