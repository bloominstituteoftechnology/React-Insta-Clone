import React from 'react';
import { IoIosHeartEmpty} from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = (props) => {
    return (
        <div className="post__container">
            <div className="user__deets">
                <img className="profile__pix" src={props.post.thumbnailUrl} alt="user-profile" />
                <p>{props.post.username}</p>
            </div>
            <div className="user__post">
                <img className="post__image" src={props.post.imageUrl} alt="user-post"/>
            </div>
            <div className="reaction">
            <div className="post__icons">
            <IoIosHeartEmpty /> <FaRegComment/>
            </div>
            {props.post.likes} likes</div>
            {props.post.comments.map((comment, index) =>{
                console.log("===",comment);
                return <CommentSection key={index} props={comment}/>
            })
            }
            <div className="timestamp">
            {props.post.timestamp}</div>
        </div>
    )
}

export default PostContainer;