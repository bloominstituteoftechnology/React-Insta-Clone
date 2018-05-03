import React from 'react';
import './PostContainer.css';

const PostContainer = props => {
    console.log("PROPS: ", props);
    return (
        
        props.data.map((obj) => {
            return (
                <div class = "postwrapper" key={obj.username + obj.thumbnailUrl + obj.imageUrl}>
                    <div class = "profileAndUsername">
                        <img class = "profilePic" src = {obj.thumbnailUrl} alt = "tmbnl"/>
                        <p class = "userhandle">{obj.username}</p>
                    </div>
                    <img class = "postImg" src = {obj.imageUrl} alt = "postImg"/>
                    

                        {/*I want the thumbnail and the username in its own div, 
                        the image in another space, and the likes and timestamps in yet another div*/}
                </div>
            );
        })
    );        
}
export default PostContainer;