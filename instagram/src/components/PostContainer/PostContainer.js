import React from 'react';
import Post from './Post';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {

    return(
    
        <div className='posts'>
    
            {props.posts.map((post, index) => {
                return(
                    <Post key={index} post={post}/>
                  
                );
            })}
            
        </div>

    );
}

PostContainer.propTypes = {
    post: PropTypes.arrayOf(PropTypes.object),
     
   };

export default PostContainer;