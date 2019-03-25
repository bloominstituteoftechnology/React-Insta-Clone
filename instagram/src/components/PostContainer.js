import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';


const PostContainer = props => {
    return( 
    <div>    
        
        {props.posts.map(post => 
            <div key ={post.timestamp}> 
            <img src={post.thumbnailUrl} alt={post.timestamp}/>
                <img src={post.imageUrl} alt={post.timestamp}/>
                <CommentSection 
                
                    comments={post.comments} />
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