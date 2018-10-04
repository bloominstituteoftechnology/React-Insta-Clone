import React from "react";

const PostContainer = props => (
    <div className="post-container"> //Container which contains the entire post content
        <div className="header"> //Header section of the post which contains the profile picture and username only
            <div className="profile-picture"></div>
            <div className="username"></div>
        </div> //End Header
        <div className="post-picture-container"></div> //Contains the picture displayed in the post
            //INSERT COMMENTS SECTION COMPONENT HERE
    </div>
);

export default PostContainer;