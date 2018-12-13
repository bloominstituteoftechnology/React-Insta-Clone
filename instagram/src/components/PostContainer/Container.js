import React from 'react';
// import PostContainer from './PostContainer';
import PropTypes from 'prop-types';
import './post.css';



const Container = props => {
    const comments = props.post.comments;
    const commentsArray = comments.map( (comment, index) => (
        <ul key={index} value={comment}><span className="bold">{comment.username}</span> {comment.text}</ul> 
    ))
    return (
        <div>
            <section className="container">
                {props.post.id} 
                <section className="userNameAndImage"> 
                    <img src={props.post.thumbnailUrl} alt="thumb" id="thumbnail"/>
                    {props.post.username}
                </section>
                <section className="imagePost">
                    <img src={props.post.imageUrl} alt="lgImage" className="postedImage"/>
                </section>
                <section className="reactions">
                    <div className="heart"></div>
                    {props.post.likes} likes
                    {commentsArray}
                    {props.post.timestamp}
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