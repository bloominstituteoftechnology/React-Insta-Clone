import React from "react";

const PostContainer = props => {
    console.log(props);
    return (
        <div className = "PostContainer">
            {props.profile.map((profile) => {
                return(<div className='Profile__Username' key={(profile.username + profile.username.index)}>
                        <h3 key={profile.username.index + profile.username}>{profile.username}</h3>
                        <img key={profile.imageUrl.index + profile.imageUrl} src ={profile.imageUrl} alt=''></img>
                        <div>{props.children}</div>
                        <div key={profile.thumbnailUrl.index + profile.thumbnailUrl}>{profile.thumbnailUrl}</div>
                    </div>
                );
            })}
        </div>
    )
};

export default PostContainer;