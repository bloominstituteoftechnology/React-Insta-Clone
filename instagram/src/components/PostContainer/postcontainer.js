import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/commentsection'

const PostContainer = (props) => {
    return ( 
        <div>
            <h2><img src={props.data.thumbnailUrl} alt=""/>{props.data.username}</h2>
            <img src={props.data.imageUrl} alt=""/>
            <CommentSection data={props.data} />
        </div>
     );
}
 
export default PostContainer;