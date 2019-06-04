import React, { useState } from 'react';
import pt from 'prop-types';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import faker from 'faker';
import { IoIosHeartEmpty} from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import CommentSection from '../CommentSection/CommentSection';
import Form from '../Form/Form';
import './PostContainer.css';

const PostContainer = ({ props }) => {
    const { comments, thumbnailUrl, imageUrl, timestamp, likes, username } = props;
    const  commentDate = timestamp.replace(/th/, "");
    const [inputValue, setChange] = useState('');
    const [inputComment, setComment] = useState(comments);
    const [createdAt, settimestamp] = useState(moment(new Date(commentDate)).format("MMM D LTS"));

    const [addLikes, updateLikes] = useState(likes);

    const handleChange = (e) =>{
        setChange(e.target.value);
      }
    const postComment = (e) => {
        e.preventDefault();
        const newComment = {
            id: uuidv4(),
          username: faker.name.findName(),
          text: inputValue
        };
        setComment(comments.concat(newComment));
        setChange('');
        settimestamp(moment(new Date()).format("MMM D LTS"))
      }
      const handleLikes = () =>{
        let newLike = likes;
        updateLikes(newLike + 1)
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
            <span
            onClick={handleLikes}
            ><IoIosHeartEmpty /></span>

            <span><FaRegComment/></span>
            </div>
            {addLikes} likes</div>
            {
                inputComment.map((comment) =>{
                return <CommentSection key={comment.id} props={comment}/>
            })
            }
            <div className="timestamp">
            {createdAt}</div>
            <Form 
                inputValue={inputValue}
                changeHandler={handleChange}
                addComment={postComment}
            />
        </div>
    )
}

export default PostContainer;

PostContainer.propTypes = {
    props: pt.shape({
        comments: pt.arrayOf(pt.shape({
            id: pt.string.isRequired,
            username: pt.string.isRequired,
            text: pt.string.isRequired
        })),
        thumbnailUrl: pt.string.isRequired,
        imageUrl: pt.string.isRequired, 
        timestamp: pt.string.isRequired, 
        likes: pt.number.isRequired, 
        username: pt.string.isRequired
    }).isRequired
}