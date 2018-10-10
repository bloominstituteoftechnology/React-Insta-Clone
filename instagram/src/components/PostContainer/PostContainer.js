import React from 'react';
import Post from './Post';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {

    return(
    
        <div className='posts'>
    
            {props.posts.map((post, index) => {
                if(post.username.indexOf(props.search) !== -1)
                return(
                    <Post key={index} post={post}  index={index}
                    newComment={props.newComment}  onCommentChange={props.onCommentChange} 
                    addNewComment={props.addNewComment}/>
                );
            })}
            
        </div>

    );
}

PostContainer.propTypes = {
    post: PropTypes.arrayOf(PropTypes.object),
     
   };

export default PostContainer;