import React, { useState } from 'react';
import uuidv4 from 'uuid/v4';
import { IoIosHeartEmpty} from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import CommentSection from '../CommentSection/CommentSection';
import Form from '../Form/Form';
import './PostContainer.css';

const PostContainer = ({ props }) => {
    const { comments, thumbnailUrl, imageUrl, timestamp, likes, username } = props;
    const [inputValue, setChange] = useState('');
    const [inputComment, setComment] = useState(comments);
    const handleChange = (e) =>{
        setChange(e.target.value);
      }
    const postComment = (e) => {
        e.preventDefault();
        const newComment = {
            id: uuidv4(),
          username: "user",
          text: inputValue
        };
        setComment(comments.concat(newComment));
        setChange('');
      }
    
    return (
        <div className="post__container">
            <div className="user__deets">
                <img className="profile__pix" src={thumbnailUrl} alt="user-profile" />
                <p>{username}</p>
            </div>
            <div className="user__post">
                <img className="post__image" src={imageUrl} alt="user-post"/>
            </div>
            <div className="reaction">
            <div className="post__icons">
            <IoIosHeartEmpty /> <FaRegComment/>
            </div>
            {likes} likes</div>
            {
                inputComment.map((comment) =>{
                return <CommentSection key={comment.id} props={comment}/>
            })
            }
            <div className="timestamp">
            {timestamp}</div>
            <Form 
                inputValue={inputValue}
                changeHandler={handleChange}
                addComment={postComment}
            />
        </div>
    )
}

export default PostContainer;