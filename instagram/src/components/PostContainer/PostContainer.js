import React from "react";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = props => {
    console.log(props);
    return (
        <div className = "Post">
            {props.profile.map((profile, index) => {
                return(
                    <div className='Post__Full' key={(profile.username + index)}>
                        <div className='Post__Id'>
                            <img className="Post__Thumbnail" key={index + 'thumbnailUrl'} src={profile.thumbnailUrl} alt=''></img>
                            <h6 className="Post__Username" key={index + profile.username}>{profile.username}</h6>
                        </div>
                        <img className="Post__Img" key={index + 'imageUrl'} src ={profile.imageUrl} alt=''></img>
                        <div className="Post__LikeIcons">
                            <img className='Post__Icon Heart' src="https://image.flaticon.com/icons/svg/149/149217.svg" alt="Something's missing!"></img>
                            <img className='Post__Icon SpeakBubble' src="https://image.flaticon.com/icons/svg/130/130958.svg" alt="Something's missing!"></img>
                        </div>
                        <h5 className="Post__Likes" key={index+'likes'}>{profile.likes} likes</h5>
                            
                        <CommentSection commentList = {profile.comments}/>
                    </div>
                );
            })}
        </div>
    )
};

export default PostContainer;