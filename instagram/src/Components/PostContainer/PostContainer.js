import React from 'react';
import './PostContainer.css';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
const PostContainer = props => {
    console.log("PROPS: ", props);
    return (
        
        props.data.map((obj) => {
            return (
                <div class = "postwrapper" key={obj.username + obj.thumbnailUrl + obj.imageUrl + obj.comments.username + obj.comments.text}>
                    <div class = "profileAndUsername">
                        <img class = "profilePic" src = {obj.thumbnailUrl} alt = "tmbnl"/>
                        <p class = "userhandle">    {obj.username}</p>
                    </div>
                    <img class = "postImg" src = {obj.imageUrl} alt = "postImg"/>
                    <div class = "reactionIcons">
                        <img class = "reaction like" src = {like} alt ="like"/>
                        <img class = "reaction comment" src = {comment} alt = "comment"/>
                    </div>
                </div>
            );
        })
    );        
}

export default PostContainer;