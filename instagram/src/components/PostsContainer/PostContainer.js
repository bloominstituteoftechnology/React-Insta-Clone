import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    console.log(props)
return( 
<div>    
    {props.posts.map(post => 
        <div key ={post.timestamp}> 
        <img className="thumb" src={post.thumbnailUrl} alt= "user thumbnail"/>
        <h6>{post.username}</h6>
            <img src={post.imageUrl} alt="user post img"/>
            <span className="bt">
            <i className="far fa-heart" onClick={()=>props.handleLikes(post.id)}></i>
            <i className="far fa-comment"></i>
            </span>
            <strong><span className="likes">{post.likes} Likes</span></strong>
            <span className="commentz">
            <span className="hour"> 3 hours ago</span>
            <CommentSection 
                comments={post.comments} /></span>
        </div>
    )} 
</div>)
}

PostContainer.propTypes = {
posts: PropTypes.arrayOf(
    PropTypes.shape({
        username: PropTypes.string,
        imgUrl: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        comments: PropTypes.array,
        likes: PropTypes.number
    })
)
}

export default PostContainer;