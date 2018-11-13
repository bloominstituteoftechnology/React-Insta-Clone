import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comments';
import CommentInput from './CommentInput';
import './CommentSection.css';
// import PostContainer from '../PostContainer/PostContainer';


const CommentSection = (props) => {

    let comments = props.post.comments.map ((comment, index) => {
        return <Comment comment={comment} key={index}/>
    })

    return (
        <div className='comment-section'>
            <div className='comment-header'>
                <img src={props.post.thumbnailUrl} alt='thumbnail' className='thumbnail' />
                <h4>{props.post.username}</h4>
            </div>
            <div className='main-image'>
                <img src={props.post.imageUrl} alt='main ' />
            </div>
            <div className='main-content'>
               
                <div className='likes'>
                    <i className="far fa-heart fa-2x comment-icons"></i>
                    <i className="far fa-comment fa-2x comment-icons"></i>
                    <h4> {props.post.likes} likes </h4>
               </div>
               
               <div className='comment-content'> 
                    { comments }
                
                    <h5 className='timestamp'>
                        {props.post.timestamp} 
                    </h5>
                </div>

                <div>
                    <CommentInput />
                </div>

            </div>

        </div>
    );
}
CommentSection.propTypes = {
    post: PropTypes.shape ({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf ({
            username: PropTypes.string,
            text: PropTypes.string,
        })
    })
}

export default CommentSection;