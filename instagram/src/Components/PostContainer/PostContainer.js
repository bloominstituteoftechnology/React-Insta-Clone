import React from 'react';
import './PostContainer.css';
import like from '../../assets/like.png';
import comment from '../../assets/comment.png';
const PostContainer = props => {
    console.log("PROPS: ", props);
    return (
        
        props.data.map((obj) => {
            return (
                <div className = "postwrapper" key={obj.username + obj.thumbnailUrl + obj.imageUrl + obj.comments.username + obj.comments.text}>
                    <div className = "profileAndUsername">
                        <img className = "profilePic" src = {obj.thumbnailUrl} alt = "tmbnl"/>
                        <p className = "userhandle">    {obj.username}</p>
                    </div>
                    <img className = "postImg" src = {obj.imageUrl} alt = "postImg"/>
                    <div className = "reactionIcons">
                        <img className = "like" src = {like} alt ="like"/>
                        <img className = "comment" src = {comment} alt = "comment"/>
                    </div>
                </div>
            );
        })
    );        
}

export default PostContainer;