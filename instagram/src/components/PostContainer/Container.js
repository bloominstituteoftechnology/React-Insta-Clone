import React from 'react';
// import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
import './post.css';
// import Comment from '../CommentSection/Comment';
import CommentSection from "../CommentSection/CommentSection";
import Likes from "../CommentSection/Likes";



const Container = props => {
    const comments = props.post.comments;
    const commentsArray = comments.map( (comment, index) => (
        <ul className="commentPostUl"key={index} value={comment}><span className="bold">{comment.username}</span> {comment.text}</ul> 
    ))
    console.log(props)
    return (
        <div>
            <section className="container">
                {props.post.id} 
                <section className="userNameAndImage"> 
                    <img src={props.post.thumbnailUrl} alt="thumb" id="thumbnail"/>
                    <div className="username">{props.post.username}</div>
                </section>
                <section className="imagePost">
                    <img src={props.post.imageUrl} alt="lgImage" className="postedImage"/>
                </section>
                <section className="reactions">
                    {/* {<div className="heartContainer"><div className="heart"></div></div>} */}
                    {/* <div className="likes">{props.post.likes} likes </div> */}
                    <Likes like={props.post.likes} />
                    <div className="commentOnPost">{commentsArray}</div>
                    {/* <Comment comment ={commentsArray}/> */}
                    <div className="timeStamp">{props.post.timestamp}</div>
                    <CommentSection usercomments={props.post.comments} />
                </section>
            </section>
        </div>
      
    )
}

Container.propTypes = {
    post: PropTypes.shape({
        index: PropTypes.number,
        username: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    })
}

export default Container;