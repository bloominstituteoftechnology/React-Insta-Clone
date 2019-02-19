import React from 'react';


const InstaPost = (props) => {
    
    return (
        <div>
            <img src={props.instaPost.thumbnailUrl}/>
            <p>{props.instaPost.username}</p>
            <img src={props.instaPost.imageUrl}/>
           
        
        </div>
    )
}

export default InstaPost