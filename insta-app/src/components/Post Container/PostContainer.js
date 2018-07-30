import React from 'react'; 
import PropTypes from 'prop-types'; 
import CommentSection from './CommentSection'; 

const PostContainer = props =>{
    return(
    <div className="post-container">
    <div className ="img-post">
    </div>
    <CommentSection />
    </div>
    )
}
export default PostContainer; 