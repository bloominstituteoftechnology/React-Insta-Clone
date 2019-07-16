import React from 'react';
import PropTypes from 'prop-types';
import './post-container.css';

import CommentSection from '../CommentSection/CommentSection';
import PostIcons from '../PostIcons/PostIcons';


const PostContainer = props => {

 

    return(
        <div className="body-container">
                {props.postsData.map( post => (
                  <div className="post" key={post.id}>
                    <div className="post-header">
                        <img className="profile-pic" src={post.thumbnailUrl} alt="profile-pic" />
                        <h1 className="username">{post.username}</h1>
                    </div>
                    <div className="post-pic">
                        <img src={post.imageUrl} alt="post-pic"/>
                    </div>
                     <PostIcons likes={post.likes} id={post.id}/>
                     <CommentSection  comments={post.comments} newComment={props.newComment}/>
                  </div>

                


                ))}
        </div>

    )
}


//Validate that the data coming down from props is an array of objects
PostContainer.propTypes = {
    postsData: PropTypes.arrayOf(PropTypes.object)
     
   }
   







export default PostContainer;