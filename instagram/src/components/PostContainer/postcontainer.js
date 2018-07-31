import React from 'react';
import CommentSection from '../CommentSection/commentsection'
import './postcontainer.css'
import PropTypes from 'prop-types';
import Post from './post'

const PostContainer = (props) => {
    return ( 
        <div className="row post-container">
            <Post data={props.data}/>
            <CommentSection data={props.data} />
        </div>
     );
}

PostContainer.propTypes = {
    data: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number       
    })
};
 
export default PostContainer;