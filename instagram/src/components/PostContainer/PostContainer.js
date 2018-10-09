import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import './PostContainer.css';

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

export default PostContainer;