import React from 'react';


const Posts = (props) => {return (
    <div className="postBox">
        <div className="userTag">
            {props.post.username} 
            <img alt="thumphoto" src={props.post.thumbnailUrl} />
        </div>
        <img alt="imgurl" src={props.post.imageUrl} />
        <div className="icons">
            <img className="heartIcon" alt="iconHeart" src="/React-Insta-Clone/assets/14949.png" />
            <img className="chatbubbleIcon" alt="iconchatbubble" src="/React-Insta-Clone/assets/Sed-07-512.png" />
            <img className="followerIcon" alt="iconfollower" src="/React-Insta-Clone/assets/886412_user_512x512.png" />
        </div>
        {props.post.likes}
        {props.post.timestamp}
    </div>
    )};

export default Posts;
